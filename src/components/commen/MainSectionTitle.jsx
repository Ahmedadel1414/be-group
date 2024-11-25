const MainSectionTitle = ({ mainTitle, mainTitle2 }) => {
  return (
    <>
      <div className="main-section-title-container scroll-text">
        <span className="main-section-title">{mainTitle}</span>
        <span className="main-section-title-border">{mainTitle2}</span>
      </div>
    </>
  );
};

export default MainSectionTitle;
