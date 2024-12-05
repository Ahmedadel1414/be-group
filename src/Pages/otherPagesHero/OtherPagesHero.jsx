import { useTranslation } from "react-i18next";
import "./other-pages-hero.css";

const OtherPagesHero = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="pages-hero-img">
        <div className=" w-full h-[80%] text-center content-center">
          <h1 className=" pages-hero-title">{t("otherHero-BeGroup")}</h1>
          <p className="pages-hero-paragraph">
            {t("otherHero-Paragraph")}
            <span className="under-line">{t("otherHero-Paragraph2")}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default OtherPagesHero;
