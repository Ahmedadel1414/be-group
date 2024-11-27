import { createContext, useEffect, useState } from "react";
import GetInTuch from "./get in tuch/GetInTuch";
import MainMenu from "./main nav/MainMenu";
import MenuContact from "./nav contact/MenuContact";
import OurClients from "./ourClients/OurClients";
import Servieces from "./servieces/Servieces";

export const chickNavWidth = createContext();

const Nav = () => {
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

export default Nav;
