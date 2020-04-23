import React, { useEffect, useState, useRef } from "react";

import styles from "./NewTaskModal.module.css";

const initialState = {
  task: "",
  points: ""
};

export const NewTaskModal = ({ onClose, onData }) => {
  const backdropRef = useRef(null);
  const [state, setState] = useState(initialState);

  const keyDownHandler = e => {
    if (e.code !== "Escape") {
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
    // onData(state)
    e.preventDefault();
    console.log("object", state);
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
              onChange={e => setState({ ...state, task: e.target.value })}
              type="text"
              required
              pattern="^[A-Za-zА-Яа-яЁё\s]+$"
              name="task"
              placeholder="Додати завдання"
              value={state.task}
            />
            <label className={styles.inputLabel}></label>
            <input
              className={styles.input}
              onChange={e => setState({ ...state, points: e.target.value })}
              type="text"
              name="points"
              placeholder="Додати бали (від 1 до 9)"
              required
              pattern="[0-9]"
              value={state.points}
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

