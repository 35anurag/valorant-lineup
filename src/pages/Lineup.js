import React from "react";

import Agent from "../components/Agent";
import Map from "../components/Map";
import Mapimg from "../components/Mapimg";

import "./Lineup.css";


const Lineup = () => {

  return (
    <div className="bg-[#ece8e1] h-screen">
      <div className="pt-[6rem] ml-[7rem] mr-[7rem]">
        <p className="h-[85vh] w-[0.5px] bg-slate-500 absolute top-[5.5rem] left-0 ml-[6rem]"></p>
        <div className="flex flex-row gap-[2rem] h-[489px]">
          <div className="min-w-[18rem] w-0.75/3 overflow-y-auto hide-scrollbar">
            <Map />
          </div>
          <div className="min-w-[30rem] w-1.5/3 bg-black mt-[-13px] overflow-hidden">
            <Mapimg />
          </div>
          <div className="min-w-[18rem] w-0.75/3 overflow-hidden">
            <Agent />
          </div>
        </div>
        <p className="h-[85vh] w-[0.5px] bg-slate-500 absolute top-[5.5rem] right-0 mr-[6rem]"></p>
      </div>
    </div>
  );
};

export default Lineup;
