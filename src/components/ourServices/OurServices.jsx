import MainSectionTitle from "../commen/MainSectionTitle";
import OurServicesCard from "./ourServicesCard/OurServicesCard";
import Button from "../commen/Button";
import { FaArrowRotateRight } from "react-icons/fa6";
import "./our-services.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const OurServices = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="pt-32">
        <MainSectionTitle
          mainTitle={t("ourServices-Our")}
          mainTitle2={t("ourServices-Services")}
        />
        <div className="our-services-container container">
          <OurServicesCard
            cardTitle={t("ourServicesCard1-Title")}
            textParagraphTitle={t("ourServicesCard1-textParagraphTitle")}
            textParagraph={t("ourServicesCard1-textParagraph")}
          />
          <OurServicesCard
            cardTitle={t("ourServicesCard2-Title")}
            textParagraphTitle={t("ourServicesCard2-textParagraphTitle")}
            textParagraph={t("ourServicesCard2-textParagraph")}
          />
          <OurServicesCard
            cardTitle={t("ourServicesCard3-Title")}
            textParagraphTitle={t("ourServicesCard3-textParagraphTitle")}
            textParagraph={t("ourServicesCard3-textParagraph")}
          />
          <OurServicesCard
            cardTitle={t("ourServicesCard4-Title")}
            textParagraphTitle={t("ourServicesCard4-textParagraphTitle")}
            textParagraph={t("ourServicesCard4-textParagraph")}
          />
          <OurServicesCard
            cardTitle={t("ourServicesCard5-Title")}
            textParagraphTitle={t("ourServicesCard5-textParagraphTitle")}
            textParagraph={t("ourServicesCard5-textParagraph")}
          />
          <OurServicesCard
            cardTitle={t("ourServicesCard6-Title")}
            textParagraphTitle={t("ourServicesCard6-textParagraphTitle")}
            textParagraph={t("ourServicesCard6-textParagraph")}
          />
          <OurServicesCard
            cardTitle={t("ourServicesCard7-Title")}
            textParagraphTitle={t("ourServicesCard7-textParagraphTitle")}
            textParagraph={t("ourServicesCard7-textParagraph")}
          />
          <OurServicesCard
            cardTitle={t("ourServicesCard8-Title")}
            textParagraphTitle={t("ourServicesCard8-textParagraphTitle")}
            textParagraph={t("ourServicesCard8-textParagraph")}
          />
          <OurServicesCard
            cardTitle={t("ourServicesCard9-Title")}
            textParagraphTitle={t("ourServicesCard9-textParagraphTitle")}
            textParagraph={t("ourServicesCard9-textParagraph")}
          />
        </div>
        <div className="our-services-button">
          <Link to="/our-services">
            <Button
              text={t("ourServicesCard-Button2")}
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
