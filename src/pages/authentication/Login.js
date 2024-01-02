import React, {useState} from "react";

const Login = () => {
  const [emptyUsername, setEmptyUsername] = useState(0)
  const [emptyPassword, setEmptyPassword] = useState(0)


  const handleUsername=(e)=>{
    setEmptyUsername(e.length)
    // console.log(emptyField)
  }

  const handlePassword=(e)=>{
    setEmptyPassword(e.length)
  }

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center pt-[3rem] gap-[5px]">
        <h1 className="font-semibold text-[30px] ">Login</h1>

        <div className=" flex flex-col gap-5 justify-center mt-4">
          <div className="relative">
            <input
            onChange={(event)=>handleUsername(event.target.value)}
              type="text"
              id="username"
              autoComplete="off"
              className="border-b border-black focus:outline-none focus:border-blue-500 focus:border-b-2 peer transition-color w-[12rem]"
            />
            {emptyUsername === 0 ? <label for="username" className="absolute left-0 peer-focus:text-sm peer-focus:text-blue-500 transition-all cursor-text">Username</label>
            : <label for="username" className="absolute left-0 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:mt-[-1rem] mt-[-1rem] text-blue-500 text-sm transition-all cursor-text">Username</label>}
          </div>

          <div className="relative">
            <input
            onChange={(event)=>handlePassword(event.target.value)}
              type="password"
              id="password"
              autoComplete="off"
              className="border-b border-black focus:outline-none focus:border-blue-500 focus:border-b-2 peer transition-color w-[12rem]"
            />
            {emptyPassword === 0 ? <label for="password" className="absolute left-0 peer-focus:text-sm peer-focus:text-blue-500 transition-all cursor-text">Password</label>
            : <label for="password" className="absolute left-0 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:mt-[-1rem] mt-[-1rem] text-blue-500 text-sm transition-all cursor-text">Password</label>}
          </div>

          {/* <input placeholder="Password" /> */}
        </div>
        <div className="flex flex-col items-center justify-center my-4 gap-2">
          {/* <p>Forget Password?</p> */}
          <button className="bg-gray-400 p-1 w-[12rem] rounded-full flex items-center justify-center font-medium">Login</button>
          <button className="bg-gray-400 p-1 w-[12rem] rounded-full flex items-center justify-center font-medium ">Login with Google</button>
        </div>
        <div>Not Registered? Signup</div>
      </div>
    </div>
  );
};

export default Login;
