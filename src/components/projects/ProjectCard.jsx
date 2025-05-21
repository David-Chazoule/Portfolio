import React, { useContext } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
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
          <h2 className="title-project">{translate ? titleFr : titleEn}</h2>
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
              <a href={live}>
                <button className={theme === "light" ? "btnLight" : "btnDark"}>
                  Live
                </button>
              </a>
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
                <img
                  key={key}
                  src={require("../about/imgSkillsLight/" + elem + ".png")}
                  alt={elem}
                  title={elem}
                  className={`${elem === "NEXT" ? "img-next" : ""}`}
                />
              ) : (
                <img
                  key={key}
                  src={require("../about/imgSkillsDark/" + elem + ".png")}
                  alt={elem}
                  title={elem}
                />
              )
            )}
        </div>
      </div>
    </motion.div>
  );
}
