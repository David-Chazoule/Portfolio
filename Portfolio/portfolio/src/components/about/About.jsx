import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { aboutData } from "../../Data/data";

import profilePicture from "../about/img/profilePicture.jpg";

export default function About({ translate }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "light"
          ? "about_container about_containerLight"
          : "about_container about_containerDark"
      }
    >
      <h1>{translate ? aboutData.titleFr : aboutData.titleEn}</h1>

      <div className="about-box">
        <div className="about-txt">
          <p>{aboutData.aboutTxtFr}</p>
        </div>

        <div className="about-picture">
          <img
            className={
              theme === "light" ? "img-light-border" : "img-dark-border"
            }
            src={profilePicture}
            alt=""
          />
        </div>
      </div>

      <span
        className={` barSkill ${theme === "light" ? "barLight" : "barDark"}`}
      ></span>
      <div className="skill_container">
        <h2>{translate ? aboutData.skillTitleFr : aboutData.skillTitleEn}</h2>
        <div className="skill-img-box">
          {theme === "light"
            ? aboutData.skillImg &&
              aboutData.skillImg.map((item, key) => (
                <div key={key}>
                  <img
                    className="imgLight"
                    src={require("./imgSkillsLight/" + item + ".png")}
                    alt={item + "-logo"}
                    title={item}
                  />
                </div>
              ))
            : aboutData.skillImg &&
              aboutData.skillImg.map((item, key) => (
                <div key={key}>
                  <img
                    className="imgDark"
                    src={require("./imgSkillsDark/" + item + ".png")}
                    alt={item + "-logo"}
                    title={item}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
