import { createContext, useState } from "react";

import {
  AboutUs,
  Achievements,
  AnimationOnScroll,
  Contact,
  Footer,
  Hero,
  LeftSideBarr,
  Nav,
  OurClients,
  OurServices,
  OurWorks,
  Value,
} from "../constants/BeGroupImports";

export const chickIsNavbarHidden = createContext();

const BeGroup = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);

  return (
    <>
      {isNavbarHidden == true ? (
        <>
          <chickIsNavbarHidden.Provider value={setIsNavbarHidden}>
            <AnimationOnScroll />
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
          </chickIsNavbarHidden.Provider>
        </>
      ) : (
        <chickIsNavbarHidden.Provider value={setIsNavbarHidden}>
          <Nav />
        </chickIsNavbarHidden.Provider>
      )}
    </>
  );
};

export default BeGroup;
