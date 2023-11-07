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
    </div>
  );
}
