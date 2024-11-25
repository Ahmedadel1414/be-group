import { useEffect, useState } from "react";

const AnimationOnScroll = () => {
  const [scrollAnimation, setScrollAnimation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollText = document.querySelectorAll(".scroll-text");
      const scrollCount = window.scrollY;
      scrollText.forEach((scrollElement) => {
        if (scrollCount > scrollAnimation) {
          scrollElement.style.transform = "translateY(2rem)";
        } else if (scrollCount < scrollAnimation) {
          scrollElement.style.transform = "translateY(-2rem)";
        }
        setTimeout(() => {
          scrollElement.style.transform = "translateY(0rem)";
        }, 200);
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
