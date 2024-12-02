import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./main-menu.css";
import BurgerMenu from "../../BurgerMenu";
import { chickIsNavHidden, isNavTrue } from "../../../../App";

const MainMenu = () => {
  const setIsNavHidden = useContext(chickIsNavHidden);
  const isNavHidden = useContext(isNavTrue);

  useEffect(() => {
    const mainMenu = document.querySelector(".main-menu");

    isNavHidden
      ? setTimeout(() => {
          mainMenu.style.transform = "translateY(101%)";
        }, 200)
      : setTimeout(() => {
          mainMenu.style.transform = "translateY(0%)";
        }, 200);
  }, [isNavHidden]);

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
            Home
          </Link>
          <Link
            to="/about-us"
            className="main-menu-links main-menu-links2"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            About Us
          </Link>
          <Link
            to="/our-services"
            className="main-menu-links main-menu-links3"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            Services
          </Link>
          <Link
            to="our-works"
            className="main-menu-links main-menu-links4"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            Portfolio
          </Link>
          <Link
            to="/our-contacts"
            className="main-menu-links main-menu-links5"
            onClick={() => {
              setIsNavHidden(true);
            }}
          >
            Contact Us
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
