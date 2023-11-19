import React, { useRef, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import emailjs from "@emailjs/browser";
import { contactData } from "../../Data/data";

import sendEmailImg from "./img/sendEmail.png";
export default function Contact({ translate }) {
  const form = useRef();
  const { theme } = useContext(ThemeContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wt9aw4k",
        "template_0mh4nso",
        form.current,
        "t8uciT4BW5C9SZHxh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      className={`contact_container ${
        theme === "light"
          ? " contact_containerLight "
          : " contact_containerDark "
      }`}
    >
      <h1>{translate ? contactData.titleFr : contactData.titleEn}</h1>
      <div>
        <div
          className={`contact-card ${
            theme === "light" ? " contact-cardLight" : " contact-cardDark"
          }`}
        >
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder={
                translate
                  ? contactData.placeholderNameFr
                  : contactData.placeholderNameEn
              }
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder={
                translate
                  ? contactData.placeholderEmailFr
                  : contactData.placeholderEmailEn
              }
              required
            />
            <textarea
              name="message"
              placeholder={
                translate ? contactData.txtAreaFr : contactData.titleEn
              }
              required
            ></textarea>
            <button
              className={theme === "light" ? "btnLight" : "btnDark"}
              type="submit"
            >
              {translate ? contactData.btnFr : contactData.btnEn}
            </button>
          </form>
        </div>

        <img src={sendEmailImg} alt="" />
      </div>
    </div>
  );
}
