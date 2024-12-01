import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Contact from "./components/commen/contact/Contact";
import Footer from "./components/commen/footer/Footer";
import Header from "./components/commen/header/Header";
import Nav from "./components/commen/NavBarr/Nav";

const chickIsNavvHidden = createContext();

function App() {
  const [isNavHidden, setIsNavHidden] = useState(true);

  return (
    <chickIsNavvHidden.Provider value={setIsNavHidden}>
      {isNavHidden ? (
        <>
          <Header />
          <Outlet />
          <Contact />
          <Footer />
        </>
      ) : (
        <>
          <Nav />
        </>
      )}
    </chickIsNavvHidden.Provider>
  );
}

export default App;

export { chickIsNavvHidden };
