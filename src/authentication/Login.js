import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usernameLength, setUsernameLength] = useState(0);
  const [passwordLength, setPasswordLength] = useState(0);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsernameLength(e.length);
    setUsername(e);
  };

  const handlePassword = (e) => {
    setPasswordLength(e.length);
    setPassword(e);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      if (response.data.token && response.data.userID) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        window.localStorage.setItem("username", username)
        // console.log(username)
        navigate("/");
      } else {
        console.log("Unexpected response format:", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      label="Login"
      username={username}
      handleUsername={handleUsername}
      password={password}
      handlePassword={handlePassword}
      usernameLength={usernameLength}
      passwordLength={passwordLength}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
