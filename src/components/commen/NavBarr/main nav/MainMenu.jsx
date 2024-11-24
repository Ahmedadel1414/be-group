import { useEffect, useState } from "react";
import "./main-menu.css";

const MainMenu = () => {
  const [mobileScreen, setMobileScreen] = useState();
  const mainNav = document.querySelector(".main-nav");

  useEffect(() => {
    const handleMobileWidth = () => {
      setMobileScreen(window.innerWidth < 990);
      testt();
    };
    window.addEventListener("resize", handleMobileWidth);
  });

  const testt = () => {
    if (mobileScreen) {
      mainNav.style.width = "100%";
      mainNav.style.fontSize = "40px";
    } else {
      mainNav.style.width = "50.1%";
      mainNav.style.fontSize = "70px";
    }
  };

  return (
    <>
      <section className="main-nav">
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
