import { useInView } from "react-intersection-observer";
import AllInclusiceSvg from "../Icon/AllInclusiceSvg";
import ChairSvg from "../Icon/ChairSvg";
import HealthSvg from "../Icon/HealthSvg";
import LineHorizontalBlack from "../Icon/LineHorizontalBlack";
import SchoolSvg from "../Icon/SchoolSvg";
import "./AboutSection.scss";
import { MyUseContext } from "../../context/Context";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../bd/firebase";
import { useEffect, useState } from "react";
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
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`${defaultClass} ${inView ? "show-animate" : "hide-animate"} `}
    >
      {icon}
      <h2
        ref={ref1}
        className={` ${inView1 ? "show-animate" : "hide-animate"} `}
      >
        {h2}
      </h2>
      <p
        ref={ref2}
        className={` ${inView2 ? "show-animate" : "hide-animate"} `}
      >
        {p}
      </p>
    </div>
  );
};
const AboutSection = () => {
  const { lang } = MyUseContext();
  const db = getFirestore(app);
  const [dataAbout, setDataAbout] = useState(null);
  const getDataAbout = async () => {
    const docAbout = doc(db, "lang", "about");
    await getDoc(docAbout).then((doc)=>setDataAbout(doc.data())).catch((err)=>console.log(err))
  };
  useEffect(() => {
    getDataAbout()
  }, []);
  console.log(dataAbout);
  return (
    <section id="about" className="about">
      <div className="container about__container">
        <div className="about__header">
          <div>
            <HeaderTitle title={dataAbout ? dataAbout[`${lang}`].titleSection : ""} />
            <HeaderDescrip
              descrip={dataAbout ? dataAbout[`${lang}`].descripSection : ""}
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
            p={dataAbout ? dataAbout[`${lang}`].item1.descrip : ""}
            h2={dataAbout ? dataAbout[`${lang}`].item1.title : ""}
          />
          <AboutArticle
            icon={<HealthSvg />}
            defaultClass="about__content_item about__img3"
            p={dataAbout ? dataAbout[`${lang}`].item3.descrip : ""}
            h2={dataAbout ? dataAbout[`${lang}`].item3.title : ""}
          />
          <AboutArticle
            icon={<SchoolSvg />}
            defaultClass="about__content_item"
            p={dataAbout ? dataAbout[`${lang}`].item2.descrip : ""}
            h2={dataAbout ? dataAbout[`${lang}`].item2.title : ""}
          />
          <AboutArticle
            icon={<ChairSvg />}
            defaultClass="about__content_item about__img2"
            p={dataAbout ? dataAbout[`${lang}`].item4.descrip : ""}
            h2={dataAbout ? dataAbout[`${lang}`].item4.title : ""}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
