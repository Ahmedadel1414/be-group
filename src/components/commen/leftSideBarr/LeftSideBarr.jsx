import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import i18n from "i18next";
import "./left-side-barr.css";

const LeftSideBarr = () => {
  const [languageChecker, setLanguageChecker] = useState("Ar");

  const chickLanguage = () => {
    if (languageChecker == "Ar") {
      i18n.changeLanguage("ar");
      window.document.dir = "rtl";
      setLanguageChecker("En");
    } else {
      i18n.changeLanguage("en");
      window.document.dir = "ltr";
      setLanguageChecker("Ar");
    }
  };

  return (
    <>
      <nav className="left-nav-bar">
        <div className="left-nav-icons">
          <button
            onClick={() => {
              chickLanguage();
            }}
            className="left-nav-links left-nav-links1"
          >
            <p>{languageChecker}</p>
          </button>
        </div>
        <div className="left-nav-icons left-nav-icons2">
          <i>
            <a href="#" className="left-nav-links">
              <FaPhoneAlt />
            </a>
          </i>
        </div>
        <div className="left-nav-icons left-nav-icons3">
          <i>
            <a href="#" className="left-nav-links">
              <FaWhatsapp />
            </a>
          </i>
        </div>
      </nav>
    </>
  );
};

export default LeftSideBarr;
