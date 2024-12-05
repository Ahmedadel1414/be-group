import { useEffect, useState } from "react";
import {
  AnothervalueTitle,
  AnothervalueText,
} from "../../constants/anotherValue";
import {
  arAnothervalueTitle,
  arAnothervalueText,
} from "../../constants/arAnotherValue";
import cookies from "js-cookie";

const AnotherValue = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lng, setLng] = useState(cookies.get("i18next") || "en");
  useEffect(() => {
    const handleLanguageChange = () => {
      setLng(cookies.get("i18next") || "en");
    };
    const interval = setInterval(() => {
      const currentLng = cookies.get("i18next") || "en";
      if (currentLng !== lng) {
        handleLanguageChange();
      }
    }, 50);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [lng]);
  const titles = lng === "ar" ? arAnothervalueTitle : AnothervalueTitle;
  const texts = lng === "ar" ? arAnothervalueText : AnothervalueText;

  return (
    <section className="value-container">
      <div className="value-title-container">
        {titles.map((title, index) => (
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
        <p>{texts[activeIndex]}</p>
      </div>
    </section>
  );
};

export default AnotherValue;
