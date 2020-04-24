import React, { useState, useEffect, useRef } from "react";
import styles from "./modalLogout.module.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/auth/operations";

export const ModaLogout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const boxForRef = useRef(null);
  const dispatch = useDispatch();
  useOutsideAlerter(boxForRef);

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);

    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  });

  const onKeydown = (e) => {
    if (e.keyCode === 27) {
      setModalIsOpen(false);
    }
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setModalIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <>
      <button
        type="button"
        className={styles.btnLogout}
        onClick={() => setModalIsOpen(true)}
      >
        Вийти
      </button>
      {modalIsOpen ? (
        <div className={styles.modalBackdrop}>
          <div ref={boxForRef} className={styles.modalBox}>
            <strong className={styles.logoutQuestion}>
              Ви дійсно бажаєте вийти?
            </strong>
            <div className={styles.answerBox}>
              <button
                type="button"
                className={styles.btnForLogout}
                onClick={() => dispatch(logoutUser())}
              >
                Так
              </button>
              <button
                type="button"
                className={styles.btnForLogout}
                onClick={() => setModalIsOpen(false)}
              >
                Ні
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
