import { FaMobileAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import getInTuch from "/menu/getInTuch.webp";
import { useContext, useEffect } from "react";
import { isNavTrue } from "../../../../App";
import { useTranslation } from "react-i18next";

const MenuMidleSide = () => {
  const { t } = useTranslation();

  const isNavHidden = useContext(isNavTrue);

  useEffect(() => {
    const menuMidImg = document.querySelector(".menu-mid-img");

    isNavHidden
      ? setTimeout(() => {
          menuMidImg.style.transform = "translateY(101%)";
        }, 200)
      : setTimeout(() => {
          menuMidImg.style.transform = "translateY(0%)";
        }, 200);
  }, [isNavHidden]);

  return (
    <>
      <section className="flex-[3]">
        <div className=" flex flex-col h-full">
          <div className="menu-imgs-contanier menu-mid-img translate-y-full transition-all duration-1000 z-[1] h-[55%]">
            <a href="#">
              <img
                src={getInTuch}
                alt="our clients"
                className="menu-img h-full"
              />
            </a>
            <h1 className="menu-text">{t("midleMenu-GetInTouch")}</h1>
          </div>
          <div className=" relative z-10 bg-[#202026] h-[45%] text-center content-center">
            <div className=" menu-text-content text-[3px] text-text-color">
              <a href="#" className="block main-menu-links1 ">
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
              <a href="#" className="block main-menu-links2 ">
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
              <a href="#" className="inline-block main-menu-links2">
                <FaFacebookF
                  style={{
                    display: "inline",
                    marginRight: "25px",
                    marginTop: "30px",
                  }}
                />
              </a>
              <a href="#" className="inline-block main-menu-links3">
                <FaTwitter
                  style={{
                    display: "inline",
                    marginRight: "25px",
                    marginTop: "30px",
                  }}
                />
              </a>
              <a href="#" className="inline-block main-menu-links4">
                <FaLinkedinIn
                  style={{
                    display: "inline",
                    marginRight: "25px",
                    marginTop: "30px",
                  }}
                />
              </a>
              <a href="#" className="inline-block main-menu-links5">
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
