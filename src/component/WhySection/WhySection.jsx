import { useInView } from "react-intersection-observer";
import LineVertical from "../Icon/LineVertical";
import LineVerticalBlack from "../Icon/LineVerticalBlack";
import "./WhySection.scss";
import WhyGridImage from "./WhyGridImage";
import atm1 from "./atm/1.webp";
import atm2 from "./atm/2.webp";
import atm3 from "./atm/3.webp";
import atm4 from "./atm/4.webp";
import atm5 from "./atm/5.webp";
import atm6 from "./atm/6.webp";
import med1 from "./med/1.webp";
import med2 from "./med/2.webp";
import med3 from "./med/3.webp";
import med4 from "./med/4.webp";
import tool1 from "./tool/1.webp";
import tool2 from "./tool/2.webp";
import tool3 from "./tool/3.webp";
import tool4 from "./tool/4.webp";
import tool5 from "./tool/5.webp";
import { app } from "../../bd/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MyUseContext } from "../../context/Context";
const WhyTitle = ({ title }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <h1 ref={ref} className={`${inView ? "show-animate" : ""}`}>
      {title}
    </h1>
  );
};
const WhyDescrip = ({ descrip }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <p ref={ref} className={`${inView ? "show-animate" : ""}`}>
      {descrip}
    </p>
  );
};
const WhySection = () => {
  const [dataWhyMe, setDataWhyMe] = useState(null);
  const { lang } = MyUseContext();
  const db = getFirestore(app);
  const getWhyData = async () => {
    const docWhyMe = doc(db, "lang", "whyme");
    await getDoc(docWhyMe)
      .then((doc) => setDataWhyMe(doc.data()))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getWhyData()
  }, []);
  return (
    <section id="why" className="why">
      <div className="container why__container container--column">
        <div className="why__article">
          <div className="why__article_text">
            <LineVerticalBlack />
            <WhyTitle title={dataWhyMe ? dataWhyMe[`${lang}`].item1.title : ""} />
            <WhyDescrip
              descrip={dataWhyMe ? dataWhyMe[`${lang}`].item1.descrip : ""}
            />

            <LineVerticalBlack />
          </div>
          <div className="why__article_media">
            <div className="why__atmosfera-grid">
              <WhyGridImage img={atm1} className="why__grid-image atm-grid-1" />
              <WhyGridImage img={atm2} className="why__grid-image atm-grid-2" />
              <WhyGridImage img={atm3} className="why__grid-image atm-grid-3" />
              <WhyGridImage img={atm4} className="why__grid-image atm-grid-4" />
              <WhyGridImage img={atm5} className="why__grid-image atm-grid-5" />
              <WhyGridImage img={atm6} className="why__grid-image atm-grid-6" />
            </div>
          </div>
        </div>
        <div className="why__article">
          <div className="why__article_media">
            <div className="why__tool-grid">
              <WhyGridImage
                img={tool1}
                className="why__grid-image tool-grid-1"
              />
              <WhyGridImage
                img={tool2}
                className="why__grid-image tool-grid-2"
              />
              <WhyGridImage
                img={tool3}
                className="why__grid-image tool-grid-3"
              />
              <WhyGridImage
                img={tool4}
                className="why__grid-image tool-grid-4"
              />
              <WhyGridImage
                img={tool5}
                className="why__grid-image tool-grid-5"
              />
            </div>
          </div>
          <div className="why__article_text why__article_text-end">
            <LineVerticalBlack />
            <WhyTitle title={dataWhyMe ? dataWhyMe[`${lang}`].item2.title : ""} />
            <WhyDescrip
              descrip={dataWhyMe ? dataWhyMe[`${lang}`].item2.descrip : ""}
            />
            <LineVerticalBlack />
          </div>
        </div>
        <div className="why__article">
          <div className="why__article_text">
            <LineVerticalBlack />
            <WhyTitle title={dataWhyMe ? dataWhyMe[`${lang}`].item3.title : ""} />
            <WhyDescrip
              descrip={dataWhyMe ? dataWhyMe[`${lang}`].item3.descrip : ""}
            />
            <LineVerticalBlack />
          </div>
          <div className="why__article_media">
            <div className="why__medic-grid">
              <WhyGridImage img={med1} className="why__grid-image med-grid-1" />
              <WhyGridImage img={med2} className="why__grid-image med-grid-2" />
              <WhyGridImage img={med3} className="why__grid-image med-grid-3" />
              <WhyGridImage img={med4} className="why__grid-image med-grid-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
