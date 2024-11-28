import { FaArrowRotateRight } from "react-icons/fa6";
import Button from "../commen/Button";
import MainSectionTitle from "../commen/MainSectionTitle";
import "./our-wordks.css";
import {
  ourWorksImg1,
  ourWorksImg2,
  ourWorksImg3,
  ourWorksImg4,
  ourWorksImg5,
  ourWorksImg6,
  ourWorksImg7,
  ourWorksImg8,
  ourWorksImg9,
} from "./ourWorksImges";
import { Link } from "react-router-dom";

const OurWorks = () => {
  return (
    <>
      <section className="our-works-container">
        <div className="our-works-title">
          <MainSectionTitle mainTitle="Some os" mainTitle2="Our Works" />
        </div>
        <div className="our-works-img-container container">
          <div className="our-work-img">
            <a href="#">
              <img src={ourWorksImg1} alt="our works" />
            </a>
          </div>
          <div className="our-work-img">
            <a href="#">
              <img src={ourWorksImg2} alt="our works" />
            </a>
          </div>
          <div className="our-work-img">
            <a href="#">
              <img src={ourWorksImg3} alt="our works" />
            </a>
          </div>
          <div className="our-work-img">
            <a href="#">
              <img src={ourWorksImg4} alt="our works" />
            </a>
          </div>
          <div className="our-work-img">
            <a href="#">
              <img src={ourWorksImg5} alt="our works" />
            </a>
          </div>
          <div className="our-work-img">
            <a href="#">
              <img src={ourWorksImg6} alt="our works" />
            </a>
          </div>
          <div className="our-work-img">
            <a href="#">
              <img src={ourWorksImg7} alt="our works" />
            </a>
          </div>
          <div className="our-work-img">
            <a href="#">
              <img src={ourWorksImg8} alt="our works" />
            </a>
          </div>
          <div className="our-work-img">
            <a href="#">
              <img src={ourWorksImg9} alt="our works" />
            </a>
          </div>
        </div>
        <div className="our-services-button">
          <Link to="/our-works">
            <Button
              text="Our Works"
              padding="10px 30px"
              icon={
                <FaArrowRotateRight
                  style={{ display: "inline-block", marginLeft: "5px" }}
                />
              }
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
