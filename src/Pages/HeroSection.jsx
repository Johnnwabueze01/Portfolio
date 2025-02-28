import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import Mypic from "../assets/jay.png"

 const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen gap-6 p-8 text-white">
      <div className="w-full md:w-1/2 p-6 text-center">
        <h2 className="text-2xl font-bold mb-5">Hi, I'm 👋 John Nwabueze, a Software Developer specializing in Front End Development</h2> 
        <div className="hire flex justify-center">
         <button className="pl-5 pr-5 pt-2 pb-2 rounded cursor-pointer font-bold flex items-center">
           <a href="mailto:johnnwabueze70@gmail.com" id="hire" className="flex items-center">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" id="iconh" />
      Hire Me
    </a>
  </button>
</div>


      </div>

      <div className="w-full h-screen md:w-1/2 p-6 text-center">
       <img src={Mypic} alt="" />
      </div>
    </div>
  );
};

  export default HeroSection;
  