import Stroke from "../../StrokeText";
import "./contact-title.css";

const ContactTitle = () => {
  return (
    <>
      <div className="contact-title-container">
        <Stroke text="Get in touch" />
        <h1>To custom made</h1>
        <h3>
          Please fill in the quick form and we will be in touch with you as soon
          as possible
        </h3>
      </div>
    </>
  );
};

export default ContactTitle;
