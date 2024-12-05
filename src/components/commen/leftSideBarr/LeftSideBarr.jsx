import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import i18n from "i18next";
import "./left-side-barr.css";
import { useEffect, useState } from "react";
import cookies from "js-cookie";

const LeftSideBarr = () => {
  const [languageChiker, setLanguageChiker] = useState("Ar");

  const lng = cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lng]);

  const chickLacguage = () => {
    if (languageChiker == "Ar") {
      i18n.changeLanguage("ar");
      setLanguageChiker("En");
    } else {
      i18n.changeLanguage("en");
      setLanguageChiker("Ar");
    }
  };

  return (
    <>
      <nav className="left-nav-bar">
        <div className="left-nav-icons">
          <button
            onClick={() => {
              chickLacguage();
            }}
            className="left-nav-links left-nav-links1"
          >
            <p>{languageChiker}</p>
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
