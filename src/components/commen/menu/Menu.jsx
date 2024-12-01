import { createContext, useEffect, useState } from "react";

import MainMenu from "./mainMenu/MainMenu";
import MenuLeftSide from "./menuLeftSide/menuLeftSide";
import MenuMidleSide from "./menuMidleSide/MenuMidleSide";

export const chickNavWidth = createContext();

const Menu = () => {
  const [mobileScreen, setMobileScreen] = useState(window.innerWidth < 990);

  useEffect(() => {
    const handleMobileScreen = () => {
      setMobileScreen(window.innerWidth < 990);
    };
    window.addEventListener("resize", handleMobileScreen);

    return () => {
      window.removeEventListener("resize", handleMobileScreen);
    };
  }, []);

  return (
    <>
      <section className=" w-full h-[100vh] z-50 overflow-hidden ">
        {mobileScreen ? (
          <chickNavWidth.Provider value={mobileScreen}>
            <MainMenu />
          </chickNavWidth.Provider>
        ) : (
          <>
            <chickNavWidth.Provider value={mobileScreen}>
              <section className=" flex w-full h-full">
                <MenuLeftSide />
                <MenuMidleSide />
                <MainMenu />
              </section>
            </chickNavWidth.Provider>
          </>
        )}
      </section>
    </>
  );
};

export default Menu;
