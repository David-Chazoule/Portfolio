import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { homeData } from "../../Data/data";
import LinkedinLogo from "../../styles/img/LinkedinLogo.png";
import LinkedinWhite from "../../styles/img/LinkedinWhite.png";
import github from "../../styles/img/github.png";
import githubWhite from "../../styles/img/githubWhite.png";
import CV from "../../styles/img/CV.png";
import cvwhite from "../../styles/img/cvWhite.png";
import devlogo from "../../styles/img/devlogo.png";

export default function Home({translate}) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light" ? " home_container lights" : "home_container darks"
      }
    >
      <div className="presentation">
        <div className="presentation-txt">
          <h1>{translate ? homeData.salutationFr: homeData.salutationEn}  <span>David</span> </h1>

          <h2>{translate ? homeData.presentationFr: homeData.presentationEn}</h2>
        </div>
        <div className="contact-box">
          <a href="https://github.com/David-Chazoule">
            <img
              src={theme === "light" ? LinkedinLogo : LinkedinWhite}
              alt=""
            />
          </a>
          <a href="https://github.com/David-Chazoule">
            <img src={theme === "light" ? github : githubWhite} alt="" />
          </a>
          <a href="https://github.com/David-Chazoule">
            <img src={theme === "light" ? CV : cvwhite} alt="" />
          </a>
        </div>
      </div>
      <div className="img-dev-box">
        <img src={devlogo} alt="" />
      </div>
    </div>
  );
}
