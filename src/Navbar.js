import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./Grouplogo.png";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  });

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img src={logo} alt="Netflix Logo" className="nav_logo" />
      <img src="https://i.pinimg.com/originals/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.png" alt="Netflix Avatar" className="nav_avatar" />
    </div>
  );
}

export default Navbar;
