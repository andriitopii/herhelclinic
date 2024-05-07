import Button from "../Button/Button";
import "./ContactSection.scss";
import { app } from "../../bd/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MyUseContext } from "../../context/Context";
const ContactSection = () => {
    const [dataContact, setDataContact] = useState(null);
    const db = getFirestore(app);
    const {lang} = MyUseContext();
    const getDataContact = async ()=>{
        const docConctact = doc(db, "lang", "contact");
        await getDoc(docConctact).then((doc)=>setDataContact(doc.data())).catch(()=>alert("Помилка"))
    }
    useEffect(()=>{
        getDataContact()
    },[])
    
    return ( <section id="contact" className="contact">
        <div className="container contact__container">
            <div className="contact__form">
            <h1>{dataContact ? dataContact[`${lang}`].title : ""}</h1>
            <p>{dataContact ? dataContact[`${lang}`].descrip : ""}</p>
            <form>
                <input placeholder="NAME" type="text"/>
                <input placeholder="MOBILE" type="number"/>
                <input placeholder="EMAIL" type="email"/>
                <input placeholder="MESAGGE" type="text"/>
                <button className="btn btn--white-fill">Wyslij</button>
            </form>
            </div>
            <div className="contact__img">
                
            </div>
        </div>
    </section> );
}
 
export default ContactSection;