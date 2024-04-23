import AllInclusiceSvg from "../Icon/AllInclusiceSvg";
import ChairSvg from "../Icon/ChairSvg";
import HealthSvg from "../Icon/HealthSvg";
import LineHorizontalBlack from "../Icon/LineHorizontalBlack";
import SchoolSvg from "../Icon/SchoolSvg";
import "./AboutSection.scss";
const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container about__container container--column">
        <div className="about__header">
          <div>
            <h1>Herhel clinic </h1>
            <p>
              Miejsce, w którym łączą się wysokie standardy i niezrównana
              dbałość o szczegóły I jesteśmy gotowi zapewnić, że po prostu nie
              da się tego nie poczuć od pierwszych sekund pobytu
            </p>
          </div>
          <div>
            <LineHorizontalBlack />
          </div>
        </div>
        <div className="about__content">
          <div className="about__content_item about__img1">
            <AllInclusiceSvg />
            <h2>Uniwersalność</h2>
            <p>
              Salon kosmetyczny, sklep z markowymi kosmetykami i klinika
              medycyny estetycznej w jednej lokalizacji
            </p>
          </div>
          <div className="about__content_item">
            <HealthSvg/>
            <h2>Opieka</h2>
            <p>
              Wykwalifikowane doradztwo w zakresie doboru usług i produktów
              kosmetycznych gwarantuje skuteczność rezultatu.
            </p>
          </div>
          <div className="about__content_item ">
            <SchoolSvg />
            <h2>Profesjonalizm</h2>
            <p>
              Każdy specjalista jest mistrzem surfingu w osobnym kierunku, ze
              100% opanowaniem umiejętności
            </p>
          </div>
          <div className="about__content_item about__img2">
            <ChairSvg />
            <h2>Komfort</h2>
            <p>
              Każda usługa ma własną przestrzeń z przytulną atmosferą, w której
              poczujesz się swobodnie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
