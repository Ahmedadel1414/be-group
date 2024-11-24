import { FaMobileAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const MenuContact = () => {
  return (
    <>
      <div className=" absolute bottom-0 left-[20%] h-[45%] bg-[#202026] w-[30%] text-center content-center">
        <div className=" nav-text-content text-[3px] text-text-color">
          <a href="#" className="block">
            <i>
              <FaMobileAlt
                style={{
                  display: "inline",
                  marginRight: "5px",
                  marginBottom: "3px",
                }}
              />
            </i>
            +201001574551
          </a>
          <a href="#" className="block">
            <i>
              <FaMailBulk
                style={{
                  display: "inline",
                  marginRight: "5px",
                  marginBottom: "3px",
                }}
              />
            </i>
            ahmedadle10888@gmail.com
          </a>
        </div>
        <div className="nav-text-content mt-10">
          <a href="#">
            <FaFacebookF
              style={{
                display: "inline",
                marginRight: "25px",
                marginTop: "30px",
              }}
            />
          </a>
          <a href="#">
            <FaTwitter
              style={{
                display: "inline",
                marginRight: "25px",
                marginTop: "30px",
              }}
            />
          </a>
          <a href="#">
            <FaLinkedinIn
              style={{
                display: "inline",
                marginRight: "25px",
                marginTop: "30px",
              }}
            />
          </a>
          <a href="#">
            <FaInstagram
              style={{
                display: "inline",
                marginRight: "25px",
                marginTop: "30px",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuContact;
