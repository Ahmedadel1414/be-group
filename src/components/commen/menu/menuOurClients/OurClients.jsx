import ourClients from "/menu/OurClients.jpg";

const OurClients = () => {
  return (
    <>
      <div className="nav-imgs absolute h-[45%] w-[20%] bottom-0 overflow-hidden">
        <a href="#">
          <img src={ourClients} alt="our clients" className="nav-img" />
        </a>
        <h1 className="nav-text">Our Clients</h1>
      </div>
    </>
  );
};

export default OurClients;
