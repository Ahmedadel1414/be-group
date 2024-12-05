import { useEffect, useState } from "react";
import MainSectionTitle from "../commen/MainSectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./our-clients.css";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
} from "../../../public/ourClients";
import { useTranslation } from "react-i18next";

const OurClients = () => {
  const { t } = useTranslation();
  const [images, setImges] = useState([]);

  useEffect(() => {
    setImges([
      client1,
      client2,
      client3,
      client4,
      client5,
      client6,
      client7,
      client8,
      client9,
      client10,
      client11,
      client12,
    ]);
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section className="container">
        <div className="pb-32">
          <MainSectionTitle
            mainTitle={t("ourClients-Our")}
            mainTitle2={t("ourClients-Clients")}
          />
        </div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Client ${index + 1}`}
                className="our-clients-img"
              />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default OurClients;
