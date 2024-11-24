import "./our-services-card.css";

const OurServicesCard = ({ cardTitle, textParagraphTitle, textParagraph }) => {
  return (
    <>
      <div className="oue-services-card">
        <h1>{cardTitle}</h1>
        <p className="nav-text-content">
          <span className=" text-main-color">{textParagraphTitle}</span>
          {textParagraph}
        </p>
        <div className="btn-border btn-border1"></div>
        <div className="btn-border btn-border2"></div>
        <div className="card-link">
          <a href="#">More Details</a>
        </div>
      </div>
    </>
  );
};

export default OurServicesCard;
