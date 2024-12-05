import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Contact from "./components/commen/contact/Contact";
import Footer from "./components/commen/footer/Footer";
import NavBarr from "./components/commen/navBarr/NavBarr";
import Menu from "./components/commen/menu/Menu";
import LeftSideBarr from "./components/commen/leftSideBarr/LeftSideBarr";
import "./utils/i18n";
import TwoBackLiens from "./components/commen/TwoBackLiens";

export const chickIsNavHidden = createContext();
export const isNavTrue = createContext();

function App() {
  const [isNavHidden, setIsNavHidden] = useState(true);

  return (
    <chickIsNavHidden.Provider value={setIsNavHidden}>
      <isNavTrue.Provider value={isNavHidden}>
        <>
          <Menu />
          <NavBarr />
          <TwoBackLiens />
          <LeftSideBarr />
          <Outlet />
          <Contact />
          <Footer />
        </>
      </isNavTrue.Provider>
    </chickIsNavHidden.Provider>
  );
}

export default App;
