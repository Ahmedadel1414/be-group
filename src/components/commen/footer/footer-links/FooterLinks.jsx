import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import "./footer-links.css";
const FooterLinks = () => {
  return (
    <>
      <div className="footer-contact container">
        <div className="footer-links">
          <h1>Phone</h1>
          <a href="#">
            <FaPhoneAlt
              style={{
                color: "#f0831d",
                display: "inline-block",
                paddingRight: "5px",
              }}
            />
            +201001574551
          </a>
        </div>
        <div className="footer-links">
          <h1>Email Address</h1>
          <a href="#">
            <FaMailBulk
              style={{
                color: "#f0831d",
                display: "inline-block",
                paddingRight: "5px",
              }}
            />
            ahmedadel10888@gmail.com
          </a>
        </div>
        <div className="footer-links">
          <h1>Address</h1>
          <a href="#">
            <FaMapMarker
              style={{
                color: "#f0831d",
                display: "inline-block",
                paddingRight: "5px",
              }}
            />
            25 Asmaa Fahmy, Ard El Golf, Heliopolis, Cairo, Egypt
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
