import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { homeData } from "../../Data/data";
import LinkedinLogo from "./img/LinkedinLogo.png";
import LinkedinWhite from "./img/LinkedinWhite.png";
import github from "./img/github.png";
import githubWhite from "./img/githubWhite.png";
import CV from "./img/CV.png";
import cvwhite from "./img/cvWhite.png";
import devlogo from "./img/devlogo.png";

export default function Home({ translate }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`home_container ${
        theme === "light" ? " home_container lights" : "home_container darks"
      }`}
    >
      <div className="presentation">
        <div className="presentation-txt">
          <h1>
            {translate ? homeData.salutationFr : homeData.salutationEn}{" "}
            <span>David</span>{" "}
          </h1>

          <h2>
            {translate ? homeData.presentationFr : homeData.presentationEn}
          </h2>
        </div>
        <div className="contact-box">
          <a href="https://github.com/David-Chazoule">
            <img
              src={theme === "light" ? LinkedinLogo : LinkedinWhite}
              alt="Linkedin-logo"
              title="Linkedin"
            />
          </a>
          <a href="https://github.com/David-Chazoule">
            <img
              src={theme === "light" ? github : githubWhite}
              alt="Github-logo"
              title="Github"
            />
          </a>
          <a href="https://github.com/David-Chazoule">
            <img
              src={theme === "light" ? CV : cvwhite}
              alt="cv-logo"
              title={translate ? "téléchargement CV" : "download cv"}
            />
          </a>
        </div>
      </div>
      <div className="img-dev-box">
        <img src={devlogo} alt="" />
      </div>
    </div>
  );
}
