import FooterLinks from "./footerLinks/FooterLinks";
import logo from "/header/20879.webp";
import logo1 from "/footer/1.png";
import logo2 from "/footer/2.png";
import logo3 from "/footer/3.png";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer-container">
        <FooterLinks />
        <div className="footer-logo">
          <a href="">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="footer-logos">
          <a href="#">
            <img src={logo1} alt="logo" />
          </a>
          <a href="">
            <img src={logo2} alt="logo" />
          </a>
          <a href="">
            <img src={logo3} alt="logo" />
          </a>
        </div>
        <div className="menu-text-content last-p">
          <a>All Rights Reserved , Developed and Designed by Be Group</a>
        </div>
      </section>
    </>
  );
};

export default Footer;
