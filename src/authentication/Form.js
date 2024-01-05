import React from "react";

const Form = ({
  label,
  username,
  handleUsername,
  password,
  handlePassword,
  usernameLength,
  passwordLength,
  onSubmit
}) => {
  return (
    <div className="h-screen">
      <form onSubmit={onSubmit} className="flex flex-col items-center justify-center pt-[3rem] gap-[5px]">
        <h1 className="font-semibold text-[30px]">{label}</h1>

        <div className=" flex flex-col gap-5 justify-center mt-4">
          <div className="relative">
            <input
              onChange={(event) => handleUsername(event.target.value)}
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              className="border-b border-black focus:outline-none focus:border-blue-500 focus:border-b-2 peer transition-color w-[12rem]"
            />
            {usernameLength === 0 ? (
              <label
                for="username"
                className="absolute left-0 peer-focus:text-sm peer-focus:text-blue-500 transition-all cursor-text"
              >
                Username
              </label>
            ) : (
              <label
                for="username"
                className="absolute left-0 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:mt-[-1rem] mt-[-1rem] text-blue-500 text-sm transition-all cursor-text"
              >
                Username
              </label>
            )}
          </div>

          <div className="relative">
            <input
              onChange={(event) => handlePassword(event.target.value)}
              type="password"
              id="password"
              autoComplete="off"
              value={password}
              className="border-b border-black focus:outline-none focus:border-blue-500 focus:border-b-2 peer transition-color w-[12rem]"
            />
            {passwordLength === 0 ? (
              <label
                for="password"
                className="absolute left-0 peer-focus:text-sm peer-focus:text-blue-500 transition-all cursor-text"
              >
                Password
              </label>
            ) : (
              <label
                for="password"
                className="absolute left-0 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:mt-[-1rem] mt-[-1rem] text-blue-500 text-sm transition-all cursor-text"
              >
                Password
              </label>
            )}
          </div>
        </div>
        <button
          className="bg-gray-400 p-1 w-[12rem] rounded-full flex items-center justify-center font-medium"
          type="submit"
        >
          {label}
        </button>
      </form>
    </div>
  );
};

export default Form;
