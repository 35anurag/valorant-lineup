import React from "react";
import Logo from "../assets/valo-logo.png";
import {Link} from "react-router-dom"

import { CiVideoOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

const Plan = () => {
  return (
    <div className="h-[80vh]">
      <div className="font-bold text-2xl flex flex-col items-center justify-center">
        <p className="bg-red-500 w-[6rem] h-[6rem] absolute right-[615px] mt-[5px] rounded-full -z-10"></p>
        <div className=" font-bold text-2xl flex flex-row items-center justify-center">
          <img className="w-[5rem] h-[auto]" src={Logo} alt="logo" />
          <p className="mr-[8px]">
            <span className="text-white">Li</span>neup
          </p>
        </div>
      </div>

      <div className="my-[8rem] flex flex-row items-center justify-center gap-7">
        <Link to="/lineup" className="relative w-[15rem] h-[12rem] border-2 border-gray-300 rounded-xl p-5 flex flex-col justify-start">
          <FaArrowRightLong className="absolute top-0 right-0 mr-3 mt-3 w-[20px] h-[auto]" />
          <CiVideoOn className="w-[2.5rem] h-[auto]" />
          <p className="text-[30px] font-semibold">Learn Lineups</p>
          <p className="text-[20px] font-medium opacity-70 text-left">
            Watch video and learn lineup 
          </p>
        </Link>
        {/* watch video */}
        <Link to="/create" className="relative w-[15rem] h-[auto] border-2 border-gray-300 rounded-xl p-5 flex flex-col justify-start">
        <FaArrowRightLong className="absolute top-0 right-0 mr-3 mt-3 w-[20px] h-[auto]" />
          <CiVideoOn className="w-[2.5rem] h-[auto]" />
          <p className="text-[30px] font-semibold">Create</p>
          <p className="text-[20px] font-medium opacity-70 text-left">
            Create your lineup of any agent
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Plan;
