import { NavLink } from "react-router-dom";
import LineHorizontal from "../Icon/LineHorizontal";
import LineVertical from "../Icon/LineVertical";
import "./ServiceSection.scss";
import Button from "../Button/Button";
import LineHorizontalBlack from "../Icon/LineHorizontalBlack";
import ArrowSvg from "../Icon/ArrowSvg";
import { useEffect, useRef, useState } from "react";
import consaltImg from "./img/CONSALT.webp";
import cleanImg from "./img/CLEAN.webp";
import { MyUseContext } from "../../context/Context";
import { app } from "../../bd/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import PrevSvg from "../Icon/PrevSvg";
import { useInView } from "react-intersection-observer";
const ServiceSection = () => {
  const { lang } = MyUseContext();
  const db = getFirestore(app);
  const [dataService, setDataService] = useState(null);
  const [detailService, setDetailService] = useState(null);
  const [imgArticle, setImageArticle] = useState(consaltImg);
  const refList = useRef(null);
  const refDetail = useRef(null);
  const {ref,inView} = useInView({threshold: 0.2})
  function activeTab(e, id) {
    const widthWindow = window.innerWidth;
    if (widthWindow <= 768) {
      refList.current.classList.add("listSeviceHide");
      refList.current.classList.add("hide-animate");
      refDetail.current.classList.add("detailSeviceShow");
      refDetail.current.classList.add("show-animate");
    }
    const allTab = document.querySelectorAll(".service__btn");
    allTab.forEach((val) => {
      if (val.classList.contains("service__btn--active")) {
        val.classList.remove("service__btn--active");
      }
    });
    e.classList.toggle("service__btn--active");
    setDetailService(dataService.filter((el) => el.id === id)[0]);
    setImageArticle(cleanImg)
  }

  const backToMobileList = () => {
    refList.current.classList.remove("listSeviceHide");
    refList.current.classList.add("show-animate");
    refDetail.current.classList.remove("detailSeviceShow");
    refDetail.current.classList.add("hide-animate");
  };
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
  useEffect(()=>{
    if(dataService){
      
      setDetailService(dataService[0])
      
    }
  },[dataService])
  
  window.addEventListener("resize", () => {
    const widthWindow = window.innerWidth;
    if (widthWindow > 768) {
      refList.current.classList.remove("listSeviceHide");
      refDetail.current.classList.remove("detailSeviceShow");
    }
  });
  return (
    <section id="service" className="service">
      <div className="container service__container container--column">
        <div className="service__header">
          <h1 className="section__title">
            {lang === "pl" && "Nasze usługi"}
            {lang === "en" && "Our services"}
          </h1>
        </div>
        <div ref={ref} className={`service__content ${inView ? "show-animate": "hide-animate"}`}>
          <div ref={refList} className="service__list">
            {dataService &&
              dataService.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={(e) => activeTab(e.currentTarget, item.id)}
                    className={`service__btn ${item.id === detailService?.id && "service__btn--active"}`}
                  >
                    {item[`${lang}`].nameService} <LineHorizontalBlack />
                    <ArrowSvg />
                  </button>
                );
              })}
          </div>
          <div ref={refDetail} className="service__detail">
            <div className="service__detail_content">
              <h2>{detailService && detailService[`${lang}`].titleService}</h2>
              <p>{detailService && detailService[`${lang}`].pService}</p>
              <ul className="service__detail_content_services">
                {detailService &&
                  detailService[`${lang}`].item.map((item) => (
                    <li key={Math.random()}>
                      <span>{Object.keys(item)}</span>
                      <span>{Object.values(item)} ZL</span>
                    </li>
                  ))}
              </ul>
              <LineVertical stroke="#333333" />
              <Button
                href="https://booksy.com/uk-pl/229392_herhel-clinic_medycyna-estetyczna_3_warszawa?do=invite#ba_s=dl_1"
                type="sandy-fill"
                target="__blank"
              >
                {lang === "pl" && "UMOW WIZYTE"}
                {lang === "en" && "Make an appointment"}
              </Button>
            </div>

            <div className="service__detail_img">
              <img loading="lazy" src={imgArticle} />
            </div>
            <button
              className="service__detail_backBtn"
              onClick={() => backToMobileList()}
            >
              <PrevSvg />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
