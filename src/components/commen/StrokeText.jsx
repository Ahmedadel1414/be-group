const Stroke = ({ text }) => {
  return (
    <>
      <p className="main-text stroke-text">{text}</p>
      <p className="main-text scroll-text">{text}</p>
    </>
  );
};

export default Stroke;
