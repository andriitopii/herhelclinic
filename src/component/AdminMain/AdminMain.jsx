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
    await setDoc(docHeader, { pl: headerObjPL, en: headerObjEN }).then(()=>alert("Зміни збережено")).catch(()=>alert("Помилка збереження"));
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
        item1: {title: data.titleItem1PL, descrip: data.descripItem1PL},
        item2: {title: data.titleItem2PL, descrip: data.descripItem2PL},
        item3: {title: data.titleItem3PL, descrip: data.descripItem3PL},
        item4: {title: data.titleItem4PL, descrip: data.descripItem4PL},
    }
    const objAboutEN = {
        titleSection: data.titleSectionEN,
        descripSection: data.descripSectionEN,
        item1: {title: data.titleItem1EN, descrip: data.descripItem1EN},
        item2: {title: data.titleItem2EN, descrip: data.descripItem2EN},
        item3: {title: data.titleItem3EN, descrip: data.descripItem3EN},
        item4: {title: data.titleItem4EN, descrip: data.descripItem4EN},
    }
    await setDoc(docAbout, {pl: objAboutPL, en: objAboutEN}).then(()=>{
        alert("Зміни збережені")
    }).catch(()=>{
        alert("Виникла помилка")
    })
    console.log(objAboutEN, objAboutPL);
  };
  const getAboutData = async () => {
    const docAbout = doc(db, "lang", "about");
    await getDoc(docAbout).then((doc)=>{
        const mobObj = doc.data();
        setValueAbout("titleSectionEN",mobObj.en.titleSection);
        setValueAbout("titleSectionPL",mobObj.pl.titleSection);
        setValueAbout("descripSectionPL",mobObj.pl.descripSection);
        setValueAbout("descripSectionEN",mobObj.en.descripSection);
        setValueAbout("descripSectionEN",mobObj.en.descripSection);
        for(let i = 1; i <=4; i++){
            setValueAbout(`titleItem${i}PL`,mobObj.pl[`item${i}`].title);
             setValueAbout(`titleItem${i}EN`,mobObj.en[`item${i}`].title);
                setValueAbout(`descripItem${i}EN`,mobObj.en[`item${i}`].descrip);
             setValueAbout(`descripItem${i}PL`,mobObj.pl[`item${i}`].descrip);
        }
        setDataAbout(mobObj);
        
    }).catch((err)=>console.log(err))
  }
  useEffect(() => {
    getHeaderData();
    getAboutData()
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
        ><h2>Заголовок (перша лінія)</h2>
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
                required: { value: true, minLength: { value: 10, message: "GJvbkrf" } },
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
                required: { value: true, message: "Помилка"}, minLength: { value: 10 }
              })}
            />
            <input
              placeholder="Опис. 4 елемента EN"
              type="text"
              {...registerAbout("descripItem4EN", {
                required: { value: true}, minLength: { value: 10 } 
              })}
            />
          </div>
          <button disabled={!isValidAbout}>Зберегти зміни</button>
        </form>
      </div>
      <div className="admin-main__why-me-section">
        <div className="admin-main__title">
          <h1>Чому ми</h1>
        </div>
        <form>
          <input placeholder="Цитата PL" type="text" />
          <input placeholder="Автор PL" type="text" />
        </form>
      </div>
      <div className="admin-main__three-section">
        <div>
          <div className="admin-main__title">
            <h1>Секція з цитатою</h1>
          </div>

          <form className="admin-main__form">
            <input placeholder="Цитата PL" type="text" />
            <input placeholder="Автор PL" type="text" />
            <input placeholder="Цитата EN" type="text" />
            <input placeholder="Автор EN" type="text" />
          </form>
        </div>
        <div>
          <div className="admin-main__title">
            <h1>Ми в медіах</h1>
          </div>

          <form className="admin-main__form">
            <input placeholder="Заголовок PL" type="text" />
            <input placeholder="Заголовок EN" type="text" />
            <input placeholder="Опис PL" type="text" />
            <input placeholder="Опис EN" type="text" />
          </form>
        </div>
        <div>
          <div className="admin-main__title">
            <h1>Контакти</h1>
          </div>

          <form className="admin-main__form">
            <input placeholder="Заголовок PL" type="text" />
            <input placeholder="Заголовок EN" type="text" />
            <input placeholder="Опис PL" type="text" />
            <input placeholder="Опис EN" type="text" />
          </form>
        </div>
      </div>
      <div className="admin-main__footer-section"></div>
    </div>
  );
};

export default AdminMain;
