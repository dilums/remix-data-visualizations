var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 87,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-N2WRUFYI.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => ({ title: "Remix | Animations & Visualizations" });
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "bg-neutral-900 grid h-screen place-items-center text-neutral-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-neutral-800 max-w-4xl w-full rounded-md flex flex-wrap px-1.5 pt-1.5 pb-3 shadow-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 52
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_web = require("@react-spring/web"), import_recharts = require("recharts");

// app/components/Widget.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Widget({
  children,
  title,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `p-1.5 ${className}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-neutral-900 rounded-md h-full flex flex-col shadow-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between py-1.5 px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-neutral-400 font-semibold", children: title }, void 0, !1, {
        fileName: "app/components/Widget.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "text-neutral-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "svg",
        {
          className: "w-4 h-4",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Widget.tsx",
              lineNumber: 23,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Widget.tsx",
          lineNumber: 16,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Widget.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Widget.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/Widget.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Widget.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/data.tsx
var data = {
  daily: {
    headerData: [45676, 98140, 66854],
    users: [
      { name: "Sun", value: 1961 },
      { name: "Mon", value: 6017 },
      { name: "Tue", value: 660 },
      { name: "Wed", value: 116 },
      { name: "Thr", value: 4195 },
      { name: "Fri", value: 1626 },
      { name: "Sat", value: 1665 }
    ],
    pageViews: [
      { name: "home", value: 4625 },
      { name: "about", value: 8033 },
      { name: "contact", value: 3457 },
      { name: "blog", value: 8033 },
      { name: "post1", value: 5806 },
      { name: "post2", value: 1520 }
    ]
  },
  monthly: {
    headerData: [56547, 20710, 74732],
    users: [
      { name: "Jan", value: 5930 },
      { name: "Feb", value: 9700 },
      { name: "Mar", value: 60 },
      { name: "Apr", value: 1868 },
      { name: "May", value: 3620 },
      { name: "Jun", value: 6471 },
      { name: "Jul", value: 8747 },
      { name: "Aug", value: 2243 },
      { name: "Sep", value: 9870 },
      { name: "Oct", value: 635 },
      { name: "Nov", value: 7652 },
      { name: "Dec", value: 2534 }
    ],
    pageViews: [
      { name: "home", value: 4952 },
      { name: "about", value: 6626 },
      { name: "contact", value: 6415 },
      { name: "blog", value: 1577 },
      { name: "post1", value: 1493 },
      { name: "post2", value: 2785 }
    ]
  },
  yearly: {
    headerData: [37972, 95786, 11267],
    users: [
      { name: "2017", value: 9543 },
      { name: "2018", value: 6997 },
      { name: "2019", value: 5608 },
      { name: "2020", value: 484 },
      { name: "2021", value: 2466 }
    ],
    pageViews: [
      { name: "home", value: 8137 },
      { name: "about", value: 6064 },
      { name: "contact", value: 6924 },
      { name: "blog", value: 9533 },
      { name: "post1", value: 9760 },
      { name: "post2", value: 4573 }
    ]
  }
}, data_default = data;

// app/routes/index.tsx
var import_node2 = require("@remix-run/node"), import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), COLORS = ["#82af9b", "#c8c8aa", "#facdaf", "#fa9b9b", "#ff4164"], loader = ({ request }) => {
  let tab = new URL(request.url).searchParams.get("tab"), rtData = [];
  return tab && data_default.hasOwnProperty(tab) ? (rtData = data_default[tab], (0, import_node2.json)(
    { ...rtData, tab },
    {
      headers: {
        "Cache-Control": "max-age=3600, stale-while-revalidate=60"
      }
    }
  )) : (0, import_node2.redirect)("/?tab=daily");
};
function Index() {
  let [springs, api] = (0, import_web.useSprings)(3, () => ({ value: 0 })), graphData = (0, import_react3.useLoaderData)();
  return (0, import_react4.useEffect)(() => {
    api.start((index) => ({ value: graphData.headerData[index] }));
  }, [graphData, api]), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full flex  items-center justify-between p-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "font-semibold text-lg", children: "Site Analytics" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "flex space-x-2", children: ["daily", "monthly", "yearly"].map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_react3.Link,
        {
          to: { pathname: "/", search: `?tab=${key}` },
          className: `inline-block text-center w-28 py-1  rounded-md font-semibold  text-neutral-300 shadow-xl capitalize focus:outline-none focus:ring focus:ring-violet-300/25 ${graphData.tab === key ? "bg-violet-900 hover:bg-violet-900  " : "bg-gray-900/25 hover:bg-violet-700/25"}`,
          children: key
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 56,
          columnNumber: 15
        },
        this
      ) }, key, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    springs.map(({ value }, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      Widget,
      {
        title: ["New Users", "Active Users", "Conversions"][i],
        className: "w-1/3 h-24",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_web.animated.div, { className: " text-green-800 text-2xl grow grid place-items-center font-bold", children: value.to((n) => `+ ${Math.floor(n).toLocaleString()}`) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      },
      i,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 71,
        columnNumber: 9
      },
      this
    )),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Widget, { title: "Users", className: "w-2/3 h-96", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.ResponsiveContainer, { width: "100%", height: "100%", id: "aaa", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_recharts.BarChart,
      {
        width: 500,
        height: 300,
        data: graphData.users,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("linearGradient", { id: "grd-1", x1: "0", y1: "0", x2: "1", y2: "0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("stop", { stopColor: "#6432CF" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 97,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("stop", { offset: "1", stopColor: "#271057" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 95,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.CartesianGrid, { strokeDasharray: "3 3" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.XAxis, { dataKey: "name" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 102,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.YAxis, {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.Bar, { dataKey: "value", fill: "url(#grd-1)", radius: [15, 15, 0, 0] }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 84,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Widget, { title: "Page Views", className: "w-1/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.ResponsiveContainer, { width: "100%", height: "100%", id: "aaa", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.PieChart, { width: 400, height: 400, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_recharts.Pie,
        {
          data: graphData.pageViews,
          dataKey: "value",
          cx: "50%",
          cy: "50%",
          innerRadius: 60,
          outerRadius: 80,
          fill: "#82ca9d",
          label: !0,
          children: graphData.pageViews.map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_recharts.Cell,
            {
              fill: COLORS[index % COLORS.length]
            },
            `cell-${index}`,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 123,
              columnNumber: 17
            },
            this
          ))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 112,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_recharts.Tooltip, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "72dbcdd7", entry: { module: "/build/entry.client-H44Y4BKG.js", imports: ["/build/_shared/chunk-DY4WRGDU.js", "/build/_shared/chunk-ZPJQG6LS.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6S7SKEJ3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-R5G3KXV6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-72DBCDD7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
