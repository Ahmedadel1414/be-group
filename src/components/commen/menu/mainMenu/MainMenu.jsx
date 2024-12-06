import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./main-menu.css";
import BurgerMenu from "../../BurgerMenu";
import { chickIsNavHidden, isNavTrue } from "../../../../App";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

const MainMenu = () => {
  const { t } = useTranslation();

  const setIsNavHidden = useContext(chickIsNavHidden);
  const isNavHidden = useContext(isNavTrue);
  const lng = cookies.get("i18next") || "en";

  useEffect(() => {
    const mainMenu = document.querySelector(".main-menu");
    const navBurgerMenu = document.querySelector(".nav-burger-menu");
    console.log(lng);

    if (lng == "ar") {
      navBurgerMenu.style.left = "40px";
      navBurgerMenu.style.right = "auto";
    } else if (lng == "en") {
      navBurgerMenu.style.left = "auto";
      navBurgerMenu.style.right = "40px";
    }

    isNavHidden
      ? setTimeout(() => {
          mainMenu.style.transform = "translateY(101%)";
        }, 200)
      : setTimeout(() => {
          mainMenu.style.transform = "translateY(0%)";
        }, 200);
  }, [isNavHidden, lng]);

  return (
    <>
      <section className="main-menu">
        <BurgerMenu className="nav-burger-menu" />
        <div className=" absolute -left-[5px] top-[50px] -rotate-90">
          <span className="menu-line"></span>
          <span className="text-[15px] text-text-color">since</span>
        </div>
        <nav>
          <Link
            to="/"
            className="main-menu-links main-menu-links1"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            {t("mainMenu-Home")}
          </Link>
          <Link
            to="/about-us"
            className="main-menu-links main-menu-links2"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            {t("mainMenu-AboutUs")}
          </Link>
          <Link
            to="/our-services"
            className="main-menu-links main-menu-links3"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            {t("mainMenu-Services")}
          </Link>
          <Link
            to="our-works"
            className="main-menu-links main-menu-links4"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            {t("mainMenu-Portfolio")}
          </Link>
          <Link
            to="/our-contacts"
            className="main-menu-links main-menu-links5"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            {t("mainMenu-ContactUs")}
          </Link>
        </nav>
        <div className="absolute -right-[60px] bottom-[150px] -rotate-90">
          <span className="menu-line"></span>
          <span className="text-[18px] text-text-color">MARKET REFERENCE</span>
        </div>
      </section>
    </>
  );
};

export default MainMenu;
