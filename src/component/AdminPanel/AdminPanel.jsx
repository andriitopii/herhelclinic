import { signOut , getAuth} from "firebase/auth";
import "./AdminPanel.scss";
import { Link, NavLink } from "react-router-dom";
import LogoBlackSvg from "../Icon/LogoBlackSvg";
const AdminPanel = ({children}) => {
    const auth = getAuth()
    const signOutAdmin = () => {
        signOut(auth)
    }
    return ( <section className="admin-panel">
        <div className="admin-panel__nav">
            <Link className="admin-panel__nav_logo" to={"."}><LogoBlackSvg/></Link>
            <ul className="admin-panel__nav_menu">
                <li>
                    <NavLink to="media">Медіа</NavLink>
                </li>
                <li>
                    <NavLink to="services-price">Послуги</NavLink>
                </li>
            </ul>
        <button className="admin-panel__nav_exit"onClick={()=>signOutAdmin()}>Вийти</button>
        </div>
        <div className="admin-panel__content">
            {children}
        </div>
        
    </section> );
}
 
export default AdminPanel;