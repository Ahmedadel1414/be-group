import { useTranslation } from "react-i18next";
import "./contact-form.css";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="input-container">
        <form action="submet" className="input-containt">
          <span className="input-name ">
            <input
              type="text"
              name="userName"
              id="inputUserName"
              placeholder={t("contactForm-Name")}
            />
          </span>
          <span className="input-phone ">
            <input
              type="text"
              name="phoneNumber"
              id="inputPhoneNumber"
              placeholder={t("contactForm-Phone")}
            />
          </span>
          <div className="input-email">
            <input
              type="email"
              name="email"
              id="inputEmail"
              placeholder={t("contactForm-Emali")}
            />
          </div>
          <div className="input-message">
            <textarea
              name="Message"
              id="inputMessage"
              placeholder={t("contactForm-Massage")}
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
