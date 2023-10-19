import React from "react";
import ProjectCard from "./ProjectCard";
import { project } from "../../Data/data";

export default function Projects() {
  return (
    <div className="project_container">
      <div className="project_card_box">
        {project &&
          project.map((elem, key) => (
            <ProjectCard
              key={key}
              img={elem.img}
              description={elem.description}
              github={elem.githubLink}
              liveOk={elem.live}
              live={elem.liveLink}
              tags={elem.tags}
            />
          ))}
      </div>
    </div>
  );
}
