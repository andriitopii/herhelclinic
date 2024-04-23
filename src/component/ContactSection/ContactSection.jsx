import Button from "../Button/Button";
import "./ContactSection.scss";
import contactImg from "./contactimg.jpg";
const ContactSection = () => {
    return ( <section id="contact" className="contact">
        <div className="container contact__container container--row">
            <div className="contact__form">
            <h1>skontaktuj się</h1>
            <p>Zostaw nam swoje dane, a my skontaktujemy się z Tobą tak szybko, jak to możliwe</p>
            <form>
                <input type="text"/>
                <input type="number"/>
                <input type="email"/>
                <input type="text"/>
                <Button type="white-fill">WYSLIJ</Button>
            </form>
            </div>
            <div className="contact__img">
                <img height="100%" width="100%"src={contactImg}/>
            </div>
        </div>
    </section> );
}
 
export default ContactSection;