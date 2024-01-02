import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/authentication/Login";
// import Register from "./pages/authentication/Register";

import Lineup from "./pages/Lineup";
import Video from "./pages/Video";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lineups" element={<Lineup />} />
          <Route path="/video" element={<Video />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
