import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import sunDark from "./img/sunDark.png";
import moonLight from "./img/moonLight.png";

export default function ButtonTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`button_container ${
        theme === "light" ? "button_containerLight" : "button_containerDark"
      }`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title={theme === "light" ? "light theme" : "dark theme"}
    >
      {theme === "light" ? (
        <img className="logoBtn " src={sunDark} alt="logo-LightTheme" />
      ) : (
        <img className="logoBtn " src={moonLight} alt="logo-DarkTheme" />
      )}
    </div>
  );
}
