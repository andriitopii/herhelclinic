import { NavLink } from "react-router-dom";
import LineHorizontal from "../Icon/LineHorizontal";
import LineVertical from "../Icon/LineVertical";
import "./ServiceSection.scss";
import Button from "../Button/Button";
import LineHorizontalBlack from "../Icon/LineHorizontalBlack";
import ArrowSvg from "../Icon/ArrowSvg";
import { useEffect, useState } from "react";
import consaltImg from "./img/CONSALT.webp";
import cleanImg from "./img/CLEAN.webp";
import { MyUseContext } from "../../context/Context";
import { app } from "../../bd/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const ServiceSection = () => {
  const { lang } = MyUseContext();
  const db = getFirestore(app);
  const [dataService, setDataService] = useState(null);
  const [detailService, setDetailService] = useState(null);
  const [imgArticle, setImageArticle] = useState(consaltImg);
  function activeTab(e, id) {
    const allTab = document.querySelectorAll(".service__btn");
    allTab.forEach((val) => {
      if (val.classList.contains("service__btn--active")) {
        val.classList.remove("service__btn--active");
      }
    });
    e.classList.toggle("service__btn--active");
    setDetailService(dataService.filter((el) => el.id === id)[0]);
  }
  const getServiceData = async () => {
    const docRef = collection(db, "service");
    const mobArr = [];
    (await getDocs(docRef)).forEach((doc) => {
      const mobObj = doc.data();
      mobObj.id = doc.id;
      mobArr.push(mobObj);
    });
    setDataService(mobArr);
  };
  useEffect(() => {
    getServiceData();
  }, []);

  return (
    <section id="service" className="service">
      <div className="container service__container container--column">
        <div className="service__header">
          <h1 className="section__title">
            {lang === "pl" && "Nasze usługi"}
            {lang === "en" && "Our services"}
          </h1>
        </div>
        <div className="service__content">
          <div className="service__list">
            {dataService &&
              dataService.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={(e) => activeTab(e.currentTarget, item.id)}
                    className="service__btn"
                  >
                    {item[`${lang}`].nameService} <LineHorizontalBlack />
                    <ArrowSvg />
                  </button>
                );
              })}
          </div>
          <div className="service__detail">
            <div className="service__detail_content">
              <h2>{detailService && detailService[`${lang}`].titleService}</h2>
              <p>{detailService && detailService[`${lang}`].pService}</p>
              <ul className="service__detail_content_services">
                {detailService &&
                  detailService[`${lang}`].item.map((item) => (
                    <li key={Math.random()}>
                      <span>{Object.keys(item)}</span>
                      <span>{Object.values(item)}ZL</span>
                    </li>
                  ))}
              </ul>
              <LineVertical stroke="#333333" />
              <Button type="sandy-fill">
                {lang === "pl" &&  "UMOW WIZYTE"}
                {lang === "en" &&  "Make an appointment"}
               </Button>
            </div>

            <div className="service__detail_img">
              <img loading="lazy" src={imgArticle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
