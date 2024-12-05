import aboutUsImg from "/about us/34921.webp";
import Stroke from "../commen/StrokeText";
import "./about-us.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-us-container">
        <div className="about-img-container">
          <img src={aboutUsImg} alt="img" />
        </div>
        <div className="about-text-contaner">
          <Stroke text={t("beGroup")} />
          <h1>{t("aboutUsTitle")}</h1>
          <h3>{t("aboutUsWhatWeDo")}</h3>
          <h6>{t("aboutUsPNum1")}</h6>
          <h6>{t("aboutUsPNum2")}</h6>
          <h6>{t("aboutUsPNum3")}</h6>
          <h6>{t("aboutUsPNum4")}</h6>
          <h6>{t("aboutUsPNum5")}</h6>
          <h6>{t("aboutUsPNum6")}</h6>
          <h6>{t("aboutUsPNum7")}</h6>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
