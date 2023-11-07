import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { navbar } from "../../Data/data";

export default function Navbar({ translate }) {
  const [showLinks, setShowLinks] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar-container">
      <ul
        className={`navbar_links ${
          theme === "light" ? "navbar_linksLight" : "navbar_linksDark"
        } ${showLinks ? "show-nav" : ""}`}
      >
        {navbar &&
          navbar.map((elem, key) => (
            <Link to={`/${elem.route}`}>
              <li
                className={` navbar_item ${
                  theme === "light" ? " navbar_itemLight" : " navbar_itemDark"
                }`}
                key={key}
                onClick={handleShowLinks}
              >
                {translate ? elem.menuFr : elem.menuEn}
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
