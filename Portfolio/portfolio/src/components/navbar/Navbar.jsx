import React, { useState } from "react";
import { navbar } from "../../Data/data";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  console.log(showLinks);

  return (
    <div className="navbar-container">
      <ul className={`navbar_links ${showLinks ? "show-nav" : ""}`}>
        {navbar &&
          navbar.map((elem, key) => (
            <li className="navbar_item" key={key}>
              <a href="/" className="navbar_link">
                {elem.menuFr}
              </a>
            </li>
          ))}
      </ul>
      <button className="navbar_burger " onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </div>
  );
}
