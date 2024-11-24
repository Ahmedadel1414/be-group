const Stroke = ({ text }) => {
  return (
    <>
      <p className="main-text stroke-text">{text}</p>
      <p className="main-text">{text}</p>
    </>
  );
};

export default Stroke;
