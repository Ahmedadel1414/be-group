const Button = ({ padding, icon, text }) => {
  return (
    <>
      <span className="commen-btn" style={{ padding: padding }}>
        <button>
          {text}
          <i>{icon}</i>
        </button>
        <span className="inline-block border-container">
          <div className="btn-border"></div>
          <div className="btn-border btn-border2"></div>
        </span>
      </span>
    </>
  );
};

export default Button;
