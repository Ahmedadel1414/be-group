import { Link } from "react-router-dom";
import "./nav-barr.css";
import headerLogo from "/header/20879.webp";
import BurgerMenu from "../BurgerMenu";

const NavBarr = () => {
  return (
    <>
      <nav className="header-container">
        <div className="header-logo-container">
          <Link to="/">
            <img src={headerLogo} alt="logo" className="header-logo" />
          </Link>
        </div>
        <BurgerMenu className="header-burger-menu" />
      </nav>
    </>
  );
};

export default NavBarr;
