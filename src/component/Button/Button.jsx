import "./Button.scss";
const Button = ({type, href, classs, id, children}) => {

    return (  <a href={href} id={id}  className={`btn btn--${type} ${classs}`} type="button">{children}</a> );
}
 
export default Button;