import { useTranslation } from "react-i18next";
import MainSectionTitle from "../commen/MainSectionTitle";
import "./achievements.css";

const Achievements = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <span className="achievements-title">
          <MainSectionTitle
            mainTitle={t("achievements-Achievement")}
            mainTitle2={t("achievements-OfCompany")}
          />
          ;
        </span>
        <div className="achievements-container container">
          <div>
            <h1>+3000</h1>
            <p>{t("achievements-Successful")}</p>
          </div>
          <div>
            <h1>95%</h1>
            <p>{t("achievements-OfCustomer")}</p>
          </div>
          <div>
            <h1>+200</h1>
            <p>{t("achievements-Employ")}</p>
          </div>
          <div>
            <h1>3</h1>
            <p>{t("achievements-Work")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
