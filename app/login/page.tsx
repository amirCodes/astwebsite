import React from "react";
import Link from "next/link";
const Resume = () => {
  return (
    <div className=" bg-black text-white-100 flex justify-center items-center flex-col h-screen sm:px-10 px-5">
      <Link href="/" className="p-2 text-left decoration-slice dark:text-white">
        Access not allowed, Click here to go back to home
      </Link>
      <div className="border border-blue-300 shadow rounded-md p-4 w-full h-screen mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
