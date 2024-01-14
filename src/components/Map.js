import React, { useState, useContext } from "react";
import { mapContext } from "../context/MapContext";
import { mainContext } from "../context/MainContext";

import { IoSyncOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Edit from "./Edit";


const Map = () => {
  const [attDef, isAttDef] = useState(false);

  const { data } = useContext(mapContext);
  const { setMapId, setMapImg } = useContext(mainContext);
  const [showMap, isShowMap] = useState(false);

  const handleShowMap = () => {
    isShowMap(!showMap);
  };

  const handleAttDef = () => {
    isAttDef(!attDef);
  };

  const handleClickMap = (index) => {
    const selectedMap = data.find((map) => map.id === index);
    setMapId(index);
    setMapImg(selectedMap.mapImg);
  };

  return (
    <div>
      <div className="flex flex-col items-start gap-[5px] relative">
        <h1 className="text-[#0f1923] font-bold text-[28px]">Maps:</h1>
        <button
        className="flex flex-row items-center justify-between w-[12rem] text-sm font-semibold bg-red-500 p-2 rounded-full text-white"
        onClick={handleShowMap}
      >
        <p className="ml-[5px]">Select Maps</p>
        {showMap ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {showMap && <div className="absolute mt-[6rem]">
        {data.map((data) => (
          <div key={data.id}>
            <div className="flex flex-row gap-[1rem] items-center relative">
              <div>
                <button
                  onClick={() => {
                    handleClickMap(data.id);
                  }}
                >
                  <img
                    className="min-w-[14rem] h-[6rem] rounded-full hover:opacity-80 "
                    src={data.map}
                    alt="map"
                  />
                </button>
                <p className="absolute text-white font-semibold text-[20px] bottom-0 mb-[1rem] ml-[2rem]">
                  {data.name}
                </p>
              </div>

              <button
                onClick={handleAttDef}
                className="relative flex items-center"
              >
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
        </div>}
        <Edit />
        
      </div>
    </div>
  );
};

export default Map;
