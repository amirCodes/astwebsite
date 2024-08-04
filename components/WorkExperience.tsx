"use client";
import React from "react";

const WorkExperience = () => {
  return (
    <div className="-my-6">
      <h1 className="heading">
        Lorem, ipsum dolor <span className="text-blue-500">experience</span>
      </h1>
      <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-blue-500 mb-1 sm:mb-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, vero.
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-green-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-green-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            Jul, 2026
          </time>
          <div className="text-xl font-bold text-slate-300 dark:text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, rem?
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-300">
          - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos tempore hic aliquid amet sint exercitationem veniam quis, voluptatem voluptate natus totam reiciendis facilis perferendis excepturi corrupti beatae. Iste eaque praesentium aperiam enim accusamus eos impedit adipisci consequuntur deserunt iusto? Laborum libero velit commodi placeat delectus molestiae quis praesentium dolorem, ea consectetur sint quisquam excepturi. Consequuntur quidem iure alias provident qui?
        </div>
      </div>

      {/* <!-- Item #2 --> */}
      <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-blue-500 mb-1 sm:mb-0">
          Lorem, ipsum dolor.
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-orange-400 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-gray-100 rounded-full">
            Apr, 2024
          </time>
          <div className="text-xl font-bold text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, placeat?
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui quibusdam repellendus nobis veritatis at a, quo cumque iusto tempore? Qui eaque, necessitatibus molestias magnam quas quibusdam cumque laborum dolorum blanditiis quia ea. Eius, quis dolorum? Nobis corrupti architecto cupiditate, nihil blanditiis quia odio possimus officiis adipisci voluptas, hic neque.
          
        </div>
      </div>

      {/* <!-- Item #3 --> */}
      <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-blue-500 mb-1 sm:mb-0">
          Lorem, ipsum dolor.
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-orange-400 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-gray-100 rounded-full">
            May, 2022
          </time>
          <div className="text-xl font-bold text-slate-400">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est?
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolores animi eum at nemo ipsa aliquid, nulla sapiente omnis quam!
        </div>
      </div>

      
    </div>
  );
};
export default WorkExperience;
