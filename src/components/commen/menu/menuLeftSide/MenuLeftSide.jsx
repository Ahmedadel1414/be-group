import ourClients from "/menu/OurClients.jpg";
import "./menu-left-side.css";

const MenuLeftSide = () => {
  return (
    <>
      <section className="flex-[2]">
        <div className="menu-servieces">
          <div className="menu-servieces-title">
            <span className="menu-line"></span>
            <span>Our Servieces</span>
          </div>
          <div className="menu-text-content h-[55%] content-center">
            <nav>
              <a href="#" className="block">
                Wep Development
              </a>
            </nav>
            <nav>
              <a href="#" className="block">
                Mobile App
              </a>
            </nav>
            <nav>
              <a href="#" className="block">
                Branding
              </a>
            </nav>
            <nav>
              <a href="#" className="block">
                Social Media Management
              </a>
            </nav>
            <nav>
              <a href="#" className="block">
                Google Adword
              </a>
            </nav>
            <nav>
              <a href="#" className="block">
                Media Production
              </a>
            </nav>
          </div>
          <div className="menu-imgs-contanier flex-1">
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
