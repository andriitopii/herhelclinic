import LogoBlackSvg from "../Icon/LogoBlackSvg";
import Logo from "../Logo/Logo";
import "./Loader.scss"
const Loader = ({load}) => {
    return ( <section className={`loader ${load ? "loader--show" : "loader--hide"}`} >
<div className="loader__effect"><LogoBlackSvg/></div>
    </section> );
}
 
export default Loader;