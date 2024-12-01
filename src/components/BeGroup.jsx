import {
  AboutUs,
  Achievements,
  AnimationOnScroll,
  Hero,
  LeftSideBarr,
  OurClients,
  OurServices,
  OurWorks,
  Value,
} from "../constants/BeGroupImports";

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
