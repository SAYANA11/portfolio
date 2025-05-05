import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Add from "./components/Add";

function App() {
  const [works, setWorks] = useState([
    "Portfolio Website",
    "E-commerce App",
    "Blog Platform",
  ]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero works={works} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Add" element={<Add works={works} setWorks={setWorks} />} />
      </Routes>
    </Router>
  );
}

export default App;