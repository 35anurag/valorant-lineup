import React, { useContext, useState } from "react";
import { mapContext } from "../components/MapContext";
import Lastpart from "../components/Lastpart";

import { IoSyncOutline } from "react-icons/io5";

import "./Lineup.css";

const Lineup = () => {
  const [attDef, isAttDef] = useState(false)

  const handleAttDef=()=>{
    isAttDef(!attDef)
  }

  const { data } = useContext(mapContext);
  return (
    <div className="bg-[#ece8e1] h-screen">
      <div className="pt-[6rem] ml-[7rem] mr-[7rem]">
        <p className="h-[85vh] w-[0.5px] bg-slate-500 absolute top-[5.5rem] left-0 ml-[6rem]"></p>
        <div className="flex flex-row gap-[2rem] h-[489px]">
          <div className="min-w-[18rem] w-0.75/3 flex flex-col items-start gap-[1rem] overflow-y-auto hide-scrollbar">
            <h1 className="text-[#0f1923] font-bold text-[28px]">Maps:</h1>
            {data.map((data) => (
              <div key={data.id}>
                <div className="flex flex-row gap-[1rem] items-center relative">
                  <div>
                    <img
                      className="min-w-[14rem] h-[6rem] rounded-full hover:opacity-80 "
                      src={data.map}
                      alt="map"
                    />
                    <p className="absolute text-white font-semibold text-[20px] bottom-0 mb-[1rem] ml-[2rem]">
                      {data.name}
                    </p>
                  </div>

                  <button onClick={handleAttDef} className="relative flex items-center">
                    <div>
                      <IoSyncOutline className="mr-[3rem] w-[44px] h-auto text-green-700" />
                    </div>
                    <p className="absolute top-0 mt-[9px] ml-[12px] text-[14px] font-medium text-green-700">
                      Att
                    </p>
                  </button>
                  

                  {/* <p>Defence</p> */}
                </div>
              </div>
            ))}
          </div>
          <div className="min-w-[30rem] w-1.5/3 bg-black mt-[-13px] overflow-hidden">
            Middle part
          </div>
          <div className="min-w-[18rem] w-0.75/3 overflow-hidden">
            <Lastpart />
          </div>
        </div>
        <p className="h-[85vh] w-[0.5px] bg-slate-500 absolute top-[5.5rem] right-0 mr-[6rem]"></p>
      </div>
    </div>
  );
};

export default Lineup;
