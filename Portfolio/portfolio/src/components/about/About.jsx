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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="about-picture">
          <img src={profilePicture} alt="" />
        </div>
      </div>

      <span
        className={` barSkill ${theme === "light" ? "barLight" : "barDark"}`}
      ></span>
      <div className="skill_container">
        <h2>{translate ? aboutData.skillTitleFr : aboutData.skillTitleEn}</h2>
        <div className="skill-img-box">
          {theme === "light"
            ? aboutData.skillImgLight &&
              aboutData.skillImgLight.map((item, key) => (
                <img src={require("./imgSkills/" + item + ".png")} alt="" />
              ))
            : aboutData.skillImgDark &&
              aboutData.skillImgDark.map((item, key) => (
                <img
                  className={theme === "light" ? "imgLight" : "imgDark"}
                  src={require("./imgSkills/" + item + ".png")}
                  alt=""
                />
              ))}
        </div>
      </div>
    </div>
  );
}
