import { useState, createContext } from "react";
import {
  AboutUs,
  Achievements,
  AnimationOnScroll,
  Contact,
  Footer,
  Header,
  Hero,
  LeftSideBarr,
  Nav,
  OurClients,
  OurServices,
  OurWorks,
  Value,
} from "../constants/BeGroupImports";

export const isNavbarHiddenContext = createContext();

const BeGroup = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);

  return (
    <>
      {isNavbarHidden ? (
        <>
          <isNavbarHiddenContext.Provider value={setIsNavbarHidden}>
            <AnimationOnScroll />
            <Header />
            <Hero />
            <LeftSideBarr />
            <AboutUs />
            <Value />
            <OurClients />
            <OurServices />
            <Achievements />
            <OurWorks />
            <Contact />
            <Footer />
          </isNavbarHiddenContext.Provider>
        </>
      ) : (
        <isNavbarHiddenContext.Provider value={setIsNavbarHidden}>
          <Nav />
        </isNavbarHiddenContext.Provider>
      )}
    </>
  );
};

export default BeGroup;
