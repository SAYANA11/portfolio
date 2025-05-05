import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About Me</Link>
        </li>
        <li>
          <Link to="/Add">Add Work</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;