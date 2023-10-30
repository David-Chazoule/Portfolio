import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ProjectCard({
  key,
  img,
  titleFr,
  titleEn,
  descriptionEn,
  descriptionFr,
  github,
  github2,
  gitOk,
  liveOk,
  live,
  tags,
  translate,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      key={key}
      className={
        theme === "light"
          ? `projectCard_container projectCardLight`
          : `projectCard_container projectCardDark`
      }
    >
      <div className="card">
        <img src={img} alt="" />

        <div className="description-card">
          <h3>{translate ? titleFr : titleEn}</h3>
          <div>
            <p>{translate ? descriptionFr : descriptionEn}</p>
          </div>

          <div className="project-link">
            <button>
              <a href={github}>GitHub</a>
            </button>
            {gitOk === true ? (
              <button>
                <a href={github2}>GitHub</a>
              </button>
            ) : (
              ""
            )}
            {liveOk === true ? (
              <button>
                <a href={live}>Live</a>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>

        <div
          className={
            theme === "light"
              ? "footer-tagg footerLight-tagg"
              : "footer-tagg footerDark-tagg"
          }
        >
          {tags && tags.map((elem, key) => <span key={key}>{elem}</span>)}
        </div>
      </div>
    </div>
  );
}
