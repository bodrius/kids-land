import React, { useEffect, useState, useRef } from "react";
import styles from "./NewTaskModal.module.css";

const initialState = {
  title: "",
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
    e.preventDefault();
    onClose();
  };

  return (
    <div ref={backdropRef} className={styles.backdrop} onClick={keyDownHandler}>
      <div className={styles.content}>
        <div className={styles.image}>
          <button className={styles.buttonClose} onClick={onClose}>
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
