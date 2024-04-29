import { Link } from "react-router-dom";
import "./Logo.scss"
import LogoSvg from "./LogoSvg";
const Logo = ({type}) => {
    const scrollTop = () => {
        scrollTo({top: 0, behavior: "smooth"})
    }
    return ( <>{type === "ACHOR" ? <a className="logo" onClick={()=> scrollTop()}><LogoSvg/></a> : <Link to="/" className="logo"></Link>}</> );
}
 
export default Logo;