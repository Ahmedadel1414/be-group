import { createContext, useEffect, useState } from "react";
import GetInTuch from "./menuGetInTuch/GetInTuch";
import MainMenu from "./mainMenu/MainMenu";
import MenuContact from "./menuContact/MenuContact";
import OurClients from "./menuOurClients/OurClients";
import Servieces from "./menuServieces/Servieces";

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
      <section className="relative w-full h-[100vh] z-50 overflow-hidden ">
        {mobileScreen ? (
          <chickNavWidth.Provider value={mobileScreen}>
            <MainMenu />
          </chickNavWidth.Provider>
        ) : (
          <>
            <chickNavWidth.Provider value={mobileScreen}>
              <Servieces />
              <OurClients />
              <GetInTuch />
              <MenuContact />
              <MainMenu />
            </chickNavWidth.Provider>
          </>
        )}
      </section>
    </>
  );
};

export default Menu;
