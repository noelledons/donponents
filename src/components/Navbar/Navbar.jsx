import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Navbar;
