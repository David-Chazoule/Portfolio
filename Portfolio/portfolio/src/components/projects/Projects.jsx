import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import ProjectCard from "./ProjectCard";
import { project, projectTitle } from "../../Data/data";

export default function Projects({ translate }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light"
          ? "project_container project_containerLight "
          : "project_container project_containerDark"
      }
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {translate ? projectTitle.titleFr : projectTitle.titleEn}
      </motion.h1>
      <div className="project_card_box">
        {project &&
          project.map((elem, key) => (
            <ProjectCard
              key={key}
              img={elem.img}
              imganimate={elem.imganimate}
              titleFr={elem.titleFr}
              titleEn={elem.titleEn}
              descriptionEn={elem.descriptionEn}
              descriptionFr={elem.descriptionFr}
              githubOk={elem.github}
              github={elem.githubLink}
              github2={elem.githubLinkTwo}
              liveOk={elem.live}
              live={elem.liveLink}
              tags={elem.tags}
              translate={translate}
              gitOk={elem.git}
            />
          ))}
      </div>
    </div>
  );
}
