import LineVertical from "../Icon/LineVertical";
import LineVerticalBlack from "../Icon/LineVerticalBlack";
import "./WhySection.scss";
const WhySection = () => {
  return (
    <section id="why" className="why">
      <div className="container why__container container--column">
        <div className="why__article">
          <div className="why__article_text">
            <LineVerticalBlack />
            <h1>Atmosfera premium</h1>
            <p>
              Każdy element wnętrza został starannie dobrany z uwzględnieniem
              najnowszych trendów, aby stworzyć poczucie luksusu i elegancji.
            </p>
            <LineVerticalBlack />
          </div>
          <div className="why__article_media">
            <div className="why__atmosfera-grid">
              <div className="why__grid-image atm-grid-1"></div>
              <div className="why__grid-image atm-grid-2"></div>
              <div className="why__grid-image atm-grid-3"></div>
              <div className="why__grid-image atm-grid-4"></div>
              <div className="why__grid-image atm-grid-5"></div>
              <div className="why__grid-image atm-grid-6"></div>
            </div>
          </div>
        </div>
        <div className="why__article">
          <div className="why__article_media">
            <div className="why__tool-grid">
              <div className="why__grid-image tool-grid-1"></div>
              <div className="why__grid-image tool-grid-2"></div>
              <div className="why__grid-image tool-grid-3"></div>
              <div className="why__grid-image tool-grid-4"></div>
              <div className="why__grid-image tool-grid-5"></div>
            </div>
          </div>
          <div className="why__article_text why__article_text-end" >
            <LineVerticalBlack />
            <h1>Nowoczesne urządzenia</h1>
            <p>
              Każdy element wnętrza został starannie dobrany z uwzględnieniem
              najnowszych trendów, aby stworzyć poczucie luksusu i elegancji.
            </p>
            <LineVerticalBlack />
          </div>
        </div>
        <div className="why__article">
          <div className="why__article_text">
            <LineVerticalBlack />
            <h1>Lekarze eksperci</h1>
            <p>
              Nasi lekarze stale doskonalą swoje umiejętności i studiują
              najnowsze badania naukowe i technologie, aby zapewnić naszym
              klientom najlepsze i najbardziej zaawansowane metody leczenia.
            </p>
            <LineVerticalBlack />
          </div>
          <div className="why__article_media">
            <div className="why__medic-grid">
              <div className="why__grid-image med-grid-1"></div>
              <div className="why__grid-image med-grid-2"></div>
              <div className="why__grid-image med-grid-3"></div>
              <div className="why__grid-image med-grid-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
