import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import LinkedinLogo from "../../styles/img/LinkedinLogo.png";
import github from "../../styles/img/github.png";
import CV from "../../styles/img/CV.png";
import devlogo from "../../styles/img/devlogo.png";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light" ? " home_container lights" : "home_container darks"
      }
    >
      <div className="presentation">
        <div className="presentation-txt">
          <h1>Salut! Je suis David </h1>

          <h2>je suis developpeur front-end junior</h2>
        </div>
        <div className="contact-box">
          <a href="https://github.com/David-Chazoule">
            <img src={LinkedinLogo} alt="" />
          </a>
          <a href="https://github.com/David-Chazoule">
            <img src={github} alt="" />
          </a>
          <a href="https://github.com/David-Chazoule">
            <img src={CV} alt="" />
          </a>
        </div>
      </div>
      <div className="img-dev-box">
        <img src={devlogo} alt="" />
      </div>
    </div>
  );
}
