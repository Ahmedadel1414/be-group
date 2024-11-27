import { useEffect, useContext } from "react";
import { chickNavWidth } from "../Nav";
import { isNavbarHiddenContext } from "../../../BeGroup";
import "./main-menu.css";

const MainMenu = () => {
  // for mobile nav barr
  const test = useContext(chickNavWidth);

  useEffect(() => {
    const mainNav = document.querySelector(".main-nav");
    const mainNavResize = () => {
      if (test) {
        mainNav.style.width = "100%";
        mainNav.style.fontSize = "40px";
      } else {
        mainNav.style.width = "50.1%";
        mainNav.style.fontSize = "70px";
      }
    };
    mainNavResize();
  });

  // for mobile nav barr

  const setIsNavbarHidden = useContext(isNavbarHiddenContext);

  const handleNavClick = () => {
    setIsNavbarHidden((prev) => !prev);
  };

  return (
    <>
      <section className="main-nav">
        <div
          className="nav-burger-menu"
          onClick={() => {
            handleNavClick();
          }}
        >
          <div className=" burder-menu1 h-[4px] w-[20px] bg-white mb-[7px] transition-all duration-700 "></div>
          <div className=" burder-menu2 h-[4px] w-[35px] bg-white mb-[7px] "></div>
          <div className=" burder-menu3 h-[4px] w-[25px] bg-white transition-all duration-700 "></div>
        </div>

        <div className=" absolute -left-[5px] top-[50px] -rotate-90">
          <span className="nav-line"></span>
          <span className="text-[15px] text-text-color">since</span>
        </div>
        <nav>
          <a href="#" className="main-nav-links ">
            Home
          </a>
          <a href="#" className="main-nav-links ">
            About Us
          </a>
          <a href="#" className="main-nav-links">
            Services
          </a>
          <a href="#" className="main-nav-links ">
            Portfolio
          </a>
          <a href="#" className="main-nav-links ">
            Contact Us
          </a>
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
