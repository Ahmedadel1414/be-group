import MainSectionTitle from "../commen/MainSectionTitle";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import "./our-clients.css";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
} from "../../../public/ourClients";

const OurClients = () => {
  return (
    <>
      <section className="our-clients-container ">
        <MainSectionTitle mainTitle="Our" mainTitle2="Clients" />
        <div className="our-clients container">
          <div className="btn ">
            <button>{<FaAngleLeft />}</button>
          </div>
          <div className="our-clients-contet">
            <a href="#">
              <img src={client1} alt="icons" />
            </a>
            <a href="#">
              <img src={client2} alt="icons" />
            </a>
            <a href="#">
              <img src={client3} alt="icons" />
            </a>
            <a href="#">
              <img src={client4} alt="icons" />
            </a>
            <a href="#">
              <img src={client5} alt="icons" />
            </a>
            <a href="#">
              <img src={client6} alt="icons" />
            </a>
            <a href="#">
              <img src={client7} alt="icons" />
            </a>
            <a href="#">
              <img src={client8} alt="icons" />
            </a>
            <a href="#">
              <img src={client9} alt="icons" />
            </a>
            <a href="#">
              <img src={client10} alt="icons" />
            </a>
            <a href="#">
              <img src={client11} alt="icons" />
            </a>
            <a href="#">
              <img src={client12} alt="icons" />
            </a>
          </div>
          <div className="btn">
            <button>{<FaAngleRight />}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClients;
