import "./AdminMessage.scss";
import { app } from "../../bd/firebase";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import DoneSvg from "../Icon/DoneSvg";
import DoneAllSvg from "../Icon/DoneAllSvg";
const PopUp = ({ update, message, name, status, time, data, timeId }) => {
  const [statusRead, setStatusRead] = useState(status);
  const db = getFirestore(app);
  const updateReed = async (id) => {
    if (statusRead) {
      return;
    } else {
      setStatusRead(true);
      const docRef = doc(db, "message", data.phone);
      await getDoc(docRef)
        .then((doc) => {
          const arrToUpdate = doc.data().message;
          const indexToUpdate = arrToUpdate.findIndex(
            (item) => item.time.seconds === id
          );
          arrToUpdate[indexToUpdate].status = true;
          return updateDoc(docRef, {
            message: arrToUpdate,
          });
        })
        .then(() => update());
    }
  };
  return (
    <div
      onClick={(e) => updateReed(timeId)}
      className="message-block__message_pop-up"
    >
      <h4>{name}</h4>
      <p>{message}</p>
      <div className="message-block__message_date-status">
        <span>{time}</span>
        <span>{statusRead ? <DoneAllSvg/> : <DoneSvg/>}</span>
      </div>
    </div>
  );
};
const BlockMessage = ({ getNewData, data }) => {
  return (
    <div className="admin-message__message-block message-block">
      <div className="message-block__header">
        <h1>{data.name}</h1>
        <ul>
            <li><h3>+48{data.phone}</h3></li>
            <li><h3>{data.email}</h3></li>
        </ul>
        
      </div>
      <div className="message-block__message">
        <ul>
          {data.message.map((item) => (
            <li key={item?.time?.seconds}>
              <PopUp
                update={getNewData}
                timeId={item.time.seconds}
                data={data}
                message={item.message}
                name={data.name}
                status={item.status}
                time={item.time
                  .toDate()
                  .toString()
                  .split(" ")
                  .splice(0, 5)
                  .join(" ")}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="message-block__action">
        <a href={`tel:+48${data.phone}`}>Зателефонувати</a>
        <a href={`mailto:${data.email}`}>Надіслати лист</a>
      </div>
    </div>
  );
};
const AdminMessage = () => {
  const [dataMessage, setDataMessage] = useState(null);
  const [stateBlockMessage, setStateBlockMessage] = useState(false);
  const [blockMessageData, setBlockMessageData] = useState(null);

  const db = getFirestore(app);
  const getDataMessage = async () => {
    const colect = collection(db, "message");
    const queryData = await getDocs(colect);
    const mobArr = [];
    queryData.forEach((doc) => {
      mobArr.push(doc.data());
    });
    setDataMessage(mobArr);
  };
  const showMessage = (data) => {
    setStateBlockMessage(true);
    setBlockMessageData(data);
  };
  const unReadMessage = (arr) => {
    let count = 0;
    arr.forEach((item) => {
      if (item.status === false) {
        count++;
      }
    });
    return count;
  };
  useEffect(() => {
    getDataMessage();
  }, []);

  return (
    <div className="admin-message">
      <div className="admin-message__user">
        
        {dataMessage?.map((item) => (
          <button
            key={item?.time?.seconds}
            type="button"
            className={`admin-message__user_btn ${blockMessageData?.phone === item.phone && "admin-message__user_btn--active"}`}
            onClick={() => showMessage(item)}
          >
            <strong>
              {item.name}/{item.phone}
            </strong>
            {unReadMessage(item.message) != 0 && (
              <span>{`${unReadMessage(item.message)} `}</span>
            )}
          </button>
        ))}
      </div>
      <div className="admin-message__message">
        {stateBlockMessage === false && <div className="admin-message__message_firstDisplay"><h1>Оберіть клієнта праворуч</h1></div>}
        {stateBlockMessage === true && (
          <BlockMessage getNewData={getDataMessage} data={blockMessageData} />
        )}
      </div>
    </div>
  );
};

export default AdminMessage;
