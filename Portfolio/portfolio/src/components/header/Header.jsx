import React, { useContext } from "react";
import Navbar from "../navbar/Navbar";
import frFlag from "../header/img/franceFlag.png";
import FlagUK from "../header/img/FlagUK.png";
import { ThemeContext } from "../../context/ThemeContext";
import ButtonTheme from "../ButtonTheme/ButtonTheme";

export default function Header({ translate, setTranslate }) {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleStranslate = () => {
    setTranslate(!translate);
  };
  return (
    <div className={`header-container ${theme}`}>
      <span>LOGO</span>
      <div className="option-container">
        <img
          className="flag"
          src={translate ? frFlag : FlagUK}
          alt={translate ? "français" : "english"}
          title={translate ? "français" : "english"}
          onClick={handleStranslate}
        />

        <ButtonTheme translate={translate} />
      </div>
      <Navbar translate={translate} setTranslate={setTranslate} />
      <div></div>
    </div>
  );
}
