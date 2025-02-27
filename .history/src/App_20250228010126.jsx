import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero.jsx";
import About from "./about/About.jsx";

function App() {
  return (
    <Router>
      <div className="components">
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Hero />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
