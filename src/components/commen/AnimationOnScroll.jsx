import { useEffect, useState } from "react";

const AnimationOnScroll = () => {
  const [scrollAnimation, setScrollAnimation] = useState(0);

  useEffect(() => {
    const scrollText = document.querySelectorAll(".scroll-text");
    const scrollCount = window.scrollY;
    const handleScroll = () => {
      scrollText.forEach((scrollElement) => {
        if (scrollCount > scrollAnimation) {
          scrollElement.style.transform = "translateY(10rem)";
        } else if (scrollCount < scrollAnimation) {
          scrollElement.style.transform = "translateY(-10rem)";
        }
        setTimeout(() => {
          scrollElement.style.transform = "translateY(0rem)";
        }, 100);
      });
      setScrollAnimation(scrollCount);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollAnimation]);
};

export default AnimationOnScroll;
