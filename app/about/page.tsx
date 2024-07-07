import React from "react";
import Link from "next/link";
import { SlActionUndo } from "react-icons/sl";
import WorkExperience from "@/components/WorkExperience";

const About = () => {
  return (
    <div className="p-4 bg-black-200 text-white">
      <div className="flex flex-col p-4 items-center text-center justify-center w-full px-5 mb-8 py-14 my-6 font-semibold t shadow-lg rounded-md border-2 border-gray-300">
        A software engineer have more than 5 years of expertise delivering tech
        solutions, as well as an avid coder and developed high-performance UI/UX
        and dashboards with JavaScript (ES6), PHP and Single Page Applications
        (SPAs). quick learner. Continually looking for methods to improve the
        development and communication processes. For any difficulty, I prefer
        simple code and elegant solutions.
        <div className="inline-flex items-center justify-center  text-green-500 dark:text-green-400 hover:text-blue-500 activ:underline">
          <Link href="/" className="p-2 font-smal">
            Back to home
          </Link>
          <SlActionUndo />
        </div>
      </div>
      <WorkExperience />
    </div>
  );
};

export default About;
