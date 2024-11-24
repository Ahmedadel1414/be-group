import getInTuch from "/menu/getInTuch.webp";

const GetInTuch = () => {
  return (
    <>
      <div className="nav-imgs absolute h-[55%] w-[30%] left-[20%]  overflow-hidden">
        <a href="#">
          <img src={getInTuch} alt="our clients" className="nav-img" />
        </a>
        <h1 className="nav-text">Get in Touch</h1>
      </div>
    </>
  );
};

export default GetInTuch;
