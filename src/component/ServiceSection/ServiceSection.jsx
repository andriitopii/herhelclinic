import { NavLink } from "react-router-dom";
import LineHorizontal from "../Icon/LineHorizontal";
import LineVertical from "../Icon/LineVertical";
import "./ServiceSection.scss";
import Button from "../Button/Button";
import LineHorizontalBlack from "../Icon/LineHorizontalBlack";
import ArrowSvg from "../Icon/ArrowSvg";
import { useState } from "react";
import consaltImg from "./img/CONSALT.webp"
import cleanImg from "./img/CLEAN.webp"
const ServiceSection = () => {
  
  const objData = {
    consalt: {
      title: "Czy wiesz, co to jest dobra dorada?",
      descrip: "Dobre doradztwo to nie tylko udzielanie informacji, ale także uważne słuchanie, uwzględnianie potrzeb i indywidualnych cech klienta oraz znajdowanie najlepszego rozwiązania.",
      services: [
        {"Konsultacja lekarza dermatologa": "270ZL"},
        {"Konsultacja trychologa z trichoskopią": "270ZL"},
        {"Powtórna konsultacja trychologa( w ciągu miesiąca) do 30 minut" : "270ZL"},
        {"Konsultacja lekarza dermatologa": "270ZL"},
      ]
    },
    clean: {
      title: "Czy wiesz, co to jest dobra dorada?",
      descrip: "Dobre doradztwo to nie tylko udzielanie informacji, ale także uważne słuchanie, uwzględnianie potrzeb i indywidualnych cech klienta oraz znajdowanie najlepszego rozwiązania.",
      services: [
        {"Czyszczenie obszaru pleców\dekoltu": "od 250 zł"},
        {"Konsultacja trychologa z trichoskopią": "270ZL"},
        {"Powtórna konsultacja trychologa( w ciągu miesiąca) do 30 minut" : "270ZL"},
        {"Konsultacja lekarza dermatologa": "270ZL"},
      ]
    }

  }
  const [articleDetail, setArticleDetail] = useState(objData.consalt);
  const [imgArticle, setImageArticle] = useState(consaltImg)
  function activeTab(e, action) {
    const allTab = document.querySelectorAll('.service__btn');
    allTab.forEach((val)=>{
      if(val.classList.contains('service__btn--active')){
        val.classList.remove('service__btn--active')
      }
    })
    e.classList.toggle('service__btn--active');
    switch(action){
        case "CONSALT": 
        setArticleDetail(objData.consalt)
        setImageArticle(consaltImg)
        break;
        case "CLEAN": 
        setArticleDetail(objData.clean)
        setImageArticle(cleanImg)
        break;
    }
   
  }
  return (
    <section id="service" className="service">
      <div className="container service__container container--column">
        <div className="service__header">
          <h1 className="section__title">Nasze usługi</h1>
        </div>
        <div className="service__content">
          <div className="service__list">
            <button onClick={(e)=>activeTab(e.currentTarget, "CONSALT")} className="service__btn service__btn--active">Konsultacje <LineHorizontalBlack />
             <ArrowSvg/>
            </button>
            <button onClick={(e)=>activeTab(e.currentTarget, "CLEAN")} className="service__btn">Oczyszczanie <LineHorizontalBlack />
             <ArrowSvg/></button>
            <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Peelingi <LineHorizontalBlack />
             <ArrowSvg/></button>
            <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Biologique Recherche <LineHorizontalBlack />
             <ArrowSvg/></button>
            <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Hydrafacial MD <LineHorizontalBlack />
             <ArrowSvg/></button>
            <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Aquapure <LineHorizontalBlack />
             <ArrowSvg/></button>
            <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">GeneO+ <LineHorizontalBlack width="100%"/>
             <ArrowSvg/></button>
            <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Coolifting <LineHorizontalBlack />
             <ArrowSvg/></button>
            <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Candela Nordlys Ellipse IPL <LineHorizontalBlack width="100%"/>
             <ArrowSvg/></button>
            <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Candela Nordlys Ellipse Frax1550 <LineHorizontalBlack width="100%"/>
             <ArrowSvg/></button>
            <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Smas- lifting <LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Mikroigowa RF-liftin Vivace<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Szlifowanie laserowe CO2<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Depilacja laserowa<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Botox<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Biorewitalizacja Mezoterapia Gualuronidaza<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Plazmoterapia Gualuronidaza<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Stymulacja wzrostu włosów Gualuronidaza<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Konturowanie<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Stymulacja kolagenu Nici Apros Gualuronidaza<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Nici liftinguące Aptos<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Leczenie manualne i działania profilaktyczne<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Korekta sylwetki Stratosphere<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Dermadrop<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Kriolipoza COOLTECH<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">Ginekologia estetyczna<LineHorizontalBlack />
             <ArrowSvg/></button>
             <button onClick={(e)=>activeTab(e.currentTarget)} className="service__btn">BTL Emsella<LineHorizontalBlack />
             <ArrowSvg/></button>
             
            
            
            
          </div>
          <div className="service__detail">
            <h2>{articleDetail.title}</h2>
            <p>{articleDetail.descrip}</p>
            <ul className="service__detail_services">
              {
                articleDetail.services.map((item)=>{
                  for (const key in item) {
                    return <li className=""> {Object.keys(item)}<span>{item[key]}</span></li>
                  }
                })
              }
                
            </ul>
            <LineVertical stroke="#333333"/>
            <Button type="sandy-fill">UMOW WIZYTE</Button>
          </div>
          
          <div className="service__image">
            <img lazy src={imgArticle}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
