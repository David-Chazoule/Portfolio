import React, { useRef, useContext } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { ThemeContext } from "../../context/ThemeContext";
import emailjs from "@emailjs/browser";
import { contactData } from "../../Data/data";
import "react-toastify/dist/ReactToastify.css";
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
  const notify = () => {
    toast(
      translate ? "votre message a été envoyé!" : "Your message has been sent!",
      {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: theme === "light" ? "light" : "dark",
      }
    );
  };

  return (
    <div
      className={`contact_container ${
        theme === "light"
          ? " contact_containerLight "
          : " contact_containerDark "
      }`}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {translate ? contactData.titleFr : contactData.titleEn}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
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
              onClick={notify}
            >
              {translate ? contactData.btnFr : contactData.btnEn}
            </button>
          </form>
        </div>

        <img src={sendEmailImg} alt="" />
      </motion.div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme={theme === "light" ? "light" : "dark"}
        style={{ with: "300px", fontSize: "20px", fontWeight: "600" }}
      />
    </div>
  );
}
