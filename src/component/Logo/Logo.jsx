import { Link } from "react-router-dom";
import "./Logo.scss"
import LogoSvg from "./LogoSvg";
const Logo = () => {
    return ( <Link className="logo"><LogoSvg/></Link> );
}
 
export default Logo;