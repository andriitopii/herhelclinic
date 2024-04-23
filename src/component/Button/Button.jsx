import "./Button.scss";
const Button = ({type, href, children}) => {

    return (  <a href={href} className={`btn btn--${type}`} type="button">{children}</a> );
}
 
export default Button;