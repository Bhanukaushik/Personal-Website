import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Login from "./Pages/Auth/Login"; // Import Login component
import Signup from "./Pages/Auth/Signup"; // Import Signup component

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            {/* Define your routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> {/* Login route */}
            <Route path="/signup" element={<Signup />} /> {/* Signup route */}
            <Route path="*" element={<div>404 Not Found</div>} /> {/* 404 Page */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
