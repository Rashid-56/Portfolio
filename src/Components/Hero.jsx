import React from "react";
import Profile from "../assets/Profile/Profile.png";
import { ArrowDownToLine } from "lucide-react";
import resume from "../assets/Resume/MirzaRashidResume.pdf"
const Hero = () => {
  return (
    <div>
      <div className="container px-8  gap-6 flex md:mt-[110px] mt-[200px]  md:flex-row flex-col  items-center ">
        <div className=" ">
          <h1 className="font-bold md:text-4xl text-2xl">Hello, I'm Rashid</h1>
          <h1 className="font-semibold md:text-4xl text-2xl name frontend">
            frontend developer
          </h1>
          <h1 className="mt-5  text-gray-400 w-70 ">
            Frontend and React Developer , seeking to apply competent
            development skills with focus on collaboration, communication and
            passion.{" "}
          </h1>
        </div>
        <div className="basis-1/2">
          <img src={Profile} width={700} alt="" />
        </div>
      </div>
      <div className="text-center">
        <button class=" border-none bg-gradient-to-t  from-blue-700 text-white to-cyan-500  font-semibold py-2 px-4  border-gray-400 rounded-full text-center shadow hover:font-extrabold">
          <a href={resume}>
        <div className="flex gap-1 justify-between">
          <p>
            <ArrowDownToLine />
            
            </p>
            <p>Download Resume</p>
        </div>
        </a>
          
        </button>
      </div>
    </div>
  );
};

export default Hero;
