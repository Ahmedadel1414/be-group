import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const OurContactsCard = ({ title, number, text }) => {
  return (
    <>
      <div className=" text-white">
        <div className=" bg-[#3b3b3b] text-start rounded-[20px] p-6">
          <i className="pb-3 inline-block">
            <FaLocationPin
              style={{ color: "#e38820", display: "inline-block" }}
            />
            <h1 className="inline-block">{title}</h1>
          </i>
          <p className="pb-3">{text}</p>
          <i>
            <FaPhoneVolume
              style={{ color: "#e38820", display: "inline-block" }}
            />
            <span>{number}</span>
          </i>
        </div>
      </div>
    </>
  );
};

export default OurContactsCard;
