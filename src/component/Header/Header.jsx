import { useEffect, useState } from "react";
import Button from "../Button/Button";
import LineVertical from "../Icon/LineVertical";
import MouseSvg from "../Icon/MouseSvg";
import "./Header.scss";
import headerVideo from "./headervideo.mp4";
import LineHorizontal from "../Icon/LineHorizontal";
import { useInView } from "react-intersection-observer";
import Nav from "../Nav/Nav";
import { MyUseContext } from "../../context/Context";
import Logo from "../Logo/Logo";
import { app } from "../../bd/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import InstagramSvg from "../Icon/InstgramSvg";
const HeaderTitle = ({ title }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <h1
      ref={ref}
      className={`${
        inView == true && title != null ? "show-animate" : "hide-animate"
      }`}
    >
      {title}
    </h1>
  );
};
const HeaderDescrip = ({ descrip }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <p
      ref={ref}
      className={`${
        inView === true && descrip != null ? "show-animate" : "hide-animate"
      }`}
    >
      {descrip}
    </p>
  );
};
const HeaderTitle3 = ({ title }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <h3
      ref={ref}
      className={`${
        inView === true && title != null ? "show-animate" : "hide-animate"
      }`}
    >
      {title}
    </h3>
  );
};
const Header = () => {
  const db = getFirestore(app);
  const [lineDecor, setLineDecor] = useState(true);
  const [dataHeader, setDataHeader] = useState(null);
  const {ref, inView} = useInView({threshold: 0.1})
  const { lang } = MyUseContext();
  function setLine() {
    const width = window.innerWidth;
    if (width < 768) {
      setLineDecor(false);
    } else {
      setLineDecor(true);
    }
  }
  window.addEventListener("load", setLine);
  window.addEventListener("resize", setLine);
  const getHeader = async (data) => {
    const docHeader = doc(db, "lang", "header");
    await getDoc(docHeader)
      .then((doc) => setDataHeader(doc.data()))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getHeader();
  }, []);

  return (
    <header ref={ref} id="header" className="header">
      <div
        className={`header__video ${inView ? "show-animate": "hide-animate--visible"}`}
      >
        <video playsInline loop autoPlay muted src={headerVideo}></video>
      </div>
      <Nav />
      {dataHeader && (
        <div className="header__container container container--row ">
          <div className="header__social">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/herhel.clinic"
                  target="__blank"
                  title="Instagram"
                >
                  <InstagramSvg />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <MouseSvg />
              </li>
              <li>{lineDecor ? <LineVertical /> : <LineHorizontal />}</li>
            </ul>
          </div>

          <div className="header__content">
            <HeaderTitle3
              title={dataHeader ? dataHeader[`${lang}`].h2Title : null}
            />
            <HeaderTitle
              title={dataHeader ? dataHeader[`${lang}`].firstLineH1 : null}
            />
            <HeaderTitle
              title={dataHeader ? dataHeader[`${lang}`].secondLineH1 : null}
            />
            <HeaderDescrip
              descrip={dataHeader ? dataHeader[`${lang}`].descrip : null}
            />

            <div className="header__content_btn-container">
              <Button
                href="https://booksy.com/uk-pl/229392_herhel-clinic_medycyna-estetyczna_3_warszawa?do=invite#ba_s=dl_1"
                type="white-fill"
                target="__blank"
                title={dataHeader ? dataHeader[`${lang}`].btnVisit : ""}
              >
                {dataHeader ? dataHeader[`${lang}`].btnVisit : ""}
              </Button>
              <Button title={dataHeader ? dataHeader[`${lang}`].btnMore : ""}href="#service" type="white-trans-stroke">
                {dataHeader ? dataHeader[`${lang}`].btnMore : ""}
              </Button>
            </div>
            <a
              className="header__content_adress"
              href="https://maps.app.goo.gl/SUBTG7s4QVLZySGM7"
              target="__blank"
              title="Addres"
            >
              {dataHeader ? dataHeader[`${lang}`].addres : ""}
            </a>
          </div>
        </div>
      )} 
        <div className={`header__loader  ${dataHeader ? "header__loader--hide" : "header__loader--show"}`}>
          {lang === "pl" && "WITAMY"}
          {lang === "en" && "WELCOME"}
        </div>
     
    </header>
  );
};

export default Header;
