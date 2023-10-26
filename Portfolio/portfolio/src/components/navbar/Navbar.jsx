import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../../Data/data";
import frFlag from "../../styles/img/franceFlag.png";
import FlagUK from "../../styles/img/FlagUK.png";

export default function Navbar({ translate, setTranslate }) {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleStranslate = () => {
    setTranslate(!translate);
  };

  return (
    <nav className="navbar-container">
      <ul className={`navbar_links ${showLinks ? "show-nav" : ""}`}>
        <img
          src={translate ? frFlag : FlagUK}
          alt=""
          onClick={handleStranslate}
        />

        {navbar &&
          navbar.map((elem, key) => (
            <Link to={`/${elem.route}`}>
              <li className="navbar_item" key={key} onClick={handleShowLinks}>
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
