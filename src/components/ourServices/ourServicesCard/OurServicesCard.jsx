import "./our-services-card.css";

const OurServicesCard = ({ cardTitle, textParagraphTitle, textParagraph }) => {
  return (
    <>
      <div className="oue-services-card">
        <h1>{cardTitle}</h1>
        <p className="menu-text-content">
          <span className=" text-main-color">{textParagraphTitle}</span>
          {textParagraph}
        </p>
        <span className="inline-block border-container">
          <div className="btn-border"></div>
          <div className="btn-border btn-border2"></div>
        </span>
        <div className="card-link">
          <a href="#">More Details</a>
        </div>
      </div>
    </>
  );
};

export default OurServicesCard;
