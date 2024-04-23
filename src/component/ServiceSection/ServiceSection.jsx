import { NavLink } from "react-router-dom";
import LineHorizontal from "../Icon/LineHorizontal";
import LineVertical from "../Icon/LineVertical";
import "./ServiceSection.scss";
import Button from "../Button/Button";
const ServiceSection = () => {
  return (
    <section id="service" className="service">
      <div className="container container--column">
        <div className="service__header">
          <h1 className="section__title">Nasze usługi</h1>
        </div>
        <div className="service__content">
          <div className="service__list">
            <NavLink  className="service__btn">
            Konsultacje 
            </NavLink>
            
            
          </div>
          <div className="service__detail">
            <h2>Czy wiesz, co to jest dobra dorada?</h2>
            <p>Dobre doradztwo to nie tylko udzielanie informacji, ale także uważne słuchanie, uwzględnianie potrzeb i indywidualnych cech klienta oraz znajdowanie najlepszego rozwiązania.</p>
            <ul className="service__detail_services">
                <li className="">Konsultacja lekarza dermatologa <span></span></li>
            </ul>
            <LineVertical stroke="#333333"/>
            <Button type="sandy-fill">UMOW WIZYTE</Button>
          </div>
          
          <div className="service__image"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
