import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./Footer.scss";
import CallSvg from "../Icon/CallSvg";
import EmailSvg from "../Icon/EmailSvg";
import HomeSvg from "../Icon/HomeSvg";
import { app } from "../../bd/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { MyUseContext } from "../../context/Context";
import { useEffect, useState } from "react";
const Footer = () => {
  const { lang } = MyUseContext();
  const db = getFirestore(app);
  const [dataFooter, setFooterData] = useState(null);
  const getDataFooter = async () => {
    const docFooter = doc(db, "lang", "footer");
    await getDoc(docFooter)
      .then((doc) => setFooterData(doc.data()))
      .catch(() => console.log("Помилка завантаження"));
  };
  useEffect(() => {
    getDataFooter();
  }, []);
  return (
    <footer className="footer">
      <div className="container container--column">
        <div className="footer__header">
          <Logo type="ACHOR" />
          <Button type="white-fill">
            {lang == "pl" && "UMOW WIZYTE"}
            {lang == "en" && "VISIT AGREEMENTS"}
          </Button>
        </div>
        <div className="footer__menu">
          <ul>
            <li>
              <h2>
                {lang == "pl" && "KONTAKT"}
                {lang == "en" && "CONTACT US"}
              </h2>
            </li>
            <li>
              <span>
                <CallSvg />
              </span>
              <a
                href={`tel:+48${
                  dataFooter ? dataFooter.pl.phone : "574571006"
                }`}
              >
                {dataFooter ? dataFooter[`${lang}`].phone : "574-571-006"}
              </a>
            </li>
            <li>
              <span>
                <EmailSvg />
              </span>
              <a
                href={`mailto:${
                  dataFooter
                    ? dataFooter[`${lang}`].email
                    : "}herhelclinic@gmail.com"
                }`}
              >
                {dataFooter
                  ? dataFooter[`${lang}`].email
                  : "herhelclinic@gmail.com"}
              </a>
            </li>
            <li>
              <span>
                <HomeSvg />
              </span>
              <a
                href="https://maps.app.goo.gl/SUBTG7s4QVLZySGM7"
                target="__blank"
              >
                {dataFooter
                  ? dataFooter[`${lang}`].addres
                  : "herhelclinic@gmail.com"}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <h2>
                {lang == "pl" && "CZAS PRACY"}
                {lang == "en" && "WORKING TIME"}
              </h2>
            </li>
            <li>
              <span>{dataFooter && dataFooter[`${lang}`].workDayDef} :</span>
              {dataFooter && dataFooter[`${lang}`].workTimeDef}
            </li>
            <li>
              <span>{dataFooter && dataFooter[`${lang}`].workDayWeek} :</span>{dataFooter && dataFooter[`${lang}`].workTimeWeek}
            </li>
          </ul>
          <ul>
            <li>
              <h2>
                {lang == "pl" && "MAPA STRONY"}
                {lang == "en" && "SITE MAP"}
              </h2>
            </li>
            <li>
              <a href="#service">
                {lang == "pl" && "NASZE USLUGI"}
                {lang == "en" && "OUR SERVICES"}
              </a>
            </li>
            <li>
              <a href="#service">
                {lang == "pl" && "CENY"}
                {lang == "en" && "PRICES"}
              </a>
            </li>
            <li>
              <a href="#about">
                {lang == "pl" && "O NAS"}
                {lang == "en" && "ABOUT US"}
              </a>
            </li>
            <li>
              <a href="#media">
                {lang == "pl" && "My w mediach"}
                {lang == "en" && "We in the media"}
              </a>
            </li>
            <li>
              <a href="#contact">
                {lang == "pl" && "KONTAKT"}
                {lang == "en" && "CONTACT"}
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__copyright">
          <ul>
            <li>
              <a href="https://www.andriitopii.com/" target="__blank">
                Powered by Andrii Topii
              </a>
            </li>
            <li>
              <Link to="/police">POLITYKA PRYWATNOSTI</Link>
            </li>
            <li>
              <a href="#">TERMS & CONDITIONS</a>
            </li>
          </ul>

          <p>ALL RIGHTS RECEIVE HERHEL GROUP 2024</p>

          <ul>
            <li>
              <a href="#">ING</a>
            </li>
            <li>
              <a href="#">FC</a>
            </li>
            <li>
              <a href="#">TT</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
