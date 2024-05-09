import { useRef } from "react";
import LineHorizontalBlack from "../Icon/LineHorizontalBlack";
import LineVerticalBlack from "../Icon/LineVerticalBlack";
import LineHorizontalSmall from "../Icon/LineVerticalSmall";
import NextSvg from "../Icon/NextSvg";
import PrevSvg from "../Icon/PrevSvg";
import MediaArticle from "../MediaArticle/MediaArticle";
import "./MediaSection.scss";
import { useInView } from "react-intersection-observer";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";
import { app } from "../../bd/firebase";
import { useEffect } from "react";
import { useState } from "react";
import { MyUseContext } from "../../context/Context";
const MediaTitle = ({ title }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <h1 ref={ref} className={`section__title ${inView ? "show-animate" : ""}`}>
      {title}
    </h1>
  );
};
const MediaDescrip = ({ descrip }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <p ref={ref} className={`${inView ? "show-animate" : ""}`}>
      {descrip}
    </p>
  );
};
const MediaSection = () => {
  const { lang } = MyUseContext();
  const slider = useRef();
  function scrollSlide(action) {
    const clientWidth = slider.current.clientWidth;
    const scrollWidth = slider.current.scrollWidth;
    const scrollLeft = Math.floor(slider.current.scrollLeft);
    const maxScroll = scrollWidth - clientWidth;
   

    switch (action) {
      case "PREV":
        if (scrollLeft <= 50) {
          slider.current.scrollLeft = maxScroll;
        } else {
          slider.current.scrollLeft = scrollLeft - 295;
        }
        break;
      case "NEXT":
        if (maxScroll - scrollLeft <= 50) {
          slider.current.scrollLeft = 0;
        } else {
          slider.current.scrollLeft = scrollLeft + 295;
        }

        break;
    }
  }
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 });
  const [dataArr, setArrData] = useState([]);
  const [dataMediaLang, setDataMediaLang] = useState(null);
  const db = getFirestore(app);
  const getMedia = async () => {
    const dataMedia = await getDocs(collection(db, "media"));
    const arrMob = [];
    dataMedia.forEach((doc) => {
      const mobObj = doc.data();
      mobObj.id = doc.id;
      arrMob.push(mobObj);
      // setArrData([...dataArr, mobObj])
    });
    setArrData(arrMob);
  };
  const getMediaLang = async () => {
    const docMedia = doc(db, "lang", "media");
    await getDoc(docMedia)
      .then((doc) => setDataMediaLang(doc.data()))
      .catch(() => getMediaLang());
  };
  useEffect(() => {
    getMedia();
    getMediaLang();
  }, []);

  return (
    <section id="media" className="media">
      <div className="media__container container container--column">
        <div className="media__header">
          <div className="media__header_title">
            <MediaTitle
              title={dataMediaLang ? dataMediaLang[`${lang}`].title : ""}
            />
            <MediaDescrip
              descrip={dataMediaLang ? dataMediaLang[`${lang}`].descrip : ""}
            />
          </div>
          <div
            ref={ref1}
            className={`media__header_control ${inView1 ? "show-animate" : ""}`}
          >
            <button onClick={() => scrollSlide("PREV")}>
              <PrevSvg />
            </button>
            <LineHorizontalBlack width="73px" />
            <button onClick={() => scrollSlide("NEXT")}>
              <NextSvg />
            </button>
          </div>
        </div>
        <div className="media__content">
          <div ref={slider} className="media__content_slider">
            {dataArr.map((item) => (
              <MediaArticle
                key={item.id}
                title={item.title}
                urlImg={item.img}
                urlPost={item.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
