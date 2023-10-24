import React from "react";
import ProjectCard from "./ProjectCard";
import { project, projectTitle } from "../../Data/data";

export default function Projects({ translate }) {
  return (
    <div className="project_container">
      <p>{translate ? projectTitle.titleFr : projectTitle.titleEn}</p>
      <div className="project_card_box">
        {project &&
          project.map((elem, key) => (
            <ProjectCard
              key={key}
              img={elem.img}
              descriptionEn={elem.descriptionEn}
              descriptionFr={elem.descriptionFr}
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
