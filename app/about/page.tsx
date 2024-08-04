import React from "react";
import Link from "next/link";
import { SlActionUndo } from "react-icons/sl";
import WorkExperience from "@/components/WorkExperience";

const About = () => {
  return (
    <div className=" bg-black text-white-100   min-h-screen sm:px-10 p-5">
      <div className="flex flex-col p-4 items-center text-center justify-center w-full px-5 mb-8 py-14 my-6 font-semibold t shadow-lg rounded-md border-2 border-gray-300">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, hic molestiae vitae dolores officia incidunt delectus dolorem sint, velit, consequuntur similique saepe. Architecto iste veritatis, suscipit adipisci consequuntur voluptatum et vitae ut quae illo maiores provident sequi harum hic eveniet esse vel. Esse, quisquam quae fugiat voluptate ipsa officia, sit eaque, facilis distinctio placeat quo a! Architecto, sunt delectus? Est at, magni ab necessitatibus ut sit dignissimos aut ipsum eius officia fugiat aliquam quasi quod distinctio eaque, mollitia assumenda molestias reiciendis dolor voluptas rerum. Nostrum cum rerum aperiam.
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
