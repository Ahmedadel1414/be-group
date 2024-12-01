import { useContext } from "react";
import { Link } from "react-router-dom";
import "./main-menu.css";
import BurgerMenu from "../../BurgerMenu";
import { chickIsNavHidden } from "../../../../App";

const MainMenu = () => {
  const setIsNavHidden = useContext(chickIsNavHidden);

  return (
    <>
      <section className="cover-main-menu">
        <div className="main-nav">
          <BurgerMenu className="nav-burger-menu" />
          <div className=" absolute -left-[5px] top-[50px] -rotate-90">
            <span className="menu-line"></span>
            <span className="text-[15px] text-text-color">since</span>
          </div>
          <nav>
            <Link
              to="/"
              className="main-menu-links"
              onClick={() => {
                setIsNavHidden(true);
              }}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="main-menu-links"
              onClick={() => {
                setIsNavHidden(true);
              }}
            >
              About Us
            </Link>
            <Link
              to="/our-services"
              className="main-menu-links"
              onClick={() => {
                setIsNavHidden(true);
              }}
            >
              Services
            </Link>
            <Link
              to="our-works"
              className="main-menu-links"
              onClick={() => {
                setIsNavHidden(true);
              }}
            >
              Portfolio
            </Link>
            <Link
              to="/our-contacts"
              className="main-menu-links"
              onClick={() => {
                setIsNavHidden(true);
              }}
            >
              Contact Us
            </Link>
          </nav>
          <div className="absolute -right-[60px] bottom-[150px] -rotate-90">
            <span className="menu-line"></span>
            <span className="text-[18px] text-text-color">
              MARKET REFERENCE
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainMenu;
