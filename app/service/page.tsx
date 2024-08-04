import React from "react";
import Link from "next/link";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className=" bg-black text-white-100 flex justify-center items-center flex-col min-h-screen sm:px-10 px-5">
      <h1 className="text-center m-2 p-5">Services page, need to edit this</h1>
      <Link
        href="/"
        className="p-2 text-left decoration-slice font-semibold underline dark:text-white text-green-600"
      >
        Back to home
      </Link>
      <Services />
    </div>
  );
};

export default ServicesPage;
