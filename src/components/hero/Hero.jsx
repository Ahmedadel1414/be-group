import "./hero.css";
import landingBage from "/landengbage/landingBage.mp4";
import Button from "../commen/Button";
import Stroke from "../commen/StrokeText";
import { FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="landing-bage">
        <div className="video-container">
          <video src={landingBage} playsInline autoPlay muted loop></video>
        </div>
        <div className="landing-content">
          <div className="landing-text">
            <Stroke text={t("beGroupMainHearoTitle")} />
          </div>
          <div className="hero-btn">
            <Link to="/our-contacts">
              <Button
                padding={"10px 15px"}
                text={t("contactUs")}
                icon={
                  <FaArrowRight
                    style={{ display: "inline", marginLeft: "10px" }}
                  />
                }
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
