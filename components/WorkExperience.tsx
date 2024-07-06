"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

const Hero2 = () => {
  return (
    <div className="-my-6">
      <h1 className="heading">
        My work <span className="text-blue-500">experience</span>
      </h1>
      <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-blue-500 mb-1 sm:mb-0">
          Fron-end Software engineer
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-green-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-green-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            Jul, 2024
          </time>
          <div className="text-xl font-bold text-slate-600 dark:text-slate-200">
            TDCX (MY) Sdn. Bhd. Full-time, Jul 2024 - Present{" "}
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-400">
          • Own and drive query resolution through collaboration with in-house
          product operations & engineering groups to resolve all types of
          queries.
          <br />
          • Work on case volumes across email and chat channels
          <br />
          • Drive overall customer satisfaction metrics ensuring service quality
          through case journey and providing regular updates across touch
          points.
          <br />
          • Drive adherence to service levels across channels and achieve Best
          in Class productivity, impacting resolution times for end customers.
          <br />• Partner with in-house technical specialists to educate
          advertisers on product features and common issue types
        </div>
      </div>

      {/* <!-- Item #2 --> */}
      <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-blue-500 mb-1 sm:mb-0">
          Software Engineer
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-orange-400 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-gray-100 rounded-full">
            Apr, 2019
          </time>
          <div className="text-xl font-bold text-slate-400">
            Infosys Gateway Sdn Bhd, Full-time, Apr 2019 - Jun 2024 · 5 yrs 4
            mos
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-500">
          - Designs and develops user interfaces (UI) for network security
          applications. <br />
          - Redesign and modifies applications based on clients preferences.
          <br />
          - Integrated third-party applications with APIs to add the best
          possible features.
          <br />
          - Integrating live reporting for the network and integrating Chart.js,
          AmCharts.js, and other JS libraries for demoing live data on the
          dashboard.
          <br />
          - Involved with coding and deployment packages on production.
          <br />
          - Tests and code optimization for high performance.
          <br />
          - Manage and maintain network security web-based applications and
          platforms, reduce human error, and speed up production processes.
          <br />
          - Installs, supports software applications, and does the update for
          the latest release with the documentation.
          <br />
          - Used Adobe Illustrator and Canvas for designing.
          <br />
          <b>Stacks implemented:</b> <br />
          Front end: React.js, Next.js, Chart.js APIs, Tailwind CSS, Bootstrap
          4.0.
          <br />
          Back end: Node.js, Epress.js and Supabase.
          <br />
          Database: MongoDB, SQL, PostgreSQL and firebase.
          <br />
          Clouds: AWS and Microsoft Azure.
          <br />
          Application Servers: NginX, Apache.
          <br />
        </div>
      </div>

      {/* <!-- Item #3 --> */}
      <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* <!-- Purple label --> */}
        <div className="font-caveat font-medium text-2xl text-blue-500 mb-1 sm:mb-0">
          Software Engineer
        </div>
        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-orange-400 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-gray-100 rounded-full">
            May, 2018
          </time>
          <div className="text-xl font-bold text-slate-400">
            {" "}
            N2N Connect Berhad, May 2018 - Apr 2019 · 1 yr
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-slate-500">
          Here I start as Front-end Software engineer. <br />
          - Develops user interfaces (UI) for in-house systems.
          <br />
          - Develops applications based on components designed by designer team.
          <br />
          - Tests and code optimization for better performance.
          <br />
          - Documentation and reports.
          <br />
          <b>Stacks implemented:</b> <br />
          Front end: ReactJs, Redux, APIs, Ant design UI, Semantic-UI, Bootstrap
          4.0, big-calendar
          <br />
          Back end: Java, spring framework
          <br />
          Database: postgresQL
          <br />
        </div>
      </div>

      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="font-caveat font-medium text-2xl text-blue-500 mb-1 sm:mb-0">
          Internship, Full Stack Developer
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-orange-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-gray-100 rounded-full">
            Nov-2017
          </time>
          <div className="text-xl font-bold text-slate-400">
            Spassolab Sdn Bhd, May 2017 2019 - Jan 2018 · 9 mos{" "}
          </div>
        </div>

        <div className="text-slate-500">
          Continuing my internship here as a full-stack developer We use
          <br />
          <b>Stacks implemented:</b> <br />
          PHP,SQL, JavaScript, jQuery, Ajax, HTML, and CSS for web development.
        </div>
      </div>
    </div>
  );
};
export default Hero2;
