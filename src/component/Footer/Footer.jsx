import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./Footer.scss";
import CallSvg from "../Icon/CallSvg";
import EmailSvg from "../Icon/EmailSvg";
import HomeSvg from "../Icon/HomeSvg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container--column">
        <div className="footer__header">
          <Logo></Logo>
          <Button type="white-fill">UMOW WIZYTE</Button>
        </div>
        <div className="footer__menu">
          <ul>
            <li>
              <h2>CONTACT US</h2>
            </li>
            <li><span><CallSvg/></span><a href="">02 9055 6222</a></li>
            <li><span><EmailSvg/></span><a href="">HERRHELCLINIC@GMAIL.COM</a></li>
            <li><span><HomeSvg/></span><a href="">WARSZAWA, UL. KROCHMALNA 8, LOC 2</a></li>
          </ul>
          <ul>
            <li>
              <h2>CZAS PRACY</h2>
            </li>
            <li><span>Pon - Sob:</span>09:00 - 21:00</li>
            <li><span>Niedziela:</span>11:00 - 19:00</li>
          </ul>
          <ul>
            <li>
              <h2>MAPA STRONY</h2>
            </li>
            <li><a href="#">NASZE USLUGI</a></li>
            <li><a href="#">CENY</a></li>
            <li><a href="#">O NAS</a></li>
            <li><a href="#">Jesteśmy w mediach</a></li>
            <li><a href="#">KONTAKTY</a></li>
          </ul>
        </div>

        <div className="footer__copyright">
          <ul>
            <li>
              <a href="#">Powered by Andrii Topii</a>
            </li>
            <li>
              <a href="#">POLITYKA PRYWATNOSTI</a>
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
