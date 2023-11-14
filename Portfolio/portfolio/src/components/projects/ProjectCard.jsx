import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ProjectCard({
  
  img,
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
      
      className={
        theme === "light"
          ? `projectCard_container projectCardLight`
          : `projectCard_container projectCardDark`
      }
    >
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + `/img/${img}.gif`}
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
          {tags &&
            tags.map((elem, key) =>
              theme === "light" ? (
                <img key={key}
                  src={require("../about/imgSkillsLight/" + elem + ".png")}
                  alt={elem}
                  title={elem}
                />
              ) : (
                <img key={key}
                  src={require("../about/imgSkillsDark/" + elem + ".png")}
                  alt={elem}
                  title={elem}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}
