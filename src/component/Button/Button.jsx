import { useInView } from "react-intersection-observer";
import "./Button.scss";
const Button = ({type, href, classs, id, children, target}) => {
    const {ref, inView} = useInView({threshold: 0.2})
    return (  <a href={href} id={id} ref={ref}  className={`btn btn--${type} ${classs} ${inView ? "show-animate" : "hide-animate"}`} target={target ? target : ""}>{children}</a> );
}
 
export default Button;