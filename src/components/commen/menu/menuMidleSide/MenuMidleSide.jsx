import { FaMobileAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import getInTuch from "/menu/getInTuch.webp";

const MenuMidleSide = () => {
  return (
    <>
      <section className="flex-[3]">
        <div className=" flex flex-col h-full">
          <div className="menu-imgs-contanier h-[55%]">
            <a href="#">
              <img
                src={getInTuch}
                alt="our clients"
                className="menu-img h-full"
              />
            </a>
            <h1 className="menu-text">Get in Touch</h1>
          </div>
          <div className=" bg-[#202026] h-[45%] text-center content-center">
            <div className=" menu-text-content text-[3px] text-text-color">
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
            <div className="menu-text-content mt-10">
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
        </div>
      </section>
    </>
  );
};

export default MenuMidleSide;
