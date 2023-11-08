import { useContext } from "react";
import { skillsTitle } from "../../Data/data";
import { ThemeContext } from "../../context/ThemeContext";

export default function Skills({ translate }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`skills_container ${
        theme === "light" ? "skills_containerLight" : "skills_containerDark"
      }`}
    >
      <h1>{translate ? skillsTitle.titleFr : skillsTitle.titleEn}</h1>

      <div className="skill-box">
        <div className="tech-skills">
          <h2>Lorem ipsum</h2>
        </div>

        <span></span>

        <div className="tech-skills">
          <h2>Lorem ipsum</h2>
        </div>
      </div>
    </div>
  );
}
