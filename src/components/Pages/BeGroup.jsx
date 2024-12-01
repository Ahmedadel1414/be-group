import AboutUs from "../aboutUs/AboutUs";
import Achievements from "../Achievements/Achievements";
import AnimationOnScroll from "../commen/AnimationOnScroll";
import LeftSideBarr from "../commen/leftSideBarr/LeftSideBarr";
import Hero from "../hero/Hero";
import OurClients from "../ourClients/OurClients";
import OurServices from "../ourServices/OurServices";
import OurWorks from "../ourWorks/OurWorks";
import Value from "../valueOfSection/Value";

const BeGroup = () => {
  return (
    <>
      <>
        <AnimationOnScroll />
        <Hero />
        <LeftSideBarr />
        <AboutUs />
        <Value />
        <OurClients />
        <OurServices />
        <Achievements />
        <OurWorks />
      </>
    </>
  );
};

export default BeGroup;
