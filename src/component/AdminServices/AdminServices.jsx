import { useForm } from "react-hook-form";
import "./AdminServices.scss";
const AdminServices = () => {
  const {
    handleSubmit,
    reset,
    formState: { errors, isValid },
    register,
  } = useForm({ mode: "onChange" });
  const {
    handleSubmit: handleSubmit1,
    reset: reset1,
    formState: { errors: errors1, isValid: isValid1 },
    register: register1,
  } = useForm({ mode: "onChange" });

  const addService = async (data) => {
    console.log(data);
  };

  const saveService = async (data) => {
    console.log();
  };
  return (
    <div className="admin-services">
      <div className="admin-services__type">
        <form onSubmit={handleSubmit(addService)}>
          <input
            type="text"
            {...register("nameService", {
              required: { value: true },
              minLength: { value: 10 },
            })}
          />
          <button disabled={!isValid}>Додати послугу</button>
        </form>
        <ul>
          <li>
            <button></button>
          </li>
        </ul>
      </div>
      <div className="admin-services__content">
        <form className="admin-services__content_form" onSubmit={handleSubmit1(saveService)}>
          <input
            type="text"
            placeholder="Назва послуги"
            {...register1("nameService")}
          />
          <div className="admin-services__content_form-row">
            <input
              type="text"
              placeholder="Заголовок PL"
              {...register1("titleServicePl")}
            />{" "}
            <input
              type="text"
              placeholder="Заголовок EN"
              {...register1("titleServiceEn")}
            />
          </div>
          <div className="admin-services__content_form-row">
            <input
              type="text"
              placeholder="Опис PL"
              {...register1("pServicePl")}
            />{" "}
            <input
              type="text"
              placeholder="Опис EN"
              {...register1("pServiceEn")}
            />
          </div>
          <div className="admin-services__content_form-row">
            <input
              type="text"
              placeholder="Послуга PL"
              {...register1("itemServicePl")}
            />{" "}
            <input
              type="text"
              placeholder="Послуга EN"
              {...register1("itemServiceEn")}
            />
            <input
              type="number"
              placeholder="Ціна"
              {...register1("priceService")}
            />

          </div>
          <button disabled={!isValid1}>Зберегти зміни</button>
        </form>
      </div>
    </div>
  );
};

export default AdminServices;
