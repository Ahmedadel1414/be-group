import MainSectionTitle from "../commen/MainSectionTitle";
import "./achievements.css";

const Achievements = () => {
  return (
    <>
      <section>
        <span className="achievements-title">
          <MainSectionTitle mainTitle="Achievements" mainTitle2="of company" />;
        </span>
        <div className="achievements-container container">
          <div>
            <h1>+3000</h1>
            <p>home.successful_project</p>
          </div>
          <div>
            <h1>95%</h1>
            <p>home.Customer_rate</p>
          </div>
          <div>
            <h1>+200</h1>
            <p>home.employ</p>
          </div>
          <div>
            <h1>3</h1>
            <p>home.work_in</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
