import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar"; // Navbar inside components folder
import Hero from "./components/Hero"; // Hero inside components folder
import About from "./components/About"; // About inside components folder

function App() {
  return (
    <Router>
      <NavBar /> {/* Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
