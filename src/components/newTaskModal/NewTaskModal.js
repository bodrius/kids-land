import React, { useEffect, useState, useRef } from "react";
import styles from "./NewTaskModal.module.css";
import { days } from '../main/days';

const initialState = {
  days:[
    {
      "date": 1587410790649,
      "isActive": false,
      "name": "monday",
      "title": "Пн",
      "isDone": false,
      "_id": "00cf7e90-8406-11ea-a130-fb50e596d457"
    },
    {
      "date": 1587497190649,
      "isActive": false,
      "name": "tuesday",
      "title": "Вт",
      "isDone": false,
      "_id": "00cf7e91-8406-11ea-a130-fb50e596d457"
    },
    {
      "date": 1587583590649,
      "isActive": false,
      "name": "wednesday",
      "title": "Ср",
      "isDone": false,
      "_id": "00cf7e92-8406-11ea-a130-fb50e596d457"
    },
    {
      "date": 1587669990649,
      "isActive": false,
      "name": "thursday",
      "title": "Чт",
      "isDone": false,
      "_id": "00cf7e93-8406-11ea-a130-fb50e596d457"
    },
    {
      "date": 1587756390649,
      "isActive": false,
      "name": "friday",
      "title": "Пт",
      "isDone": false,
      "_id": "00cf7e94-8406-11ea-a130-fb50e596d457"
    },
    {
      "date": 1587842790649,
      "isActive": false,
      "name": "Saturday",
      "title": "Сб",
      "isDone": false,
      "_id": "00cf7e95-8406-11ea-a130-fb50e596d457"
    },
    {
      "date": 1587929190649,
      "isActive": false,
      "name": "Sunday",
      "title": "Нд",
      "isDone": false,
      "_id": "00cf7e96-8406-11ea-a130-fb50e596d457"
    }
  ],
  _id: Date.now(),
  title: "",
  imgName: "vacuum",
  taskPoints: ""
};

export const NewTaskModal = ({ onClose, onHandleCollectCustomTask }) => {
  const backdropRef = useRef(null);
  const [state, setState] = useState(initialState);

  const keyDownHandler = e => {
    if (e.code === "Escape") {
      onClose();
    }

    if (e.target !== e.currentTarget) {
      return;
    }
    onClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  });

  const handlerSubmitForm = e => {
    onHandleCollectCustomTask(state)
    console.log("object", state);
    e.preventDefault();
    onClose();
  };

  return (
    <div ref={backdropRef} className={styles.backdrop} onClick={keyDownHandler}>
      <div className={styles.content}>
        <div className={styles.image}>
          <button className={styles.buttonClose} onClick={onClose}>
            X
          </button>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handlerSubmitForm}>
            <label className={styles.inputLabel}></label>
            <input
              className={styles.input}
              onChange={e => setState({ ...state, title: e.target.value })}
              type="text"
              required
              pattern="^[A-Za-zА-Яа-яЁё\s]+$"
              name="title"
              placeholder="Додати завдання"
              value={state.title}
            />
            <label className={styles.inputLabel}></label>
            <input
              className={styles.input}
              onChange={e =>
                setState({ ...state, taskPoints: Number(e.target.value) })
              }
              type="number"
              min="1"
              name="taskPoints"
              placeholder="Додати бали"
              required
              value={state.taskPoints}
            />
            <button className={styles.buttonSubmit} type="submit">
              Ок
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
