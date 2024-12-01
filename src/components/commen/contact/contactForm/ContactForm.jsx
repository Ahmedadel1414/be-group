import "./contact-form.css";

const ContactForm = () => {
  return (
    <>
      <div className="input-container">
        <form action="submet" className="input-containt">
          <span className="input-name mr-[25px]">
            <input
              type="text"
              name="userName"
              id="inputUserName"
              placeholder="  Name"
            />
          </span>
          <span className="input-phone">
            <input
              type="text"
              name="phoneNumber"
              id="inputPhoneNumber"
              placeholder="  Phone"
            />
          </span>
          <div className="input-email">
            <input
              type="email"
              name="email"
              id="inputEmail"
              placeholder="  Email"
            />
          </div>
          <div className="input-message">
            <textarea
              name="Message"
              id="inputMessage"
              placeholder="  Message"
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
