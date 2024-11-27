import { Contact, Footer } from "../constants/BeGroupImports";
import AboutUs from "./about us/AboutUs";
import AnimationOnScroll from "./commen/AnimationOnScroll";
import PagesHero from "./commen/PagesHero/PagesHero";
import OurClients from "./our clients/OurClients";
import AnotherValue from "./value of section/AnotherValue";

const BeGroupAboutUs = () => {
  return (
    <>
      <PagesHero />
      <AnimationOnScroll />
      <AnotherValue />
      <AboutUs />
      <OurClients />
      <Contact />
      <Footer />
    </>
  );
};

export default BeGroupAboutUs;
