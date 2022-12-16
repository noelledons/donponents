import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Blog from "./pages/Blog";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/about" element={<About />}>
          {" "}
        </Route>
        <Route path="/work" element={<Work />}>
          {" "}
        </Route>
        <Route path="/blog" element={<Blog />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
