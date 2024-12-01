import ContactForm from "./contactForm/ContactForm";
import ContactTitle from "./contactTitle/ContactTitle";
import ContactInput from "./contactInput/ContactInput";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact-container ">
        <div className="container">
          <div className="contact-title-form-container">
            <ContactTitle />
            <ContactForm />
          </div>
          <div className="contact-input-container">
            <ContactInput text="Animation video" />
            <ContactInput text="Social Media Management" />
            <ContactInput text="Web Development" />
            <ContactInput text="Google Adword" />
            <ContactInput text="Search Engine Optimization" />
            <ContactInput text="Google Maps" />
            <ContactInput text="Media Production" />
            <ContactInput text="Branding" />
            <ContactInput text="Consultation" />
          </div>
          <div className="contact-button-container">
            <Button
              text="Send"
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
