import React, { useContext } from "react";
import Navbar from "../navbar/Navbar";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import ButtonTheme from "../ButtonTheme/ButtonTheme";
import frFlag from "../header/img/franceFlag.png";
import FlagUK from "../header/img/FlagUK.png";
import logofolioDark from "../header/img/logofolioDark.png";
import logofolio from "../header/img/logofolio.png";
export default function Header({ translate, setTranslate }) {
  const { theme } = useContext(ThemeContext);

  const handleStranslate = () => {
    setTranslate(!translate);
  };
  return (
    <div className={`header-container ${theme}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="logo"
      >
        {theme === "light" ? (
          <img className="logoImg" src={logofolio} alt="logo" />
        ) : (
          <img className="logoImg" src={logofolioDark} alt="logo" />
        )}

        <span
          className={
            theme === "light" ? "name-logo nameLight" : "name-logo nameDark"
          }
        >
          DAVID.C
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="option-container"
      >
        <img
          className="flag"
          src={translate ? frFlag : FlagUK}
          alt={translate ? "français" : "english"}
          title={translate ? "français" : "english"}
          onClick={handleStranslate}
        />

        <ButtonTheme translate={translate} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Navbar translate={translate} setTranslate={setTranslate} />
      </motion.div>

      <div></div>
    </div>
  );
}
