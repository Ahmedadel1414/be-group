import aboutUsImg from "../../../Public/about us/34921.webp";
import Stroke from "../commen/StrokeText";
import "./about-us.css";

const AboutUs = () => {
  return (
    <>
      <section className="about-us-container">
        <div className="about-img-container">
          <img src={aboutUsImg} alt="img" />
        </div>
        <div className="about-text-contaner">
          <Stroke text="Be Group" />
          <h1>Digital Services has never been easier.</h1>
          <h3>What We Do?</h3>
          <h6>- Digital assets audit</h6>
          <h6>- Research & competitive analysis</h6>
          <h6>- Target audience segmentation</h6>
          <h6>- Customer persona & content personalization strategy</h6>
          <h6>- Digital communications strategy</h6>
          <h6>- Creative, social media & Digital advertising strategy</h6>
          <h6>- Business intelligence & reporting tools</h6>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
