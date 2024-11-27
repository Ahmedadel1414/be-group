import {
  AnimationOnScroll,
  Contact,
  Footer,
  OurClients,
} from "../constants/BeGroupImports";
import OurContact from "./commen/contact/our contact/OurContact";
import PagesHero from "./commen/PagesHero/PagesHero";

const BeGroupContactUs = () => {
  return (
    <>
      <AnimationOnScroll />
      <PagesHero />
      <OurContact />
      <OurClients />
      <Contact />
      <Footer />
    </>
  );
};

export default BeGroupContactUs;
