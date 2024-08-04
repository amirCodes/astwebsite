import React from "react";
import Link from "next/link";
const LandingPage = "./LandingPage.pdf";
const Resume = () => {
  return (
    <div className=" bg-black text-white-100 flex justify-center items-center flex-col h-screen sm:px-10 p-5 ">
      <Link
        href="/"
        className="p-2 mt-5 text-left decoration-slice font-semibold underline dark:text-white text-green-600"
      >
        Back to home
      </Link>
      <iframe src={LandingPage} width="100%" className="w-full min-h-screen" />
    </div>
  );
};

export default Resume;
