import { useEffect, useState } from "react";
import "./value.css";
import { valueText, valueTitle } from "../../constants/value";
import { arValueText, arValueTitle } from "../../constants/arValue";
import cookies from "js-cookie";

const Value = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lng, setLng] = useState(cookies.get("i18next") || "en");

  // Listen for changes in the language cookie
  useEffect(() => {
    const handleLanguageChange = () => {
      setLng(cookies.get("i18next") || "en");
    };

    // Observe changes in the cookie (using a simple interval)
    const interval = setInterval(() => {
      const currentLng = cookies.get("i18next") || "en";
      if (currentLng !== lng) {
        handleLanguageChange();
      }
    }, 50);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [lng]);

  // Choose titles and text based on the selected language
  const titles = lng === "ar" ? arValueTitle : valueTitle;
  const texts = lng === "ar" ? arValueText : valueText;

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

export default Value;
