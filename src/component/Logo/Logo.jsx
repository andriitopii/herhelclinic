import { Link } from "react-router-dom";
import "./Logo.scss"
import LogoSvg from "./LogoSvg";
const Logo = ({type, color}) => {
    const scrollTop = () => {
        scrollTo({top: 0, behavior: "smooth"})
    }
    return ( <>{type === "ACHOR" ? <a className="logo" onClick={()=> scrollTop()}><LogoSvg fill={color}/></a> : <Link to="/" className="logo"></Link>}</> );
}
 
export default Logo;