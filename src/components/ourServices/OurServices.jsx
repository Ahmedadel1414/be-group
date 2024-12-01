import MainSectionTitle from "../commen/MainSectionTitle";
import OurServicesCard from "./ourServicesCard/OurServicesCard";
import Button from "../commen/Button";
import { FaArrowRotateRight } from "react-icons/fa6";
import "./our-services.css";
import { Link } from "react-router-dom";
const OurServices = () => {
  return (
    <>
      <section className="pt-32">
        <MainSectionTitle mainTitle="Our" mainTitle2="Services" />
        <div className="our-services-container container">
          <OurServicesCard
            cardTitle="Animation video"
            textParagraphTitle="Embark on a journey "
            textParagraph="of creativity and excellence with Be Group's Animation Video service. We're here to make your ideas come to life in a mesmer"
          />
          <OurServicesCard
            cardTitle="Social Media Management"
            textParagraphTitle="Be Group "
            textParagraph="offers social media advertising services for companies..."
          />
          <OurServicesCard
            cardTitle="Web Development"
            textParagraphTitle="Be Group "
            textParagraph="was founded in 2009 in Egypt, and is techonology company..."
          />
          <OurServicesCard
            cardTitle="Google Adword"
            textParagraphTitle="Be Group "
            textParagraph="is a 2023 Premier partner..."
          />
          <OurServicesCard
            cardTitle="Search Engine Optization"
            textParagraphTitle="SEO "
            textParagraph="(Search Engine Optimization) is the preactice of... "
          />
          <OurServicesCard
            cardTitle="Google Maps"
            textParagraphTitle="Engage with customers On Google "
            textParagraph="With Be Group Team and Google My Business Account, your get mor..."
          />
          <OurServicesCard
            cardTitle="Media Production"
            textParagraphTitle="Be Group "
            textParagraph="provides media production services, which include video production, audio production..."
          />
          <OurServicesCard
            cardTitle="Branding"
            textParagraphTitle="Be Group "
            textParagraph="provides brand design services that aim..."
          />
          <OurServicesCard
            cardTitle="Consultation"
            textParagraphTitle="Be Group "
            textParagraph="provides marketing consulting services for companies..."
          />
        </div>
        <div className="our-services-button">
          <Link to="/our-services">
            <Button
              text="Services"
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

export default OurServices;
