import DragMenuSvg from "../Icon/DragMenuSvg";
import Logo from "../Logo/Logo";
import "./Nav.scss"
const Nav = () => {
    return ( <nav className="nav">
        
            <Logo type=""></Logo>
            <button className="nav__btn-menu">
                <DragMenuSvg/>
            </button>
            <div className="nav__menu">

            </div>
       
    </nav> );
}
 
export default Nav;