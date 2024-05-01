import { useState } from "react";
import Button from "../Button/Button";
import LineVertical from "../Icon/LineVertical";
import MouseSvg from "../Icon/MouseSvg";
import "./Header.scss";
import headerVideo from "./headervideo.mp4"
import LineHorizontal from "../Icon/LineHorizontal";
import { useInView } from "react-intersection-observer";
import Nav from "../Nav/Nav";
const HeaderTitle = ({title}) => {
    const {ref, inView} = useInView({threshold: 0.2});
    return(<h1 ref={ref} className={`${inView ? "show-animate" :"hide-animate"}`}>{title}</h1>)
}
const HeaderDescrip = ({descrip}) => {
    const {ref, inView} = useInView({threshold: 0.2});
    return(<p ref={ref} className={`${inView ? "show-animate" :"hide-animate"}`}>{descrip}</p>)
}
const HeaderTitle3 = ({title}) => {
    const {ref, inView} = useInView({threshold: 0.2});
    return(<h3 ref={ref} className={`${inView ? "show-animate" :"hide-animate"}`}>{title}</h3>)
}
const Header = () => {
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

    return ( 
    <header id="header" className="header">
        
        <div className={`header__video show-animate`}>
     <video playsInline loop autoPlay muted src={headerVideo} ></video> 
        </div>
        <Nav/>
        <div className="header__container container container--row ">
        
        <div className="header__social" >
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
        <HeaderTitle3 title="Klinika medycyny estetycznej №1 w Warszawie"/>
        <HeaderTitle title="Piękno, Zdrowie,"/>
        <HeaderTitle title="świetny wygląd."/>
        <HeaderDescrip descrip="Odkryj świat kosmetologii, w którym piękno łączy się ze zdrowiem, zapewniając wspaniały wygląd wewnątrz i na zewnątrz"/>
        
        <div className="header__content_btn-container">
            <Button href="https://booksy.com/uk-pl/229392_herhel-clinic_medycyna-estetyczna_3_warszawa?do=invite#ba_s=dl_1" type="white-fill">UMOW WIZYTE</Button>
            <Button href="#service"  type="white-trans-stroke">POZNAJ NAS</Button>
        </div>
        <a className="header__content_adress" href="https://maps.app.goo.gl/SUBTG7s4QVLZySGM7" target="__blank">Warszawa, ul.Krochmalna 58</a>
        </div>
        </div>
    </header> );
}
 
export default Header;