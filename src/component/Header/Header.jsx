import { useState } from "react";
import Button from "../Button/Button";
import LineVertical from "../Icon/LineVertical";
import MouseSvg from "../Icon/MouseSvg";
import "./Header.scss";
import headerVideo from "./headervideo.mp4"
import LineHorizontal from "../Icon/LineHorizontal";

const Header = ({visible}) => {
    const [lineDecor, setLineDecor] = useState(true)
    function setLine(){
        const width = window.innerWidth;
        if(width < 768){
            setLineDecor(false)
        } else {
            setLineDecor(true)
        }
    }
    window.addEventListener('load', setLine)
    window.addEventListener('resize', setLine)
    console.log(visible);
    return ( 
    <header className="header" style={{visibility: visible ? "hidden" : "visible"}}>
        <div className="header__video">
        <video lazy loop autoPlay muted src={headerVideo} ></video> 
        </div>
        
        <div className="header__container container container--row ">
        <div className="header__social">
            <ul>
                <li><a href="#">ING</a></li>
                <li><a href="#">FC</a></li>
                <li><a href="#">TT</a></li>
            </ul>
            <ul>
                <li><MouseSvg/></li>
                <li>{lineDecor ? <LineVertical/> : <LineHorizontal/>}</li>
            </ul>
        </div>
        <div className="header__content">
        <h3>Klinika medycyny estetycznej №1 w Warszawie</h3>
        <h1>Piękno, Zdrowie,</h1>
        <h1>świetny wygląd.</h1>
        <p>Odkryj świat kosmetologii, w którym piękno łączy się ze zdrowiem, zapewniając wspaniały wygląd wewnątrz i na zewnątrz</p>
        <div className="header__content_btn-container">
            <Button href="https://booksy.com/uk-pl/229392_herhel-clinic_medycyna-estetyczna_3_warszawa?do=invite#ba_s=dl_1" type="white-fill">UMOW WIZYTE</Button>
            <Button href="#service"  type="white-trans-stroke">POZNAJ NAS</Button>
        </div>
        <a className="header__content_adress" href="" target="__blank">Warszawa, ul.Krochmalna 58</a>
        </div>
        </div>
    </header> );
}
 
export default Header;