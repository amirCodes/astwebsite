import React from "react";
import Link from "next/link";
const myResume = "./Amir-CV.pdf";
const Resume = () => {
  return (
    <div className="p-2  bg-black-200">
      <Link
        href="/"
        className="p-2 text-left decoration-slice font-semibold underline dark:text-white text-green-600"
      >
        Back to home
      </Link>
      <iframe src={myResume} width="100%" className="w-full min-h-screen" />
    </div>
  );
};

export default Resume;
