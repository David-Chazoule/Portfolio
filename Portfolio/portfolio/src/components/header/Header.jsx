import React from "react";
import Navbar from "../navbar/Navbar";

export default function Header( {translate, setTranslate}) {
  return (
    <div className="header-container">
      <span>LOGO</span>
      <Navbar translate={translate} setTranslate={setTranslate} />
      <div></div>
    </div>
  );
}
