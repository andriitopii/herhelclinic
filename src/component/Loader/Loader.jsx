import LogoBlackSvg from "../Icon/LogoBlackSvg";
import Logo from "../Logo/Logo";
import "./Loader.scss"
const Loader = () => {
    return ( <section className={`loader loader--show`} >
<div className="loader__effect"><LogoBlackSvg/></div>
    </section> );
}
 
export default Loader;