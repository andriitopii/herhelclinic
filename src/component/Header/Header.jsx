import Button from "../Button/Button";
import LineVertical from "../Icon/LineVertical";
import MouseSvg from "../Icon/MouseSvg";
import "./Header.scss";
import headerVideo from "./headervideo.mp4"

const Header = () => {
    return ( 
    <header className="header">
        <div className="header__video">
        <video loop autoPlay muted src={headerVideo} ></video>
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
                <li><LineVertical/></li>
            </ul>
        </div>
        <div className="header__content">
        <h3>Klinika medycyny estetycznej №1 w Warszawie</h3>
        <h1>Piękno, Zdrowie,</h1>
        <h1>świetny wygląd.</h1>
        <p>Odkryj świat kosmetologii, w którym piękno łączy się ze zdrowiem, zapewniając wspaniały wygląd wewnątrz i na zewnątrz</p>
        <div className="header__content_btn-container">
            <Button href="#" type="white-fill">UMOW WIZYTE</Button>
            <Button href="#" type="white-trans-stroke">POZNAJ NAS</Button>
        </div>
        <a className="header__content_adress" href="" target="__blank">Warszawa, ul.Krochmalna 58</a>
        </div>
        </div>
    </header> );
}
 
export default Header;