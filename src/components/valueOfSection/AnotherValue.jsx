import { useState } from "react";
import {
  AnothervalueTitle,
  AnothervalueText,
} from "../../constants/AnotherValue";

const AnotherValue = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="value-container">
        <div className="value-title-container">
          {AnothervalueTitle.map((title, index) => (
            <h1
              key={index}
              className={`${activeIndex === index ? "value-under-line" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {title}
            </h1>
          ))}
        </div>
        <div className="value-text">
          <p>{AnothervalueText[activeIndex]}</p>
        </div>
      </section>
    </>
  );
};

export default AnotherValue;
