import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="pb-20 pt-36 mb-10">
      <div className="flex justify-center  my-2 ">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-row items-center lg:ml-[50%] md:ml-[50%] uppercase tracking-widest text-xs text-center dark:text-blue-500 w-full">
            Dynamic Web Magic with
            <div className="w-4 font-semibold ml-2 mr-4 -rotate-45 rounded-md bg-blue-500 text-white text-sm pl-1 pr-1 py-1 shadow-sm">
              React.js
            </div>
            <div className=" w-4 font-semibold ml-1 mr-4 -rotate-45 rounded-md bg-blue-500 text-white text-sm pl-1 pr-1 py-1 shadow-sm">
              Next.js
            </div>
            <div className=" w-4 font-semibold ml-1 mr-4 -rotate-45 rounded-md bg-blue-500 text-white text-sm pl-1 pr-1 py-1 shadow-sm">
              Node.js
            </div>
          </div>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Amir, a Software Engineer based in Kuala Lumpur.
          </p>

          <Link href="https://github.com/amirCodes" target="_blank" rel="Check out my github account" className="z-50" >
            <MagicButton
              title="GitHub"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
