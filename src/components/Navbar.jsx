import React from "react";
import "./Navbar.css";
import Toggle from "./Toggle";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Francisca Madariaga</div>
        <Toggle/>
      </div>
      <div className="n-right">
      <div className="n-list">
        <ul style={{ listStyleType: "none" }}>
          <li>Home</li>
          <li>Habilidades</li>
          <li>Portafolio</li>
        </ul>
      </div>
      <button className="button n-button">Contáctame</button>
    </div>
    </div>
  );
};

export default Navbar;
