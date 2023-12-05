import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { aboutData } from "../../Data/data";
import { motion } from "framer-motion";
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
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {translate ? aboutData.titleFr : aboutData.titleEn}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="about-box"
      >
        <div className="about-txt">
          <p>{translate ? aboutData.aboutTxtFr : aboutData.aboutTxtEn}</p>
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
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className={` barSkill ${theme === "light" ? "barLight" : "barDark"}`}
      ></motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="skill_container"
      >
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
      </motion.div>
    </div>
  );
}
