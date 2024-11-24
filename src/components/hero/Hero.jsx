import "./hero.css";
import landingBage from "/landengbage/landingBage.mp4";
import Button from "../commen/Button";
import Stroke from "../commen/StrokeText";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="landing-bage">
        <div className="video-container">
          <video src={landingBage} playsInline autoPlay muted loop></video>
        </div>
        <div className="landing-content">
          <div className="landing-text">
            <Stroke text="WE PROVIDE DIGITAl MARKTING" />
          </div>
          <div className="hero-btn">
            <Button
              padding={"10px 15px"}
              text="Contact Us"
              icon={
                <FaArrowRight
                  style={{ display: "inline", marginLeft: "10px" }}
                />
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
