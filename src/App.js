import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
// import Register from "./pages/authentication/Register";

import Lineup from "./pages/Lineup";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lineups" element={<Lineup />} />
          <Route path="/create" element={<Create />} />          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
