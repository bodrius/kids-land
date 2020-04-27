import React, { useState, useEffect, useRef } from "react";
import styles from "./awardsModal.module.css";

const AwardsModal = ({ openModaled, prizes, useOutsideAlerter }) => {
  const [modal, openModal] = useState(openModaled);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const bgImg = (props) => {
    const imgUrl = require(`../../assets/image/prizesImg/${props}.jpg`)
    return imgUrl
  }

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
            {prizes.length > 0 ? (
              <p className={styles.modalGreetings}>Вітаємо! Ти отримуєш:</p>
            ) : (
              <p className={styles.modalGreetings}>Обери хоч щось!</p>
            )}
            <ul className={styles.modalPrizes}>
              {prizes.map((prize) => (
                <li key={prize.title} className={styles.modalPrizesItem}>
                  <div
                    id="sexyId"
                    className={styles.modalPrizesItemImageWrapper}
                    style={{backgroundImage: `url(${bgImg(prize.imgName)})`}}
                  >
                  </div>
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
