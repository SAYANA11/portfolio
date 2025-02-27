import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero.jsx";
import About from "./about/About.jsx";

function App() {
  return (
    <Router>
      <div className="components">
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
