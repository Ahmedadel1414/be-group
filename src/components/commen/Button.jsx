import { useEffect } from "react";
import cookies from "js-cookie";

const Button = ({ padding, icon, text }) => {
  const lng = cookies.get("i18next");

  useEffect(() => {
    const btnIcon = document.querySelector(".btn-icon");
    if (lng == "ar") {
      btnIcon.style = "transform: rotate(180deg)";
    } else if (lng == "en") {
      btnIcon.style = "transform: rotate(0deg)";
    }
  }, [lng]);

  return (
    <>
      <span className="commen-btn" style={{ padding: padding }}>
        <button>
          {text}
          <i className=" inline-block btn-icon">{icon}</i>
        </button>
        <span className="inline-block border-container">
          <div className="btn-border"></div>
          <div className="btn-border btn-border2"></div>
        </span>
      </span>
    </>
  );
};

export default Button;
