import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./main.scss";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const ulRef = useRef();
  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to={"/"}>
              <h1>EH</h1>
            </Link>
          </div>
          <ul className={`links ${toggleIcon ? `active` : ``}`} ref={ulRef}>
            <li onClick={handleToggle}>
              <Link to={"/home"}>HOME</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to={"/about"}>ABOUT ME</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to={"/skills"}>SKILLS</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to={"/resume"}>RESUME</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to={"/portfolio"}>PORTFOLIO</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleToggle}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
