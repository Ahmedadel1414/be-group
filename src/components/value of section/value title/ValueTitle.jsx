import { useState } from "react";
import "./value-title.css";
import { valueText, valueTitle } from "../../../constants/valueTitle";

const ValueTitle = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="value-container">
        <div className="value-title-container">
          {valueTitle.map((title, index) => (
            <h1
              key={index}
              className={`${activeIndex === index ? "value-under-line" : ""} `}
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              {title}
            </h1>
          ))}
        </div>
        <div className="value-text">
          <p>{valueText[activeIndex]}</p>
        </div>
      </section>
    </>
  );
};

export default ValueTitle;
