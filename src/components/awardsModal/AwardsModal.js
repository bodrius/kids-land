import React, { useState, useEffect, useRef } from "react";
import styles from "./awardsModal.module.css";

const AwardsModal = ({ openModaled, prizes, useOutsideAlerter }) => {
  const [modal, openModal] = useState(openModaled);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);

    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  }, []);

  const onKeydown = (e) => {
    console.log("e", e.key);
    if (e.keyCode === 27) {
      console.log("modal esc", modal);
      openModal(false);
    }
  };

  console.log("modal inside", modal);

  return (
    <>
      {modal ? (
        <div tabIndex="0" className={styles.modalBackdrop}>
          <div ref={wrapperRef} className={styles.modalBox}>
            <img
              alt="cat"
              className={styles.modalImgCat}
              src="https://www.dhresource.com/0x0/f2/albu/g6/M01/7F/2F/rBVaR1uNWfiAYheFAAC2OJoGeT4108.jpg"
              width="120"
              height="auto"
            />
            {console.log("modal", modal)}
            <p className={styles.modalGreetings}>congratz, but where milk</p>
            <ul className={styles.modalPrizes}>
              {prizes.map((prize) => (
                <li key={prize.title} className={styles.modalPrizesItem}>
                  <img
                    src={prize.imgName}
                    alt="prize"
                    width="100"
                    height="100"
                    className={styles.modalPrizesPhoto}
                  />
                  <p className={styles.modalPrizesName}>{prize.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AwardsModal;
