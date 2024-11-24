import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "./left-side-barr.css";

const LeftSideBarr = () => {
  return (
    <>
      <nav className="left-nav-bar">
        <div className="left-nav-icons">
          <a href="#" className="left-nav-links left-nav-links1">
            <p>AR</p>
          </a>
        </div>
        <div className="left-nav-icons left-nav-icons2">
          <i>
            <a href="#" className="left-nav-links">
              <FaPhoneAlt />
            </a>
          </i>
        </div>
        <div className="left-nav-icons left-nav-icons3">
          <i>
            <a href="#" className="left-nav-links">
              <FaWhatsapp />
            </a>
          </i>
        </div>
      </nav>
    </>
  );
};

export default LeftSideBarr;
