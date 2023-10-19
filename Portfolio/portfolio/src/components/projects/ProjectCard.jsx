import React from "react";

export default function ProjectCard({
  key,
  img,
  description,
  github,
  liveOk,
  live,
  tags,
}) {
  return (
    <div key={key} className="projectCard_container">
      <div className="card">
        <img src={img} alt="" />

        <div className="description-card">
          <div>
            <p>{description}</p>
          </div>

          <div className="project-link">
            <button>
              <a href={github}>GitHub</a>
            </button>
            {liveOk === true ? (
              <button>
                <a href={live}>Live</a>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="footer-tagg">
          {tags && tags.map((elem, key) => <span key={key}>{elem}</span>)}
        </div>
      </div>
    </div>
  );
}
