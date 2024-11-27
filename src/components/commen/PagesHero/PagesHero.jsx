import Header from "../header/Header";
import "./pages-hero.css";

const PagesHero = () => {
  return (
    <>
      <section className="pages-hero-img">
        <Header />
        <div className=" w-full h-[80%] text-center content-center">
          <h1 className=" pages-hero-title">BE GROUP</h1>
          <p className="pages-hero-paragraph">
            For e-marketing solutions
            <span className="under-line">Works</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default PagesHero;
