import { useTranslation } from "react-i18next";
import Stroke from "../../StrokeText";
import "./contact-title.css";

const ContactTitle = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact-title-container">
        <Stroke text={t("contactTitle")} />
        <h1>{t("contactTitle-Title")}</h1>
        <h3>{t("contactTitle-Paragraph")}</h3>
      </div>
    </>
  );
};

export default ContactTitle;
