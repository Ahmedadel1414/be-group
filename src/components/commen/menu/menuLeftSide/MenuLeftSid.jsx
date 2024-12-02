import { useContext, useEffect } from "react";
import ourClients from "/menu/OurClients.jpg";
import { isNavTrue } from "../../../../App";
import "./menu-left-side.css";

const MenuLeftSide = () => {
  const isNavHidden = useContext(isNavTrue);

  useEffect(() => {
    const menuServices = document.querySelector(".menu-services");
    const menuLeftSideImg = document.querySelector(".menu-left-side-img");

    isNavHidden
      ? setTimeout(() => {
          (menuServices.style.transform = "translateY(-101%)"),
            (menuLeftSideImg.style.transform = "translateX(101%)");
        }, 200)
      : setTimeout(() => {
          (menuServices.style.transform = "translateY(0%)"),
            (menuLeftSideImg.style.transform = "translateX(0%)");
        }, 200);
  }, [isNavHidden]);

  return (
    <>
      <section className="flex-[2]">
        <div className="menu-lef-side-container">
          <div className="menu-text-content menu-services h-[55%] content-center">
            <div className="menu-servieces-title">
              <span className="menu-line"></span>
              <span>Our Servieces</span>
            </div>
            <nav>
              <a href="#" className="block">
                Wep Development
              </a>
            </nav>
            <nav>
              <a href="#" className="main-menu-links1 block ">
                Mobile App
              </a>
            </nav>
            <nav>
              <a href="#" className="main-menu-links2 block ">
                Branding
              </a>
            </nav>
            <nav>
              <a href="#" className="main-menu-links3 block ">
                Social Media Management
              </a>
            </nav>
            <nav>
              <a href="#" className="main-menu-links4 block ">
                Google Adword
              </a>
            </nav>
            <nav>
              <a href="#" className="main-menu-links5 block ">
                Media Production
              </a>
            </nav>
          </div>
          <div className="menu-imgs-contanier menu-left-side-img flex-1">
            <a href="#">
              <img
                src={ourClients}
                alt="our clients"
                className="menu-img h-full"
              />
            </a>
            <h1 className="menu-text">Our Clients</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuLeftSide;
