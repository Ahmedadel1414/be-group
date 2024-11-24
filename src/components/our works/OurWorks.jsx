import ourWorksImg1 from "../../../Public/ourWorks/1.webp";
import ourWorksImg2 from "../../../Public/ourWorks/2.webp";
import ourWorksImg3 from "../../../Public/ourWorks/3.webp";
import ourWorksImg4 from "../../../Public/ourWorks/4.webp";
import ourWorksImg5 from "../../../Public/ourWorks/5.webp";
import ourWorksImg6 from "../../../Public/ourWorks/6.webp";
import ourWorksImg7 from "../../../Public/ourWorks/7.webp";
import ourWorksImg8 from "../../../Public/ourWorks/8.webp";
import ourWorksImg9 from "../../../Public/ourWorks/9.webp";
import { FaArrowRotateRight } from "react-icons/fa6";
import Button from "../commen/Button";
import MainSectionTitle from "../commen/MainSectionTitle";
import "./our-wordks.css";

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
          <Button
            text="Load more"
            padding="10px 30px"
            icon={
              <FaArrowRotateRight
                style={{ display: "inline-block", marginLeft: "5px" }}
              />
            }
          />
        </div>
      </section>
    </>
  );
};

export default OurWorks;
