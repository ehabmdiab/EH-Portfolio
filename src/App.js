import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/navBar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./helpers/particles/particles";
import React from "react";

function App() {
  const location = useLocation();
  let RenderParticles =
    (location.pathname === "/") |
    (location.pathname === "/home") |
    (location.pathname === "/EH-Portfolio");
  const handleInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      {RenderParticles && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} exact />
        <Route path="/" element={<Navigate to="/home" />} exact />
        <Route path="/EH-Portfolio" element={<Navigate to="/home" />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
