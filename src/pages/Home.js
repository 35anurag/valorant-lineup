import React from "react";
// import Particles from "react-particles-js"
import valoText from "../assets/valorant-text.png";
import Plan from "../components/Plan";

const Home = () => {
  return (
    <div>
    <div className="h-[70vh]">
      <div className="flex flex-col items-center justify-center mt-[12rem]">
        <h1 className="flex flex-col items-center justify-center">
          <p className="font-semibold text-lg">Create Your lineups</p>
          <img src={valoText} alt="valorant text" />
        </h1>
        <button className="bg-red-500 p-[10px] pl-7 pr-7 text-white font-medium hover:bg-[#111111] uppercase">Play Free</button>       
      </div>
    </div>
    <Plan />
    </div>
  );
};

export default Home;
