import React from "react";
import Link from "next/link";
const myResume = "./Amir-CV.pdf";
function Resume() {
  return (
    <div className="p-2 m-2">
      <Link
        href="/"
        className="p-2 text-left decoration-slice font-semibold underline dark:text-white"
      >
        Back to home
      </Link>
      <iframe src={myResume} />
    </div>
  );
}

export default Resume;
