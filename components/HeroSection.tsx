import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const HeroSection = () => {
  return (
    <div className="pb-20 pt-36 mb-10">

   
 

      <div className="flex justify-center  my-2 ">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center dark:text-blue-500 w-full">
            Dynamic Web Magic with Next.js, React.js, Node.js
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Amir, a Software Engineer based in Kuala Lumpur.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;