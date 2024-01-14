import React from "react";
// import map from "../assets/Haven_minimap.webp";
// import { useGesture } from "@use-gesture/react";

import Agent from "../components/Agent";
import Map from "../components/Map";
import Mapimg from "../components/Mapimg";

import "./Lineup.css";

const Create = () => {
  // const [crop, setCrop] = useState({x:0, y:0, scale: 1});
  // const imageRef = useRef();

  // useGesture(
  //   {
  //     onDragStart: () => {
  //       imageRef.current.style.transition = "none";
  //     },
  //     onDrag: ({ movement: [dx, dy] }) => {
  //       setCrop((crop) => ({ ...crop, x: crop.x + dx * 1, y: crop.y + dy * 1 }));
  //     },
  //     onDragEnd: () => {
  //       imageRef.current.style.transition = "transform 0.3s ease-out"; 
  //     },
      
  //     onPinch: ({offset: [d]})=>{
  //       // console.log(d)
  //       setCrop((crop)=>({...crop, scale: d / 1 }))
  //     }
  //   },
  //   {
  //     target: imageRef,
  //     eventOptions: {passive:false}
  //   }
  // );
  return (
    // <div className="mt-[6rem] flex justify-center">
    //   <div className="w-[20rem] h-[20rem] border-2 border-black text-center relative overflow-hidden">
    //     <img
    //       ref={imageRef}
    //       style={{
    //         transform: `translate3d(${crop.x}px, ${crop.y}px, 0) scale(${crop.scale})`,
    //         touchAction: "none",
    //       }}
    //       className="rotate-90"
    //       src={map}
    //       alt="map"
    //     />
    //   </div>
    // </div>
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

export default Create;
