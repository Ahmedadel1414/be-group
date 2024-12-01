import { useEffect, useContext } from "react";
import { chickNavWidth } from "../Menu";
import { Link } from "react-router-dom";
import "./main-menu.css";
import BurgerMenu from "../../BurgerMenu";
import { chickIsNavvHidden } from "../../../../App";

const MainMenu = () => {
  // for mobile nav barr
  const mainNavWidth = useContext(chickNavWidth);

  useEffect(() => {
    const mainNav = document.querySelector(".main-nav");

    const mainNavResize = () => {
      if (mainNav) {
        if (mainNavWidth) {
          mainNav.style.width = "100%";
          mainNav.style.fontSize = "40px";
        } else {
          mainNav.style.width = "50.1%";
          mainNav.style.fontSize = "70px";
        }
      }
    };
    mainNavResize();
  });

  // for mobile nav barr

  const setIsNavHidden = useContext(chickIsNavvHidden);

  return (
    <>
      <section className="main-nav animate-up">
        <BurgerMenu className="nav-burger-menu" />
        <div className=" absolute -left-[5px] top-[50px] -rotate-90">
          <span className="nav-line"></span>
          <span className="text-[15px] text-text-color">since</span>
        </div>
        <nav>
          <Link
            to="/"
            className="main-nav-links"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="main-nav-links"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            About Us
          </Link>
          <Link
            to="/our-services"
            className="main-nav-links"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            Services
          </Link>
          <Link
            to="our-works"
            className="main-nav-links1"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            Portfolio
          </Link>
          <Link
            to="/our-contacts"
            className="main-nav-links"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            Contact Us
          </Link>
        </nav>
        <div className="absolute -right-[60px] bottom-[150px] -rotate-90">
          <span className="nav-line"></span>
          <span className="text-[18px] text-text-color">MARKET REFERENCE</span>
        </div>
      </section>
    </>
  );
};

export default MainMenu;
