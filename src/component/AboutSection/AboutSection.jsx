import { useInView } from "react-intersection-observer";
import AllInclusiceSvg from "../Icon/AllInclusiceSvg";
import ChairSvg from "../Icon/ChairSvg";
import HealthSvg from "../Icon/HealthSvg";
import LineHorizontalBlack from "../Icon/LineHorizontalBlack";
import SchoolSvg from "../Icon/SchoolSvg";
import "./AboutSection.scss";
const HeaderTitle = ({ title }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <h1 ref={ref} className={`${inView ? "show-animate" : "hide-animate"}`}>
      {title}
    </h1>
  );
};
const HeaderDescrip = ({ descrip }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <p ref={ref} className={`${inView ? "show-animate" : "hide-animate"}`}>
      {descrip}
    </p>
  );
};

const AboutArticle = ({ icon, h2, p, defaultClass }) => {
  const {ref, inView} = useInView({ threshold: 0.2 });
  const {ref:ref1, inView: inView1} = useInView({ threshold: 0.2 });
  const {ref:ref2, inView: inView2} = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className={`${defaultClass} ${inView ? "show-animate": "hide-animate"} `}>
      {icon}
      <h2 ref={ref1} className={` ${inView1 ? "show-animate": "hide-animate"} `}>{h2}</h2>
      <p ref={ref2} className={` ${inView2 ? "show-animate": "hide-animate"} `}>{p}</p>
    </div>
  );
};
const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container about__container">
        <div className="about__header">
          <div>
            <HeaderTitle title="Herhel clinic" />
            <HeaderDescrip
              descrip="Miejsce, w którym łączą się wysokie standardy i niezrównana
              dbałość o szczegóły I jesteśmy gotowi zapewnić, że po prostu nie
              da się tego nie poczuć od pierwszych sekund pobytu"
            />
          </div>
          <div>
            <LineHorizontalBlack />
          </div>
        </div>
        <div className="about__content">
          <AboutArticle
            icon={<AllInclusiceSvg />}
            defaultClass="about__content_item about__img1"
            p="Salon kosmetyczny, sklep z markowymi kosmetykami i klinika
              medycyny estetycznej w jednej lokalizacji"
            h2="Uniwersalność"
          />
          <AboutArticle
            icon={<HealthSvg />}
            defaultClass="about__content_item about__img3"
            p="Wykwalifikowane doradztwo w zakresie doboru usług i produktów
            kosmetycznych gwarantuje skuteczność rezultatu."
            h2="Opieka"
          />
          <AboutArticle
            icon={<SchoolSvg />}
            defaultClass="about__content_item"
            p="Każdy specjalista jest mistrzem surfingu w osobnym kierunku, ze
              100% opanowaniem umiejętności"
            h2="Profesjonalizm"
          />
          <AboutArticle
            icon={<ChairSvg />}
            defaultClass="about__content_item about__img2"
            p="Każda usługa ma własną przestrzeń z przytulną atmosferą, w której
              poczujesz się swobodnie."
            h2="Komfort"
          />
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
