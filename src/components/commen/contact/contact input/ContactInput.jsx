import "./contact-input.css";
const ContactInput = ({ text }) => {
  return (
    <>
      <div className="bottom-input-container">
        <p className="input-text">{text}</p>
      </div>
    </>
  );
};

export default ContactInput;
