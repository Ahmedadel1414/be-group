import { useEffect, useState } from "react";

const Button = ({ padding, icon, text }) => {
  return (
    <>
      <span className="commen-btn" style={{ padding: padding }}>
        <button>
          <a href="#">
            {text}
            <i>{icon}</i>
          </a>
        </button>
        <span className="inline-block ">
          <div className="btn-border btn-border1 "></div>
          <div className="btn-border"></div>
        </span>
      </span>
    </>
  );
};

export default Button;
