import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

import Logo from "../assets/valo-logo.png";

const Navbar = () => {
  const [register, showRegister] = useState(false);

  const handleShowRegister = () => {
    showRegister(!register);
  };
  return (
    <div>
      <div className="bg-[#111111] w-full fixed top-0">
        <div className="ml-[5rem] mr-[5rem] flex flex-row justify-between items-center p-4 text-white">
          <Link to="/" className="font-bold text-2xl flex flex-row items-center justify-center">
            <img className="w-[5rem] h-[auto]" src={Logo} alt="logo" />
            <p>Lineup</p>
          </Link>
          <div className="flex flex-row gap-[4rem] items-center text-[16px] font-semibold">
            <Link to="/">Home</Link>
            <Link to="/lineups">Lineups</Link>
            <Link to="/create">Create</Link>
          </div>
          <button
            className="flex flex-row items-center justify-center gap-2 text-sm font-semibold bg-red-500 p-2 pl-5 pr-5 rounded-full"
            onClick={handleShowRegister}
          >
            <p>Register</p>
            {register ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
      </div>
      {register && (
        <div className="flex flex-col gap-2 items-center absolute right-0 top-0 bg-red-400 rounded-lg mr-[6rem] mt-[4rem] p-3 pl-5 pr-5 text-white font-medium ">
          <Link to="/login">Login</Link>
          <p className="w-[4rem] h-[1px] bg-white"></p>
          <Link to="/register">Signup</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
