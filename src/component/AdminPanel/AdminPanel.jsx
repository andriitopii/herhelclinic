import { signOut , getAuth} from "firebase/auth";
import "./AdminPanel.scss";
import { Link, NavLink } from "react-router-dom";
import LogoBlackSvg from "../Icon/LogoBlackSvg";
import Logo from "../Logo/Logo";
import LogoWhiteSvg from "../Icon/LogoWhiteSvg";
const AdminPanel = ({children}) => {
    const auth = getAuth()
    const signOutAdmin = () => {
        signOut(auth)
    }
    const asActive = ({isActive}) => (isActive ? "menu-active": "")
    return ( <section className="admin-panel">
        <div className="admin-panel__nav">
            <Link className="admin-panel__nav_logo" to={"."}><LogoWhiteSvg/></Link>
            <ul className="admin-panel__nav_menu">
                <li>
                    <NavLink className={asActive} to="media">Медіа</NavLink>
                </li>
                <li>
                    <NavLink className={asActive} to="services-price">Послуги</NavLink>
                </li>
                <li>
                <button className="admin-panel__nav_exit"onClick={()=>signOutAdmin()}>Вийти</button>
                </li>
            </ul>
        
        </div>
        <div className="admin-panel__content">
            {children}
        </div>
        
    </section> );
}
 
export default AdminPanel;