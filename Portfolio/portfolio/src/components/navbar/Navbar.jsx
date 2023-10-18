import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../../Data/data";
import frFlag from "../../styles/img/franceFlag.png";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  console.log(showLinks);

  return (
    <nav className="navbar-container">
      <ul className={`navbar_links ${showLinks ? "show-nav" : ""}`}>
        <img src={frFlag} alt="" />

        {navbar &&
          navbar.map((elem, key) => (
            <Link to={`/${elem.route}`}>
              <li className="navbar_item" key={key}>
                {elem.menuFr}
              </li>
            </Link>
          ))}
      </ul>
      <button className="navbar_burger " onClick={handleShowLinks}>
        <span className={`burger-bar ${showLinks ? "burgerx" : ""}`}></span>
      </button>
    </nav>
  );
}
