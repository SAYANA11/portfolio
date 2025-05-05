import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Add from "./components/Add";

function App() {
  const [works, setWorks] = useState([]);

  // Fetch works from JSON server
  useEffect(() => {
    fetch("http://localhost:5173/works")
      .then((response) => response.json())
      .then((data) => setWorks(data))
      .catch((error) => console.error("Error fetching works:", error));
  }, []);

  // Add a new work to the JSON server
  const addWork = (newWork) => {
    fetch("http://localhost:5000/works", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWork),
    })
      .then((response) => response.json())
      .then((data) => setWorks([...works, data]))
      .catch((error) => console.error("Error adding work:", error));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero works={works} />} />
        <Route path="/Add" element={<Add addWork={addWork} />} />
      </Routes>
    </Router>
  );
}

export default App;