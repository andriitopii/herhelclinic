import { useForm } from "react-hook-form";
import "./AdminServices.scss";
import { useState } from "react";
import { app } from "../../bd/firebase";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";
const ItemEditServiceCurrent = ({ data, regist }) => {
  const length = data.pl.item.length;
  const [arrItem, setArrItem] = useState([]);
 
  

  useEffect(() => {
    const mobArr = [];
    for (let i = 0; i < length; i++) {
    const namePl = Object.keys(data.pl.item[i])
    const nameEn= Object.keys(data.en.item[i])
    
      mobArr.push(
        <>
          <input type="text" placeholder={namePl} {...regist(`item${i + 1}PL`)} />{" "}
          <input type="text" placeholder={nameEn} {...regist(`item${i + 1}EN`)} />
          <input type="number" placeholder={Object.values(data.pl.item[i])[0]} {...regist(`item${i + 1}Price`)} />
        </>
      );
    }
   
    setArrItem(mobArr)
  },[data]);
  return <>{arrItem.map((item)=><div key={Math.random()}>{item}</div>)}</>;
};
const ItemEditService = ({ data }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });
  const updateDataService = async (data) => {
    
  };

  return (
    <>
      {data === null ? (
        <h1>Завантаження</h1>
      ) : (
        <form
          onSubmit={handleSubmit(updateDataService)}
          className="admin-services__content_form"
        >
          <div className="admin-services__content_form-row">
            <h2>Назва послуга</h2>
          </div>
          <div className="admin-services__content_form-row">
            <label>
              PL
              <input
                type="text"
                placeholder={data.pl.nameService}
                {...register("nameServicePL", { required: { value: true } })}
              />
            </label>
            <label>
              EN
              <input
                type="text"
                placeholder={data.en.nameService}
                {...register("nameServiceEN", { required: { value: true } })}
              />
            </label>
          </div>
          <div className="admin-services__content_form-row">
            <h2>Заголовок послуги</h2>
          </div>
          <div className="admin-services__content_form-row">
            <label>
              PL
              <input
                type="text"
                placeholder={data.pl.titleService}
                {...register("titleServicePL", { required: { value: true } })}
              />
            </label>
            <label>
              EN
              <input
                type="text"
                placeholder={data.en.titleService}
                {...register("titleServiceEN", { required: { value: true } })}
              />
            </label>
          </div>
          <div className="admin-services__content_form-row">
            <h2>Опис послуги</h2>
          </div>
          <div className="admin-services__content_form-row">
            <label>
              PL
              <input
                type="text"
                placeholder={data.pl.pService}
                {...register("pServicePL", { required: { value: true } })}
              />
            </label>
            <label>
              EN
              <input
                type="text"
                placeholder={data.en.pService}
                {...register("pServiceEN", { required: { value: true } })}
              />
            </label>
          </div>
          <div className="admin-services__content_form-row">
            <h2>Ціни та назва послуги</h2>
          </div>
          <div className="admin-services__content_form-column">
            <ItemEditServiceCurrent data={data} regist={register} />
          </div>
          <div className="admin-services__content_form-row">
            <button disabled={!isValid}>Записати зміни</button>
            <button type="button">Видалити</button>
          </div>
        </form>
      )}
    </>
  );
};

