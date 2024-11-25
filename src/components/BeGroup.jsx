import AboutUs from "./about us/AboutUs";
import Contact from "./commen/contact/Contact";
import Header from "./commen/header/Header";
import LeftSideBarr from "./commen/left side barr/LeftSideBarr";
import Footer from "./commen/footer/Footer";
// import Nav from "./commen/NavBarr/Nav";
import Hero from "./hero/Hero";
import Value from "./value of section/Value";
import OurServices from "./our services/OurServices";
import Achievements from "./Achievements/Achievements";
import OurWorks from "./our works/OurWorks";
import OurClients from "./our clients/OurClients";
import AnimationOnScroll from "./commen/AnimationOnScroll";

const BeGroup = () => {
  return (
    <>
      <AnimationOnScroll />
      {/* <Nav /> */}
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
    </>
  );
};

export default BeGroup;
