import { Contact, Footer } from "../constants/BeGroupImports";
import AnimationOnScroll from "./commen/AnimationOnScroll";
import PagesHero from "./commen/PagesHero/PagesHero";
import OurServices from "./our services/OurServices";

const BeGroupServices = () => {
  return (
    <>
      <AnimationOnScroll />
      <PagesHero />
      <OurServices />
      <Contact />
      <Footer />
    </>
  );
};

export default BeGroupServices;
