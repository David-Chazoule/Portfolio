import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ProjectCard({
  key,
  img,
  imganimate,
  titleFr,
  titleEn,
  descriptionEn,
  descriptionFr,
  githubOk,
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
        <img
          src={process.env.PUBLIC_URL + `/img/${imganimate}.gif`}
          title={img + ` image`}
          alt={img}
        />

        <div className="description-card">
          <h2>{translate ? titleFr : titleEn}</h2>
          <div>
            <p>{translate ? descriptionFr : descriptionEn}</p>
          </div>

          <div className="project-link">
            {githubOk === true ? (
              <button className={theme === "light" ? "btnLight" : "btnDark"}>
                <a href={github}>GitHub</a>
              </button>
            ) : (
              ""
            )}

            {gitOk === true ? (
              <button className={theme === "light" ? "btnLight" : "btnDark"}>
                <a href={github2}>GitHub back-end</a>
              </button>
            ) : (
              ""
            )}
            {liveOk === true ? (
              <button className={theme === "light" ? "btnLight" : "btnDark"}>
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
