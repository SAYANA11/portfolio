import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;