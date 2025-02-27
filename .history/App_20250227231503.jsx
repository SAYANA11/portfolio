import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero.jsx";
import About from "./About.jsx";

function App() {
  return (
    <Router>
      <div className="components">
      <Routes>
  <Route path="/" element={<Hero />} /> {/* Home route */}
  <Route path="/" element={<About />} /> {/* About route */}
</Routes>

      </div>
    </Router>
  );
}

export default App;
