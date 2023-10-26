import React from "react";

import LinkedinLogo from "../../styles/img/LinkedinLogo.png";
import github from "../../styles/img/github.png";
import CV from "../../styles/img/CV.png";
import devlogo from "../../styles/img/devlogo.png";

export default function Home() {
  return (
    <div className="home_container">
      <div className="presentation">
        <div className="presentation-txt">
          <h1>Salut! Je suis David </h1>

          <h2>je suis developpeur front-end junior</h2>
        </div>
        <div className="contact-box">
          <a href="https://github.com/David-Chazoule">
            <img src={LinkedinLogo} alt="" />
          </a>
          <a href="https://github.com/David-Chazoule">
            <img src={github} alt="" />
          </a>
          <a href="https://github.com/David-Chazoule">
            <img src={CV} alt="" />
          </a>
        </div>
      </div>
      <div className="img-dev-box">
        <img src={devlogo} alt="" />
      </div>
    </div>
  );
}