const ItemService = ({ regist, count }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Послуга PL"
        {...regist(`item${count}PL`)}
      />{" "}
      <input
        type="text"
        placeholder="Послуга EN"
        {...regist(`item${count}EN`)}
      />
      <input
        type="number"
        placeholder="Ціна"
        {...regist(`item${count}Price`)}
      />
    </>
  );
};
const AdminServices = () => {
  const {
    handleSubmit: handleSubmit1,
    reset: reset1,
    formState: { errors: errors1, isValid: isValid1 },
    register: register1,
  } = useForm({ mode: "onChange" });
  const [countItem, setCountItem] = useState(1);
  const [addAndEditService, setAddAndEditService] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [dataService, setDataService] = useState([]);
  const [stateFormAdd, setStateFormAdd] = useState(null);
  const [itemService, setItemService] = useState([
    <ItemService regist={register1} count={1} />,
  ]);
  const db = getFirestore(app);

  const saveService = async (data) => {
    setStateFormAdd(false);
    const objPL = {
      nameService: data.nameServicePL,
      titleService: data.titleServicePL,
      pService: data.pServicePL,
      item: [],
    };
    for (let i = 1; i <= countItem; i++) {
      const mobObj = {};
      mobObj[data[`item${i}PL`]] = data[`item${i}Price`];
      objPL.item.push(mobObj);
    }

    const objEN = {
      nameService: data.nameServiceEN,
      titleService: data.titleServiceEN,
      pService: data.pServiceEN,
      item: [],
    };
    for (let i = 1; i <= countItem; i++) {
      const mobObj = {};
      mobObj[data[`item${i}EN`]] = data[`item${i}Price`];

      objEN.item.push(mobObj);
    }

    await addDoc(collection(db, "service"), { pl: objPL, en: objEN }).then(
      () => {
        setStateFormAdd(true);
      }
    );

    reset1();
  };

  const addItem = () => {
    setItemService([
      ...itemService,
      <ItemService regist={register1} count={countItem + 1} />,
    ]);
    setCountItem(countItem + 1);
  };

  const deleteItem = () => {
    setItemService(itemService.filter((item) => item.props.count != countItem));
    setCountItem(countItem - 1);
  };
  const getServiceData = async () => {
    const dataRef = await getDocs(collection(db, "service"));
    const mobArr = [];
    dataRef.forEach((doc) => {
      const mobObj = doc.data();
      (mobObj.id = doc.id), mobArr.push(mobObj);
    });
    setDataService(mobArr);
    setItemId(mobArr[0]);
  };
  const showServiceEdit = async (id) => {
    setAddAndEditService(false);
    setItemId(dataService.filter((item) => item.id === id)[0]);
  };
  useEffect(() => {
    getServiceData();
  }, []);

  return (
    <div className="admin-services">
      <div className="admin-services__type">
        <button
          className="admin-services__type_add-btn"
          onClick={() => setAddAndEditService(true)}
        >
          Додати послугу
        </button>

        <ul>
          {dataService.map((item) => (
            <li key={item.id}>
              <button
                className={itemId.id === item.id ? "admin-active-btn" : ""}
                onClick={() => showServiceEdit(item.id)}
              >
                {item.pl.nameService}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="admin-services__content">
        {addAndEditService ? (
          <form
            className="admin-services__content_form"
            onSubmit={handleSubmit1(saveService)}
          >
            <div className="admin-services__content_form-row">
              <h2>Дайте назву категорії послуги</h2>
            </div>
            <div className="admin-services__content_form-row">
              <input
                type="text"
                placeholder="Назва послуги PL"
                {...register1("nameServicePL")}
              />
              <input
                type="text"
                placeholder="Назва послуги EN"
                {...register1("nameServiceEN")}
              />
            </div>
            <div className="admin-services__content_form-row">
              <h2>Тут можна додати короткий заголовок або фразу тригер</h2>
            </div>
            <div className="admin-services__content_form-row">
              <input
                type="text"
                placeholder="Заголовок PL"
                {...register1("titleServicePL")}
              />{" "}
              <input
                type="text"
                placeholder="Заголовок EN"
                {...register1("titleServiceEN")}
              />
            </div>
            <div className="admin-services__content_form-row">
              <h2>Опишіть свою послугу</h2>
            </div>
            <div className="admin-services__content_form-row">
              <input
                type="text"
                placeholder="Опис PL"
                {...register1("pServicePL")}
              />{" "}
              <input
                type="text"
                placeholder="Опис EN"
                {...register1("pServiceEN")}
              />
            </div>
            <div className="admin-services__content_form-row">
              <h2>Додайте конкретну назву послуги та її ціну</h2>
              <button type="button" onClick={() => deleteItem()}>
                -
              </button>
              <button type="button" onClick={() => addItem()}>
                +
              </button>
            </div>

            <div className="admin-services__content_form-column">
              {itemService.map((item) => (
                <div key={item.props.count}>{item}</div>
              ))}
            </div>
            <div className="admin-services__content_form-row">
              <button disabled={!isValid1}>
                {stateFormAdd === null && "Зберегти зміни"}
                {stateFormAdd === true && "Зміни зьережено"}
                {stateFormAdd === false && "Йде збереження"}
              </button>
            </div>
          </form>
        ) : (
          <ItemEditService data={itemId} />
        )}
      </div>
    </div>
  );
};

export default AdminServices;
