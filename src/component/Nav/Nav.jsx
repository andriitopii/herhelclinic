import DragMenuSvg from "../Icon/DragMenuSvg";
import Logo from "../Logo/Logo";
import "./Nav.scss"
const Nav = () => {
    return ( <nav className="nav">
        <div className="container container--j-c-s-b">
            <Logo></Logo>
            <button className="nav__btn-menu">
                <DragMenuSvg/>
            </button>
            <div className="nav__menu">
                
            </div>
        </div>
    </nav> );
}
 
export default Nav;