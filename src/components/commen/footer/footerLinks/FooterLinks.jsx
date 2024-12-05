import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import "./footer-links.css";
import { useTranslation } from "react-i18next";
const FooterLinks = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer-contact container">
        <div className="footer-links">
          <h1>{t("footer-Phone")}</h1>
          <a href="#">
            <FaPhoneAlt
              style={{
                color: "#f0831d",
                display: "inline-block",
                paddingRight: "5px",
              }}
            />
            {t("footer-PhoneContent")}
          </a>
        </div>
        <div className="footer-links">
          <h1>{t("footer-Email")}</h1>
          <a href="#">
            <FaMailBulk
              style={{
                color: "#f0831d",
                display: "inline-block",
                paddingRight: "5px",
              }}
            />
            {t("footer-EmailContent")}
          </a>
        </div>
        <div className="footer-links">
          <h1>{t("footer-Address")}</h1>
          <a href="#">
            <FaMapMarker
              style={{
                color: "#f0831d",
                display: "inline-block",
                paddingRight: "5px",
              }}
            />
            {t("footer-AddressContent")}
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
