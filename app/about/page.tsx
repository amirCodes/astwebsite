import React from "react";
import Link from "next/link";
import WorkExperience from "@/components/WorkExperience";

function About() {
  return (
    <div className="pt-0">
      <Link
        href="/"
        className="p-2 text-left decoration-slice font-semibold underline dark:text-white "
      >
        Back to home
      </Link>
      <div className="p-4 items-center text-center justify-center w-full px-5 mb-8 py-14 my-6 font-semibold t shadow-lg rounded-md border-2 border-gray-300">
      A software engineer have more than 5 years of expertise delivering tech solutions, as well as an avid coder and developed high-performance UI/UX and dashboards with JavaScript (ES6), PHP and Single Page Applications (SPAs). quick learner. 
      Continually looking for methods to improve the development and communication processes. For any difficulty, I prefer simple code and elegant solutions.
      </div>
      <WorkExperience />
    </div>
  );
}

export default About;
