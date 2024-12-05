import ContactForm from "./contactForm/ContactForm";
import ContactTitle from "./contactTitle/ContactTitle";
import ContactInput from "./contactInput/ContactInput";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import "./contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="contact-container ">
        <div className="container">
          <div className="contact-title-form-container">
            <ContactTitle />
            <ContactForm />
          </div>
          <div className="contact-input-container">
            <ContactInput text={t("contactInput-AnimationVideo")} />
            <ContactInput text={t("contactInput-SocialMediaManagement")} />
            <ContactInput text={t("contactInput-WebDevelopment")} />
            <ContactInput text={t("contactInput-GoogleAdword")} />
            <ContactInput text={t("contactInput-SearchEngineOptimization")} />
            <ContactInput text={t("contactInput-GoogleMaps")} />
            <ContactInput text={t("contactInput-MediaProduction")} />
            <ContactInput text={t("contactInput-Branding")} />
            <ContactInput text={t("contactInput-Consultation")} />
          </div>
          <div className="contact-button-container">
            <Button
              text={t("contact-Button")}
              padding="10px"
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

export default Contact;
