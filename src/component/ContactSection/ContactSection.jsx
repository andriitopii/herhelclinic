import Button from "../Button/Button";
import "./ContactSection.scss";
import { app } from "../../bd/firebase";
import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  arrayUnion,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { MyUseContext } from "../../context/Context";
import contactImg from "./contactimg.webp";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";
const ContactSection = () => {
  const [dataContact, setDataContact] = useState(null);
  const [stateForm, setStateForm] = useState(1);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 });
  const {
    register,
    reset,
    handleSubmit,
    formState,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({ mode: "all" });
  const db = getFirestore(app);
  const { lang } = MyUseContext();
  const getDataContact = async () => {
    const docConctact = doc(db, "lang", "contact");
    await getDoc(docConctact)
      .then((doc) => setDataContact(doc.data()))
      .catch(() => getDataContact());
  };
  const sendMessage = async (data) => {
    const docConctact = doc(db, "message", data.numberContact);
    const date = new Date();
    setStateForm(3);
    await setDoc(
      docConctact,
      {
        name: data.nameContact,
        phone: data.numberContact,
        email: data.emailContact,
        message: arrayUnion({
          message: data.textContact,
          time: date,
          status: false,
        }),
      },
      { merge: true }
    )
      .then(() => {
        setStateForm(2),
          setTimeout(() => setStateForm(1), 4000),
          clearTimeout();
      })
      .catch(() => setStateForm(0));
  };
  useEffect(() => {
    getDataContact();
  }, []);
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);
  return (
    <section id="contact" className="contact">
      <div className="container contact__container">
        <div
          ref={ref}
          className={`contact__form ${
            inView ? "show-animate" : "hide-animate"
          }`}
        >
          <h1>{dataContact ? dataContact[`${lang}`].title : ""}</h1>
          <p>{dataContact ? dataContact[`${lang}`].descrip : ""}</p>
          {stateForm === 2 && (
            <span>
              {lang === "pl" ? "Wysłano pomyślnie" : "Successfully sent"}
            </span>
          )}
          {stateForm === 0 && (
            <span>{lang === "pl" ? "Błąd wysyłania" : "Sending error"}</span>
          )}
          {stateForm === 3 && (
            <span>{lang === "pl" ? "Wysyłanie..." : "Sending..."}</span>
          )}
          {stateForm === 1 && (
            <span style={{ color: "red" }}>
              
            </span>
          )}
          <form onSubmit={handleSubmit(sendMessage)}>
            <input
              placeholder={`${lang === "pl" ? "IMIĘ" : "NAME"}`}
              type="text"
              {...register("nameContact", {
                value: register("nameContact")?.value,
                required: { value: true, message: "Don't be empty" },
                minLength: { value: 5, message: "Minimum 5 symbols" },
              })}
            />
            <input
              placeholder={`${lang === "pl" ? "TELEFON" : "PHONE"}`}
              type="number"
              {...register("numberContact", {
                value: register("numberContact")?.value,
                required: { value: true, message: "Don't be empty" },
                minLength: { value: 5, message: "Minimum 5 symbols" },
              })}
            />
            <input
              placeholder={`${lang === "pl" ? "EMAIL" : "EMAIL"}`}
              type="email"
              {...register("emailContact", {
                value: register("emailContact")?.value,
                required: { value: true, message: "Don't be empty" },
                minLength: { value: 5, message: "Minimum 5 symbols" },
              })}
            />
            <input
              placeholder={`${lang === "pl" ? "WIADOMOŚĆ" : "MESSAGE"}`}
              type="text"
              {...register("textContact", {
                value: register("textContact")?.value,
                required: { value: true, message: "Don't be empty" },
                minLength: { value: 5, message: "Minimum 5 symbols" },
              })}
            />
            <button disabled={!isValid}>
              {lang === "pl" ? "WYŚLIJ" : "SEND"}
            </button>
          </form>
        </div>
        <div
          ref={ref1}
          className={`contact__img ${
            inView1 ? "show-animate" : "hide-animate"
          }`}
        >
          <img loading="lazy" src={contactImg} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
