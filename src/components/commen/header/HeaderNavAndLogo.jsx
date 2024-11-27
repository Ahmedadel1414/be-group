import headerLogo from "/header/20879.webp";

import BurgerMenu from "../BurgerMenu";
import { Link } from "react-router-dom";

const HeaderNavAndLogo = () => {
  return (
    <>
      <div className="header-logo-container">
        <Link to="/">
          <img src={headerLogo} alt="logo" className="header-logo" />
        </Link>
      </div>
      <BurgerMenu className="header-burger-menu" />
    </>
  );
};

export default HeaderNavAndLogo;
