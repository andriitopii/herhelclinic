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
          <Logo type="ACHOR"/>
          <Button type="white-fill">UMOW WIZYTE</Button>
        </div>
        <div className="footer__menu">
          <ul>
            <li>
              <h2>CONTACT US</h2>
            </li>
            <li><span><CallSvg/></span><a href="tel:48574571006">574-571-006</a></li>
            <li><span><EmailSvg/></span><a href="mailto:herhelclinic@gmail.com">herhelclinic@gmail.com</a></li>
            <li><span><HomeSvg/></span><a href="https://maps.app.goo.gl/SUBTG7s4QVLZySGM7" target="__blank">WARSZAWA, UL. KROCHMALNA 8, LOC 2</a></li>
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
            <li><a href="#service">NASZE USLUGI</a></li>
            <li><a href="#service">CENY</a></li>
            <li><a href="#about">O NAS</a></li>
            <li><a href="#media">My w mediach</a></li>
            <li><a href="#contact">KONTAKTY</a></li>
          </ul>
        </div>

        <div className="footer__copyright">
          <ul>
            <li>
              <a href="https://www.andriitopii.com/" target="__blank">Powered by Andrii Topii</a>
            </li>
            <li>
            <Link to="/police" re>POLITYKA PRYWATNOSTI</Link>
            </li>
            <li>
              <a href="/terms">TERMS & CONDITIONS</a>
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
