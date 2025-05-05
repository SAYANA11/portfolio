import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  // Hardcoded works data
  const works = [
    {
      id: "1",
      title: "Project 1",
      description: "Description of Project 1",
      images: ["https://via.placeholder.com/150"],
    },
    {
      id: "2",
      title: "Project 2",
      description: "Description of Project 2",
      images: ["https://via.placeholder.com/200"],
    },
    {
      id: "3",
      title: "Project 3",
      description: "Description of Project 3",
      images: ["https://via.placeholder.com/250"],
    },
  ];

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero works={works} />} />
      </Routes>
    </Router>
  );
}

export default App;