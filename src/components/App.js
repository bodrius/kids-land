import React, { useEffect, useRef }  from 'react';

import styles from './App.module.css';


export const App = () => {
  const backdropRef = useRef(null);

  const keyDownHandler = e => {
    if (e.code !== 'Escape') {
      return;
    }

    // onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
      <div ref={backdropRef} className={styles.backdrop}>
      <div className={styles.content}>
      <div className={styles.image}>
      {/* <img src="./img/1.jpg" alt="robot"/> */}
        <button className={styles.buttonClose}> X </button>
        </div>
        <div className={styles.formContainer}>
        <form className={styles.form} >
          <label className={styles.inputLabel}>
            <input
              className={styles.input}
              // onChange={this.handlerChangeInput}
              type="text"
              required
              pattern="^[A-Za-zА-Яа-яЁё\s]+$"
              name="name"
              placeholder="Додати завдання"
              // value={name}
            ></input>
          </label>
          <label className={styles.inputLabel}>  </label>
          <input
            className={styles.input}
            // onChange={this.handlerChangeInput}
            type="text"
            name="number"
            s
            placeholder="Додати бали"
            required
            pattern="[0-9]{3}-[0-9]{3}"
            // value={number}
          ></input>
          <button className={styles.buttonSubmit} type="submit">
            Ок
          </button>
        </form>
        </div>
      </div>
      </div>
    );
  }


