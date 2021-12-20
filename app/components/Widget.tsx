
export default function Widget({ children, title, className }: { 
    title:string 
    className:string
    children: React.ReactNode 
}){
    return <div className={`p-1.5 ${className}`}>
    <div className="bg-neutral-900 rounded-md h-full flex flex-col shadow-xl">
      <div className="flex items-center justify-between py-1.5 px-2">
        <h2 className="text-neutral-400 font-semibold">{title}</h2>
        <button className="text-neutral-600">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
      {children}
    </div>
  </div>
}