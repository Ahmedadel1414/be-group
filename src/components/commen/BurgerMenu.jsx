import { useContext } from "react";
import { chickIsNavbarHidden } from "../BeGroup";

const BurgerMenu = ({ className }) => {
  const setIsNavbarHidden = useContext(chickIsNavbarHidden);

  const handleNavClick = () => {
    setIsNavbarHidden((prev) => !prev);
  };

  return (
    <>
      <div
        className={className}
        onClick={() => {
          handleNavClick();
        }}
      >
        <div className=" burder-menu1 h-[4px] w-[20px] bg-white mb-[7px] transition-all duration-700 "></div>
        <div className=" burder-menu2 h-[4px] w-[35px] bg-white mb-[7px] "></div>
        <div className=" burder-menu3 h-[4px] w-[25px] bg-white transition-all duration-700 "></div>
      </div>
    </>
  );
};

export default BurgerMenu;
