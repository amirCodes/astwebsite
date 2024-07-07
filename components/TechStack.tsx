import React from "react";
import { PiPencilBold, PiLinkBold } from "react-icons/pi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import StackIcon from "tech-stack-icons"; // You can also use any another import name

import { techStackLists } from "@/data";
import Link from "next/link";

const TechStackList = () => {
  return (
    <div className=" py-4 sm:py-32">
      <div className="flex flex-col gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="w-full">
          <h2 className="text-3xl font-bold tracking-tight dark:text-gray-100 sm:text-4xl">
            Tech stacks: Mastering Modern Tools for Development and Deployment
          </h2>
          <p className="mt-2 text-lg leading-8 dark:text-gray-100">
            As a software engineer, I specialize in React.js for dynamic UIs,
            Node.js for scalable backend solutions, and TypeScript for robust,
            type-safe code. I've also leveraged AWS and Docker for cloud
            deployments, Git for version control, and MongoDB for efficient data
            management.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-4 gap-y-5 sm:grid-cols-2 sm:gap-y-2 md:grid-cols-3"
        >
          {techStackLists.map((stack) => (
            <li
              key={stack.name}
              className="group/item flex justify-between shadow-lg ease-out duration-300 hover:shadow-gray-500 transform-gpu border-2 p-2 rounded-lg border-gray-600 bg-slate-800 group-hover/item:border-gray-400"
            >
              <div className="flex items-center gap-x-6">
                {/* <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                /> */}
                <StackIcon
                  name={stack.iconName}
                  grayscale={false}
                  style={{ height: "86px", width: "auto" }}
                  className="fit m-0 p-0  text-blue-500"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-100">
                    {stack.name}
                  </h3>
                  <p className="line-clamp-2 text-sm font-normal leading-6 text-gray-200">
                    {stack.desc}
                  </p>
                  <p className="line-clamp-1 text-sm font-normal leading-6 text-gray-200">
                    {stack.founded}
                  </p>
                </div>
              </div>
              <div className="group/edit invisible group-hover/item:visible focus:text-blue-600 group-hover:text-blue-500">
                <Link
                  href={stack.url}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {" "}
                  <TiArrowForwardOutline width={65} height={65} />
                </Link>
                {/* <span className="group-hover/edit:text-gray-700 ...">Call</span> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechStackList;
