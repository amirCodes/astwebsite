import React from "react";
import Link from "next/link";
import WorkExperience from "@/components/WorkExperience";

function About() {
  return (
    <div className="pt-40">
      <Link
        href="/"
        className="p-2 text-left decoration-slice font-semibold underline dark:text-white"
      >
        Back to home
      </Link>
      <WorkExperience />
    </div>
  );
}

export default About;
