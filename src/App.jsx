import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Contact from "./components/commen/contact/Contact";
import Footer from "./components/commen/footer/Footer";
import NavBarr from "./components/commen/navBarr/NavBarr";
import Menu from "./components/commen/menu/Menu";

export const chickIsNavHidden = createContext();
export const isNavHidden = createContext();

function App() {
  const [isNavHidden, setIsNavHidden] = useState(true);

  return (
    <chickIsNavHidden.Provider value={setIsNavHidden}>
      {isNavHidden ? (
        <>
          <NavBarr />
          <Outlet />
          <Contact />
          <Footer />
        </>
      ) : (
        <>
          <Menu />
        </>
      )}
    </chickIsNavHidden.Provider>
  );
}

export default App;
