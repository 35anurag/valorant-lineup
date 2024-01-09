import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";

const Register = () => {
  const [usernameLength, setUsernameLength] = useState(0);
  const [passwordLength, setPasswordLength] = useState(0);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration is completed")
      console.log("Registration is completed");
    } catch (error) {
      console.log(error);
      // console.log(username)
    }
  };

  return (
    <Form
      label="Register"
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

export default Register;
