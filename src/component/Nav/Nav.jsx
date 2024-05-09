import { MyUseContext } from "../../context/Context";
import DragMenuSvg from "../Icon/DragMenuSvg";
import Logo from "../Logo/Logo";
import "./Nav.scss"
const Nav = () => {
    const {lang, changeLang} = MyUseContext();
   
    return ( <nav className="nav">
        
            <Logo type=""></Logo>
            <button type="button" onClick={()=> changeLang()} className="nav__lang-btn">
                {lang === "pl" && "English"}
                {lang === "en" && "Polski"}
            </button>
            
       
    </nav> );
}
 
export default Nav;