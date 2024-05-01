import { useForm } from "react-hook-form";
import { getFirestore, addDoc, getDoc, deleteDoc, collection } from "firebase/firestore";
import { app } from "../../bd/firebase";
import "./AdminMedia.scss";
const AdminMedia = () => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    reset,
    register,
  } = useForm({ mode: "onChange" });
  const db = getFirestore(app);
  const addMedia = async (data) => {
    await addDoc(collection(db, "media"), {
        img: data.urlImg,
        url: data.urlPost,
        title: data.title,
    })
    reset();
  }
  return (
    <div className="admin-media">
      <div className="admin-media__add">
        <h1>Додайте згадки про вас в медіа</h1>
        <p>
          В цьому розділі ви зможете керувати Ваши згадками в ЗМІ - легко і
          просто
        </p>
        <form onSubmit={handleSubmit(addMedia)}>
            <input type="text" placeholder="Посилання на зображення" {...register("urlImg", {required: {value: true}})}></input>
            <input type="text" placeholder="Посилання на статтю" {...register("urlPost", {required: {value: true}})}></input>
            <input type="text" placeholder="Короткий заголовок"  {...register("title", {required: {value: true}})}></input>
            <button disabled={!isValid}>Додати</button>
        </form>
      </div>
      <div className="admin-media__content">

      </div>
    </div>
  );
};

export default AdminMedia;
