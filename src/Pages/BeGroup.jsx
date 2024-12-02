import AboutUs from "../components/aboutUs/AboutUs";
import Achievements from "../components/Achievements/Achievements";
import AnimationOnScroll from "../components/commen/AnimationOnScroll";
import LeftSideBarr from "../components/commen/leftSideBarr/LeftSideBarr";
import Hero from "../components/hero/Hero";
import OurClients from "../components/ourClients/OurClients";
import OurServices from "../components/ourServices/OurServices";
import OurWorks from "../components/ourWorks/OurWorks";
import Value from "../components/valueOfSection/Value";

const BeGroup = () => {
  return (
    <>
      <>
        <Hero />
        <LeftSideBarr />
        <AboutUs />
        <Value />
        <OurClients />
        <OurServices />
        <Achievements />
        <OurWorks />
        <AnimationOnScroll />
      </>
    </>
  );
};

export default BeGroup;
