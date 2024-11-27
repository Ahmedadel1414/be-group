import "./our-contact.css";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import OurContactsCard from "./OurContactsCard";

const OurContact = () => {
  return (
    <>
      <section className="our-contact-main-card container flex flex-col gap-5 py-32 text-white">
        <div className=" bg-[#3b3b3b] text-start rounded-[20px] p-6">
          <i className="pb-3 inline-block">
            <FaLocationPin
              style={{ color: "#e38820", display: "inline-block" }}
            />
            <h1 className="inline-block">Egypt</h1>
          </i>

          <p className="text-main-color pb-3">
            Nasr City:
            <span className="text-white">
              25 Asmaa Fahmy St,El Nozha St. Nasr City ,Cairo ,Egypt
            </span>
          </p>

          <i className="pb-3 inline-block">
            <FaPhoneVolume
              style={{ color: "#e38820", display: "inline-block" }}
            />
            <span>01009957000</span>
          </i>

          <p className="text-main-color pb-3">
            6 October:
            <span className="text-white">
              West Somid, 7 Villa, Ammar Ibn Yasser Street, Beside Bank Court on
              Main Street - 6 October - Giza - Egypt.
            </span>
          </p>

          <i className="pb-3 inline-block">
            <FaPhoneVolume
              style={{ color: "#e38820", display: "inline-block" }}
            />
            <span>01090202002</span>
          </i>

          <p className="text-main-color pb-3">
            Elharam:
            <span className="text-white">Mashaal, Al Haram, Giza, Egypt.</span>
          </p>

          <i>
            <FaPhoneVolume
              style={{ color: "#e38820", display: "inline-block" }}
            />
            <span>01061797758</span>
          </i>
        </div>
        <div className="our-contact-cards grid gap-5  grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
          <OurContactsCard
            title="UAE"
            number="+976502671799"
            text="office 21,floor,3 ALMamzar centre , Hor Al Anz East ,Dubai, UAE"
          />
          <OurContactsCard
            title="Saudi"
            number="+966563356562"
            text="Almalqa District, King Faisal bin Abdul Aziz Al Saud, Riyadh 13522"
          />
          <OurContactsCard
            title="Canda"
            number="+1 438 464 2995"
            text="4835 Boulevard Henri, Bourassa, Quest 111 Montreal, Quebec H4loa5, Canada"
          />
          <OurContactsCard
            title="Germmany"
            number="(+49)015906461858"
            text="Stieglitzstraße 21, 63263 Neu-Isenburg, Germany"
          />
          <OurContactsCard
            title="United Kingdom"
            number="(+49)015906461858"
            text="H36P+F4 Ilford, United Kingdom."
          />
        </div>
      </section>
    </>
  );
};

export default OurContact;
