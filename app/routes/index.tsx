import { Link, useLoaderData, json, redirect } from "remix";
import { useSprings, animated } from "@react-spring/web";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import Widget from "~/components/Widget";
import data from "~/data";

import type { LoaderFunction } from "remix";
import { useEffect } from "react";

const COLORS = ['#82af9b', '#c8c8aa', '#facdaf', '#fa9b9b','#ff4164'];


export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const tab = url.searchParams.get("tab");

  let rtData = [];
  if (tab && data.hasOwnProperty(tab)) {
    rtData = data[tab];
    return json(
      { ...rtData, tab },
      {
        headers: {
          "Cache-Control": "max-age=3600, stale-while-revalidate=60",
        },
      }
    );
  }
  return redirect("/?tab=daily");
};
export default function index() {
  const [springs, api] = useSprings(3, () => ({ value: 0 }));
  const graphData = useLoaderData();

  useEffect(() => {
    api.start((index) => ({ value: graphData.headerData[index] }));
  }, [graphData]);
  return (
    <>
      <div className="w-full flex  items-center justify-between p-1.5">
        <h1 className="font-semibold text-lg">Site Analytics</h1>
        <ul className="flex space-x-2">
          {["daily", "monthly", "yearly"].map((key) => (
            <li key={key}>
              <Link
                to={{ pathname: "/", search: `?tab=${key}` }}
                className={`inline-block text-center w-28 py-1  rounded-md font-semibold  text-neutral-300 shadow-xl capitalize focus:outline-none focus:ring focus:ring-violet-300/25 ${
                  graphData.tab === key
                    ? "bg-violet-900 hover:bg-violet-900  "
                    : "bg-gray-900/25 hover:bg-violet-700/25"
                }`}
              >
                {key}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {springs.map(({ value }, i) => (
        <Widget
          title={["New Users", "Active Users", "Conversions"][i]}
          className="w-1/3 h-24"
          key={i}
        >
          <animated.div className=" text-green-800 text-2xl grow grid place-items-center font-bold">
            {value.to((n) => `+ ${Math.floor(n).toLocaleString()}`)}
          </animated.div>
        </Widget>
      ))}

      <Widget title="Users" className="w-2/3 h-96">
        <ResponsiveContainer width="100%" height="100%" id="aaa">
          <BarChart
            width={500}
            height={300}
            data={graphData.users}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="grd-1" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#6432CF" />
                <stop offset="1" stopColor="#271057" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />

            <Bar dataKey="value" fill="url(#grd-1)" radius={[15, 15, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Widget>
      <Widget title="Page Views" className="w-1/3">
        <ResponsiveContainer width="100%" height="100%" id="aaa">
          <PieChart width={400} height={400}>
            
            <Pie
              data={graphData.pageViews}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              {graphData.pageViews.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Widget>
    </>
  );
}
