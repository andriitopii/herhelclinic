import "./AdminMain.scss";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { app } from "../../bd/firebase";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
const AdminMain = () => {
  const db = getFirestore(app);
  const [dataHeader, setDataHeader] = useState(null);
  const [dataAbout, setDataAbout] = useState(null);
  const [dataWhyMe, setDataWhyMe] = useState(null);
  const [dataContact, setDataContact] = useState(null);
  const [dataMedia, setDataMedia] = useState(null);
  const [dataQuote, setDataQuote] = useState(null);
  const [dataFooter, setDataFooter] = useState(null);
  const {
    setValue: setValueHeader,
    reset: resetHeader,
    register: registerHeader,
    handleSubmit: handleHeader,
    formState: { errors: errorsHeader, isValid: isValidHeader },
  } = useForm({
    mode: "onChange",
  });
  const {
    handleSubmit: handleAbout,
    setValue: setValueAbout,
    formState: { errors: errorsAbout, isValid: isValidAbout },
    register: registerAbout,
    reset: resetAbout,
  } = useForm({ mode: "onChange" });
  const {
    handleSubmit: handleWhyMe,
    setValue: setValueWhyMe,
    formState: { errors: errorsWhyMe, isValid: isValidWhyMe },
    register: registerWhyMe,
    reset: resetWhyMe,
  } = useForm({ mode: "onChange" });
  const {
    handleSubmit: handleContact,
    setValue: setValueContact,
    formState: { errors: errorsContact, isValid: isValidContact },
    register: registerContact,
    reset: resetContact,
  } = useForm({ mode: "onChange" });
  const {
    handleSubmit: handleMedia,
    setValue: setValueMedia,
    formState: { errors: errorsMedia, isValid: isValidMedia },
    register: registerMedia,
    reset: resetMedia,
  } = useForm({ mode: "onChange" });
  const {
    handleSubmit: handleQuote,
    setValue: setValueQuote,
    formState: { errors: errorsQuote, isValid: isValidQuote },
    register: registerQuote,
    reset: resetQuote,
  } = useForm({ mode: "onChange" });
  const {
    handleSubmit: handleFooter,
    setValue: setValueFooter,
    formState: { errors: errorsFooter, isValid: isValidFooter },
    register: registerFooter,
    reset: resetFooter,
  } = useForm({ mode: "onChange" });
  const saveHeaderData = async (data) => {
    const docHeader = doc(db, "lang", "header");
    const headerObjPL = {
      firstLineH1: data.firstH1TitlePL,
      secondLineH1: data.secondH1TitlePL,
      h2Title: data.h2TitlePL,
      descrip: data.descripPL,
      addres: data.addresPL,
      btnVisit: data.btnVisitPL,
      btnMore: data.btnMorePL,
    };
    const headerObjEN = {
      firstLineH1: data.firstH1TitleEN,
      secondLineH1: data.secondH1TitleEN,
      h2Title: data.h2TitleEN,
      descrip: data.descripEN,
      addres: data.addresEN,
      btnVisit: data.btnVisitEN,
      btnMore: data.btnMoreEN,
    };
    await setDoc(docHeader, { pl: headerObjPL, en: headerObjEN })
      .then(() => alert("Зміни збережено"))
      .catch(() => alert("Помилка збереження"));
  };
  const getHeaderData = async () => {
    const docHeader = doc(db, "lang", "header");
    await getDoc(docHeader)
      .then((doc) => {
        const docMob = doc.data();
        setValueHeader("firstH1TitleEN", docMob.en.firstLineH1);
        setValueHeader("firstH1TitlePL", docMob.pl.firstLineH1);
        setValueHeader("secondH1TitlePL", docMob.pl.secondLineH1);
        setValueHeader("secondH1TitleEN", docMob.en.secondLineH1);
        setValueHeader("h2TitlePL", docMob.pl.h2Title);
        setValueHeader("h2TitleEN", docMob.en.h2Title);
        setValueHeader("descripPL", docMob.pl.descrip);
        setValueHeader("descripEN", docMob.en.descrip);
        setValueHeader("addresPL", docMob.pl.addres);
        setValueHeader("addresEN", docMob.en.addres);
        setValueHeader("btnVisitPL", docMob.pl.btnVisit);
        setValueHeader("btnVisitEN", docMob.en.btnVisit);
        setValueHeader("btnMorePL", docMob.pl.btnMore);
        setValueHeader("btnMoreEN", docMob.en.btnMore);

        setDataHeader(doc.data());
      })
      .catch((err) => console.log(err));
  };

  const saveAboutData = async (data) => {
    const docAbout = doc(db, "lang", "about");
    const objAboutPL = {
      titleSection: data.titleSectionPL,
      descripSection: data.descripSectionPL,
      item1: { title: data.titleItem1PL, descrip: data.descripItem1PL },
      item2: { title: data.titleItem2PL, descrip: data.descripItem2PL },
      item3: { title: data.titleItem3PL, descrip: data.descripItem3PL },
      item4: { title: data.titleItem4PL, descrip: data.descripItem4PL },
    };
    const objAboutEN = {
      titleSection: data.titleSectionEN,
      descripSection: data.descripSectionEN,
      item1: { title: data.titleItem1EN, descrip: data.descripItem1EN },
      item2: { title: data.titleItem2EN, descrip: data.descripItem2EN },
      item3: { title: data.titleItem3EN, descrip: data.descripItem3EN },
      item4: { title: data.titleItem4EN, descrip: data.descripItem4EN },
    };
    await setDoc(docAbout, { pl: objAboutPL, en: objAboutEN })
      .then(() => {
        alert("Зміни збережені");
      })
      .catch(() => {
        alert("Виникла помилка");
      });
    console.log(objAboutEN, objAboutPL);
  };
  const getAboutData = async () => {
    const docAbout = doc(db, "lang", "about");
    await getDoc(docAbout)
      .then((doc) => {
        const mobObj = doc.data();
        setValueAbout("titleSectionEN", mobObj.en.titleSection);
        setValueAbout("titleSectionPL", mobObj.pl.titleSection);
        setValueAbout("descripSectionPL", mobObj.pl.descripSection);
        setValueAbout("descripSectionEN", mobObj.en.descripSection);
        setValueAbout("descripSectionEN", mobObj.en.descripSection);
        for (let i = 1; i <= 4; i++) {
          setValueAbout(`titleItem${i}PL`, mobObj.pl[`item${i}`].title);
          setValueAbout(`titleItem${i}EN`, mobObj.en[`item${i}`].title);
          setValueAbout(`descripItem${i}EN`, mobObj.en[`item${i}`].descrip);
          setValueAbout(`descripItem${i}PL`, mobObj.pl[`item${i}`].descrip);
        }
        setDataAbout(mobObj);
      })
      .catch((err) => console.log(err));
  };

  const saveWhyMeData = async (data) => {
    const docWhyMe = doc(db, "lang", "whyme");
    const objWhyMePL = {
      item1: {
        title: data.title1PL,
        descrip: data.descrip1PL,
      },
      item2: {
        title: data.title2PL,
        descrip: data.descrip2PL,
      },
      item3: {
        title: data.title3PL,
        descrip: data.descrip3PL,
      },
    };
    const objWhyMeEN = {
      item1: {
        title: data.title1EN,
        descrip: data.descrip1EN,
      },
      item2: {
        title: data.title2EN,
        descrip: data.descrip2EN,
      },
      item3: {
        title: data.title3EN,
        descrip: data.descrip3EN,
      },
    };
    await setDoc(docWhyMe, { pl: objWhyMePL, en: objWhyMeEN })
      .then(() => alert("Зміни збережені"))
      .catch(() => alert("Помилка"));
  };
  const getWhyMeData = async () => {
    const docWhyMe = doc(db, "lang", "whyme");
    await getDoc(docWhyMe)
      .then((doc) => {
        const mobObj = doc.data();
        for (let i = 1; i <= 3; i++) {
          setValueWhyMe(`title${i}PL`, mobObj.pl[`item${i}`].title);
          setValueWhyMe(`title${i}EN`, mobObj.en[`item${i}`].title);
          setValueWhyMe(`descrip${i}PL`, mobObj.pl[`item${i}`].descrip);
          setValueWhyMe(`descrip${i}EN`, mobObj.en[`item${i}`].descrip);
        }
        setDataWhyMe(mobObj);
      })
      .catch(() => alert("Помилка отримання даних"));
  };

  const saveContactData = async (data) => {
    const docContact = doc(db, "lang", "contact");
    const objWhyPL = {
      title: data.titlePL,
      descrip: data.descripPL,
    };
    const objWhyEN = {
      title: data.titleEN,
      descrip: data.descripEN,
    };
    await setDoc(docContact, { pl: objWhyPL, en: objWhyEN })
      .then(() => alert("Зміни збережєні"))
      .catch((err) => alert("Помилка"));
  };
  const getContactData = async () => {
    const docWhy = doc(db, "lang", "contact");
    await getDoc(docWhy)
      .then((doc) => {
        const mobObj = doc.data();
        setValueContact("titlePL", mobObj.pl.title);
        setValueContact("titleEN", mobObj.en.title);
        setValueContact("descripPL", mobObj.pl.descrip);
        setValueContact("descripEN", mobObj.en.descrip);
        setDataContact(mobObj);
      })
      .catch(() => alert("Помилка зчитування даних"));
  };

  const saveMediaData = async (data) => {
    const docMedia = doc(db, "lang", "media");
    const objMediaPL = {
      title: data.titleMediaPL,
      descrip: data.descripMediaPL,
    };
    const objMediaEN = {
      title: data.titleMediaEN,
      descrip: data.descripMediaEN,
    };
    await setDoc(docMedia, { pl: objMediaPL, en: objMediaEN }).then(() =>
      alert("Зміни збережено")
    );
  };
  const getMediaData = async () => {
    const docMedia = doc(db, "lang", "media");
    await getDoc(docMedia)
      .then((doc) => {
        const mobObj = doc.data();
        setValueMedia("titleMediaPL", mobObj.pl.title);
        setValueMedia("titleMediaEN", mobObj.en.title);
        setValueMedia("descripMediaPL", mobObj.pl.descrip);
        setValueMedia("descripMediaEN", mobObj.en.descrip);
        setDataMedia(mobObj);
      })
      .catch(() => alert("Помилка завантаження"));
  };

  const saveQuoteData = async (data) => {
    const docQuote = doc(db, "lang", "quote");
    const objQuotePL = {
      quote: data.quotePL,
      author: data.authorPL,
    };
    const objQuoteEN = {
      quote: data.quoteEN,
      author: data.authorEN,
    };
    await setDoc(docQuote, { pl: objQuotePL, en: objQuoteEN })
      .then(() => alert("Зміни збережено"))
      .catch(() => alert("Помилка"));
  };
  const getQuoteData = async () => {
    const docQuote = doc(db, "lang", "quote");
    await getDoc(docQuote)
      .then((doc) => {
        const objMob = doc.data();
        setValueQuote("quotePL", objMob.pl.quote);
        setValueQuote("quoteEN", objMob.en.quote);
        setValueQuote("authorPL", objMob.pl.author);
        setValueQuote("authorEN", objMob.en.author);
        setDataQuote(objMob);
      })
      .catch(() => console.log("Помилка завантаження"));
  };

  const saveFooterData = async (data) => {
    const docFooter = doc(db, "lang", "footer");
    const objFooterPL = {
        phone: data.phoneFooter,
        addres: data.addresFooterPL,
        email: data.emailFooter,
        workDayDef: data.workDefFooterPL,
        workTimeDef: data.workDefTimeFooter,
        workDayWeek:data.workWeekFooterPL,
        workTimeWeek:data.workWeekTimeFooter
    }
    const objFooterEN = {
        phone: data.phoneFooter,
        addres: data.addresFooterEN,
        email: data.emailFooter,
        workDayDef: data.workDefFooterEN,
        workTimeDef: data.workDefTimeFooter,
        workDayWeek:data.workWeekFooterEN,
        workTimeWeek:data.workWeekTimeFooter
    }
    await setDoc(docFooter, {pl: objFooterPL, en: objFooterEN}).then(()=>alert("Зміни збережено")).catch(()=>alert("Помилка збереження"))
  };
  const getFooterData = async () => {
    const docFooter = doc(db, "lang", "footer");
    await getDoc(docFooter).then((doc)=>{
        const mobObj = doc.data();
        setValueFooter("phoneFooter", mobObj.pl.phone);
        setValueFooter("emailFooter", mobObj.pl.email);
        setValueFooter("addresFooterPL", mobObj.pl.addres);
        setValueFooter("addresFooterEN", mobObj.en.addres);
        setValueFooter("workDefFooterPL", mobObj.pl.workDayDef);
        setValueFooter("workDefFooterEN", mobObj.en.workDayDef);
        setValueFooter("workDefTimeFooter", mobObj.pl.workTimeDef);
        setValueFooter("workWeekFooterPL", mobObj.pl. workDayWeek);
        setValueFooter("workWeekFooterEN", mobObj.en. workDayWeek);
        setValueFooter("workWeekTimeFooter", mobObj.pl. workTimeWeek);
        setDataFooter(mobObj)
    }).catch(()=>console.log("Помилка завантаження"))
  };
  useEffect(() => {
    getHeaderData();
    getAboutData();
    getWhyMeData();
    getContactData();
    getMediaData();
    getQuoteData();
    getFooterData()
  }, []);

  return (
    <div className="admin-main">
      <div className="admin-main__header">
        <div className="admin-main__title">
          <h1>HEADER</h1>
        </div>
        <form
          className="admin-main__form"
          onSubmit={handleHeader(saveHeaderData)}
        >
          <h2>Заголовок (перша лінія)</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Перша лінія заголовку PL"
              type="text"
              {...registerHeader("firstH1TitlePL", {
                required: true,
                minLength: { value: 10 },
              })}
            />
            <input
              placeholder="Перша лінія заголовку EN"
              type="text"
              {...registerHeader("firstH1TitleEN", {
                required: true,
                minLength: { value: 10 },
              })}
            />
          </div>
          <h2>Заголовок (друга лінія)</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Друга лінія заголовку PL"
              type="text"
              {...registerHeader("secondH1TitlePL", {
                required: true,
                minLength: { value: 10 },
              })}
            />
            <input
              placeholder="Друга лінія заголовку EN"
              type="text"
              {...registerHeader("secondH1TitleEN", {
                required: true,
                minLength: { value: 10 },
              })}
            />
          </div>
          <h2>Заголовок H2</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Заголовок H2 PL"
              type="text"
              {...registerHeader("h2TitlePL", {
                required: true,
                minLength: { value: 10 },
              })}
            />
            <input
              placeholder="Заголовок H2 EN"
              type="text"
              {...registerHeader("h2TitleEN", {
                required: true,
                minLength: { value: 10 },
              })}
            />
          </div>
          <h2>Опис</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Опис PL"
              type="text"
              {...registerHeader("descripPL", {
                required: true,
                minLength: { value: 10 },
              })}
            />
            <input
              placeholder="Опис EN"
              type="text"
              {...registerHeader("descripEN", {
                required: true,
                minLength: { value: 10 },
              })}
            />
          </div>
          <h2>Адреса</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Адреса PL"
              type="text"
              {...registerHeader("addresPL", {
                required: true,
                minLength: { value: 10 },
              })}
            />
            <input
              placeholder="Адреса PL"
              type="text"
              {...registerHeader("addresEN", {
                required: true,
                minLength: { value: 10 },
              })}
            />
          </div>
          <h2>Кнопки</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Кнопка візит PL"
              type="text"
              {...registerHeader("btnVisitPL", {
                required: { value: true, message: "Поле не можу бути пусте" },
              })}
            />
            {errorsHeader?.btnVisitPl?.message}
            <input
              placeholder="Кнопка візит EN"
              type="text"
              {...registerHeader("btnVisitEN", {
                required: true,
                minLength: { value: 10 },
              })}
            />
          </div>
          <div className="admin-main__form_row">
            <input
              placeholder="Кнопка більше PL"
              type="text"
              {...registerHeader("btnMorePL", {
                required: true,
                minLength: { value: 10 },
              })}
            />
            <input
              placeholder="Кнопка більше EN"
              type="text"
              {...registerHeader("btnMoreEN", {
                required: true,
                minLength: { value: 10, message: "Мінмум символів" },
              })}
            />
          </div>
          <button disabled={!isValidHeader}> Зберегти зміни</button>
        </form>
      </div>
      <div className="admin-main__about-section">
        <div className="admin-main__title">
          <h1>Про нас</h1>
        </div>

        <form
          className="admin-main__form"
          onSubmit={handleAbout(saveAboutData)}
        >
          <h2>Заголовок</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Заголовок PL"
              type="text"
              {...registerAbout("titleSectionPL", {
                required: {
                  value: true,
                  minLength: { value: 10, message: "GJvbkrf" },
                },
              })}
            />
            <input
              placeholder="Заголовок EN"
              type="text"
              {...registerAbout("titleSectionEN", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
          </div>
          <h2>Опис</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Опис PL"
              type="text"
              {...registerAbout("descripSectionPL", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
            <input
              placeholder="Опис EN"
              type="text"
              {...registerAbout("descripSectionEN", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
          </div>
          <h2>1 елемент</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Заг. 1 елемента PL"
              type="text"
              {...registerAbout("titleItem1PL", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
            <input
              placeholder="Заг. 1 елемента EN"
              type="text"
              {...registerAbout("titleItem1EN", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
          </div>
          <div className="admin-main__form_row">
            <input
              placeholder="Опис. 1 елемента PL"
              type="text"
              {...registerAbout("descripItem1PL", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
            <input
              placeholder="Опис. 1 елемента EN"
              type="text"
              {...registerAbout("descripItem1EN", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
          </div>
          <h2>2 елемент</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Заг. 2 елемента PL"
              type="text"
              {...registerAbout("titleItem2PL", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
            <input
              placeholder="Заг. 2 елемента EN"
              type="text"
              {...registerAbout("titleItem2EN", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
          </div>
          <div className="admin-main__form_row">
            <input
              placeholder="Опис. 2 елемента PL"
              type="text"
              {...registerAbout("descripItem2PL", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
            <input
              placeholder="Опис. 2 елемента EN"
              type="text"
              {...registerAbout("descripItem2EN", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
          </div>
          <h2>3 елемент</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Заг. 3 елемента PL"
              type="text"
              {...registerAbout("titleItem3PL", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
            <input
              placeholder="Заг. 3 елемента EN"
              type="text"
              {...registerAbout("titleItem3EN", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
          </div>
          <div className="admin-main__form_row">
            <input
              placeholder="Опис. 3 елемента PL"
              type="text"
              {...registerAbout("descripItem3PL", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
            <input
              placeholder="Опис. 3 елемента EN"
              type="text"
              {...registerAbout("descripItem3EN", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
          </div>
          <h2>4 елемент</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Заг. 4 елемента PL"
              type="text"
              {...registerAbout("titleItem4PL", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
            <input
              placeholder="Заг. 4 елемента EN"
              type="text"
              {...registerAbout("titleItem4EN", {
                required: { value: true, minLength: { value: 10 } },
              })}
            />
          </div>
          <div className="admin-main__form_row">
            <input
              placeholder="Опис. 4 елемента PL"
              type="text"
              {...registerAbout("descripItem4PL", {
                required: { value: true, message: "Помилка" },
                minLength: { value: 10 },
              })}
            />
            <input
              placeholder="Опис. 4 елемента EN"
              type="text"
              {...registerAbout("descripItem4EN", {
                required: { value: true },
                minLength: { value: 10 },
              })}
            />
          </div>
          <button disabled={!isValidAbout}>Зберегти зміни</button>
        </form>
      </div>
      {/* WHY ME */}
      <div className="admin-main__why-me-section">
        <div className="admin-main__title">
          <h1>Чому ми</h1>
        </div>

        <form
          onSubmit={handleWhyMe(saveWhyMeData)}
          className="admin-main__form"
        >
          <h2>Перша секція</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Заголовок-1 PL"
              type="text"
              {...registerWhyMe("title1PL", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
            <input
              placeholder="Заголовок-1 EN"
              type="text"
              {...registerWhyMe("title1EN", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
          </div>
          <div className="admin-main__form_row">
            <input
              placeholder="Опис-1 PL"
              type="text"
              {...registerWhyMe("descrip1PL", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
            <input
              placeholder="Опис-1 EN"
              type="text"
              {...registerWhyMe("descrip1EN", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
          </div>
          <h2>Друга секція</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Заголовок-2 PL"
              type="text"
              {...registerWhyMe("title2PL", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
            <input
              placeholder="Заголовок-2 EN"
              type="text"
              {...registerWhyMe("title2EN", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
          </div>
          <div className="admin-main__form_row">
            <input
              placeholder="Опис-2 PL"
              type="text"
              {...registerWhyMe("descrip2PL", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
            <input
              placeholder="Опис-2 EN"
              type="text"
              {...registerWhyMe("descrip2EN", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
          </div>
          <h2>Третя секція</h2>
          <div className="admin-main__form_row">
            <input
              placeholder="Заголовок-3 PL"
              type="text"
              {...registerWhyMe("title3PL", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
            <input
              placeholder="Заголовок-3 EN"
              type="text"
              {...registerWhyMe("title3EN", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
          </div>
          <div className="admin-main__form_row">
            <input
              placeholder="Опис-3 PL"
              type="text"
              {...registerWhyMe("descrip3PL", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
            <input
              placeholder="Опис-3 EN"
              type="text"
              {...registerWhyMe("descrip3EN", {
                required: {
                  value: true,
                  message: "Поле обов'язкове до заповнення",
                },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
          </div>
          <button disabled={!isValidWhyMe}>Зберегти зміни</button>
        </form>
      </div>
      {/* THREE SECTION */}
      <div className="admin-main__three-section">
        {/* QUOTE */}
        <div>
          <div className="admin-main__title">
            <h1>Секція з цитатою</h1>
          </div>

          <form
            onSubmit={handleQuote(saveQuoteData)}
            className="admin-main__form"
          >
            <h2>Цитата</h2>
            <div className="admin-main__form_row">
              <input
                placeholder="Цитата PL"
                type="text"
                {...registerQuote("quotePL", {
                  required: {
                    value: true,
                    message: "Поле не може бути пустим",
                  },
                  minLength: { value: 10, message: "Мінімум 10 символів" },
                })}
              />
              <input
                placeholder="Цитата EN"
                type="text"
                {...registerQuote("quoteEN", {
                  required: {
                    value: true,
                    message: "Поле не може бути пустим",
                  },
                  minLength: { value: 10, message: "Мінімум 10 символів" },
                })}
              />
            </div>
            <h2>Автор</h2>
            <div className="admin-main__form_row">
              <input
                placeholder="Автор PL"
                type="text"
                {...registerQuote("authorPL", {
                  required: {
                    value: true,
                    message: "Поле не може бути пустим",
                  },
                  minLength: { value: 10, message: "Мінімум 10 символів" },
                })}
              />
              <input
                placeholder="Автор EN"
                type="text"
                {...registerQuote("authorEN", {
                  required: {
                    value: true,
                    message: "Поле не може бути пустим",
                  },
                  minLength: { value: 10, message: "Мінімум 10 символів" },
                })}
              />
            </div>
            <button disabled={!isValidQuote}>Зберегти зміни</button>
          </form>
        </div>
        {/* MEDIA */}
        <div>
          <div className="admin-main__title">
            <h1>Ми в медіах</h1>
          </div>

          <form
            onSubmit={handleMedia(saveMediaData)}
            className="admin-main__form"
          >
            <h2>Заголовок</h2>
            <div className="admin-main__form_row">
              <input
                placeholder="Заголовок PL"
                type="text"
                {...registerMedia("titleMediaPL", {
                  required: { value: true, message: "Поле не може бути пусте" },
                  minLength: { value: 10, message: "Мінімум 10 символів" },
                })}
              />
              <input
                placeholder="Заголовок EN"
                type="text"
                {...registerMedia("titleMediaEN", {
                  required: { value: true, message: "Поле не може бути пусте" },
                  minLength: { value: 10, message: "Мінімум 10 символів" },
                })}
              />
            </div>
            <h2>Опис</h2>
            <div className="admin-main__form_row">
              <input
                placeholder="Опис PL"
                type="text"
                {...registerMedia("descripMediaPL", {
                  required: { value: true, message: "Поле не може бути пусте" },
                  minLength: { value: 10, message: "Мінімум 10 символів" },
                })}
              />
              <input
                placeholder="Опис EN"
                type="text"
                {...registerMedia("descripMediaEN", {
                  required: { value: true, message: "Поле не може бути пусте" },
                  minLength: { value: 10, message: "Мінімум 10 символів" },
                })}
              />
            </div>
            <button disabled={!isValidMedia}>Зберегти зміни</button>
          </form>
        </div>
        {/* CONTACT */}
        <div>
          <div className="admin-main__title">
            <h1>Контакти</h1>
          </div>

          <form
            onSubmit={handleContact(saveContactData)}
            className="admin-main__form"
          >
            <h2>Заголовок</h2>
            <div className="admin-main__form_row">
              <input
                placeholder="Заголовок PL"
                type="text"
                {...registerContact("titlePL", {
                  required: {
                    value: true,
                    message: "Поле не можу бути пустим",
                  },
                  minLength: {
                    value: true,
                    message: "Мінімум 10 символів",
                  },
                })}
              />
              <input
                placeholder="Заголовок EN"
                type="text"
                {...registerContact("titleEN", {
                  required: {
                    value: true,
                    message: "Поле не можу бути пустим",
                  },
                  minLength: {
                    value: true,
                    message: "Мінімум 10 символів",
                  },
                })}
              />
            </div>
            <h2>Опис</h2>
            <div className="admin-main__form_row">
              <input
                placeholder="Опис PL"
                type="text"
                {...registerContact("descripPL", {
                  required: {
                    value: true,
                    message: "Поле не можу бути пустим",
                  },
                  minLength: {
                    value: true,
                    message: "Мінімум 10 символів",
                  },
                })}
              />
              <input
                placeholder="Опис EN"
                type="text"
                {...registerContact("descripEN", {
                  required: {
                    value: true,
                    message: "Поле не можу бути пустим",
                  },
                  minLength: {
                    value: true,
                    message: "Мінімум 10 символів",
                  },
                })}
              />
            </div>
            <button disabled={!isValidContact}>Зберегти зміни</button>
          </form>
        </div>
      </div>
      <div className="admin-main__footer-section">
        <div className="admin-main__title">
          <h1>FOOTER</h1>
        </div>

        <form
          onSubmit={handleFooter(saveFooterData)}
          className="admin-main__form"
        >
          <h2>Номер телефону</h2>
          <div className="admin-main__form_row">
            <input
              type="number"
              placeholder="Номер телефону"
              {...registerFooter("phoneFooter", {
                required: { value: true, message: "Поле не можу бути пустим" },
                minLength: { value: 9, message: "Мінімум 9 символів" },
                
              })}
            />
          </div>
          <h2>Email</h2>
          <div className="admin-main__form_row">
            <input
              type="email"
              placeholder="Email"
              {...registerFooter("emailFooter", {
                required: { value: true, message: "Поле не можу бути пустим" },
                minLength: { value: 5, message: "Мінімум 5 символів" },
              })}
            />
          </div>
          <h2>Адреса</h2>
          <div className="admin-main__form_row">
            <input
              type="text"
              placeholder="Адреса PL"
              {...registerFooter("addresFooterPL", {
                required: { value: true, message: "Поле не можу бути пустим" },
                minLength: { value: 10, message: "Мінімум 5 символів" },
              })}
            />
            <input
              type="text"
              placeholder="Адреса EN"
              {...registerFooter("addresFooterEN", {
                required: { value: true, message: "Поле не можу бути пустим" },
                minLength: { value: 10, message: "Мінімум 10 символів" },
              })}
            />
          </div>
          <h2>Час роботи у будні</h2>
          <div className="admin-main__form_row">
            <input
              type="text"
              placeholder="Робочі дні PL"
              {...registerFooter("workDefFooterPL", {
                required: { value: true, message: "Поле не можу бути пустим" },
                minLength: { value: 5, message: "Мінімум 5 символів" },
              })}
            />
            <input
              type="text"
              placeholder="Робочі дні EN"
              {...registerFooter("workDefFooterEN", {
                required: { value: true, message: "Поле не можу бути пустим" },
                minLength: { value: 5, message: "Мінімум 5 символів" },
              })}
            />
            <input
              type="text"
              placeholder="Робочий час"
              {...registerFooter("workDefTimeFooter", {
                required: { value: true, message: "Поле не можу бути пустим" },
                minLength: { value: 5, message: "Мінімум 5 символів" },
              })}
            />
          </div>
          <h2>Час роботи у вихідні</h2>
          <div className="admin-main__form_row">
            <input
              type="text"
              placeholder="Робочі вихідні PL"
              {...registerFooter("workWeekFooterPL", {
                required: { value: true, message: "Поле не можу бути пустим" },
                minLength: { value: 5, message: "Мінімум 5 символів" },
              })}
            />
            <input
              type="text"
              placeholder="Робочі вихідні EN"
              {...registerFooter("workWeekFooterEN", {
                required: { value: true, message: "Поле не можу бути пустим" },
                minLength: { value: 5, message: "Мінімум 5 символів" },
              })}
            />
            <input
              type="text"
              placeholder="Робочий час"
              {...registerFooter("workWeekTimeFooter", {
                required: { value: true, message: "Поле не можу бути пустим" },
                minLength: { value: 5, message: "Мінімум 10 символів" },
              })}
            />
          </div>
          <button disabled={!isValidFooter}>Зберегти зміни</button>
        </form>
      </div>
      <div className="admin-main__seo-section">
        <div className="admin-main__title">
          <h1>SEO</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
