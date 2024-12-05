import { useState } from "react";
import "./contact-input.css";
const ContactInput = ({ text }) => {
  const [chickIfClicked, setChickIfClicked] = useState(true);

  const handleClick = (element) => {
    if (chickIfClicked == true) {
      element.target.style = "background-color: #fff";
      setChickIfClicked(false);
    } else {
      element.target.style = "background-color: transparent";
      setChickIfClicked(true);
    }
  };

  return (
    <>
      <div className="bottom-input-container">
        <p className="input-text">{text}</p>
        <div
          className="input-bolet"
          onClick={(element) => {
            handleClick(element);
          }}
        ></div>
      </div>
    </>
  );
};

export default ContactInput;
