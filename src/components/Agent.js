import React, { useContext, useState } from "react";

import { agentContext } from "../context/AgentContext";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Lastpart = () => {
  const [showAgent, isShowAgent] = useState(false);

  const handleShowAgent = () => {
    isShowAgent(!showAgent);
  };

  const { data } = useContext(agentContext);
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-[#0f1923] font-bold text-[28px]">Agents:</h1>
      <button
        className="flex flex-row items-center justify-between w-[12rem] text-sm font-semibold bg-red-500 p-2 rounded-full text-white"
        onClick={handleShowAgent}
      >
        <p className="ml-[5px]">Select Agents</p>
        {showAgent ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {showAgent && (
        <div>
          {data.map((data) => (
            <div key={data.id}>{data.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lastpart;
