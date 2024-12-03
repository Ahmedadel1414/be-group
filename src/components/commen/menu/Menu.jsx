import { useContext, useEffect, useState } from "react";
import MainMenu from "./mainMenu/MainMenu";
import MenuLeftSide from "./menuLeftSide/MenuLeftSid";
import MenuMidleSide from "./menuMidleSide/MenuMidleSide";
import { isNavTrue } from "../../../App";

const Menu = () => {
  const [mobileScreen, setMobileScreen] = useState(window.innerWidth < 990);
  const isNavHidden = useContext(isNavTrue);

  useEffect(() => {
    // for menu hidden and block
    const menuContainer = document.querySelector(".menu-container");
    const displayMenu = () => {
      isNavHidden
        ? ((menuContainer.style.display = "none"),
          (document.body.style.overflow = "auto"))
        : ((menuContainer.style.display = "block"),
          (document.body.style.overflow = "hidden"));
    };

    displayMenu();

    // for mbile screen
    const handleMobileScreen = () => {
      setMobileScreen(window.innerWidth < 990);
    };
    window.addEventListener("resize", handleMobileScreen);
    return () => {
      window.removeEventListener("resize", handleMobileScreen);
    };
  }, [isNavHidden]);

  return (
    <>
      <section className="menu-container bg-transparent w-full h-[100vh] z-10 overflow-hidden ">
        {mobileScreen ? (
          <MainMenu />
        ) : (
          <>
            <section className=" flex w-full h-full">
              <MenuLeftSide />
              <MenuMidleSide />
              <MainMenu />
            </section>
          </>
        )}
      </section>
    </>
  );
};

export default Menu;
