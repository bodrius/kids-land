import React, { useState, useEffect, useRef } from "react";
import styles from "./awardsModal.module.css";
import one from "../../assets/image/prizesImg/1.jpg";
import two from "../../assets/image/prizesImg/2.jpg";
import thri from "../../assets/image/prizesImg/3.jpg";
import fuor from "../../assets/image/prizesImg/4.jpg";
import fiv from "../../assets/image/prizesImg/5.jpg";
import six from "../../assets/image/prizesImg/6.jpg";
import sivin from "../../assets/image/prizesImg/7.jpg";
import iight from "../../assets/image/prizesImg/8.jpg";

const AwardsModal = ({ openModaled, prizes, useOutsideAlerter }) => {
  const [modal, openModal] = useState(openModaled);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const imgStyle = (imgName) => {
    return {
      backgroundImage: `url(../../assets/image/prizesImg/${imgName}.jpg)`,
    };
  };

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
            {
              prizes.length > 0 ? <p className={styles.modalGreetings}>Вітаємо! Ти отримуєш:</p> : <p className={styles.modalGreetings}>Обери хоч щось!</p>
            }
            <ul className={styles.modalPrizes}>
              {prizes.map((prize) => (
                <li key={prize.title} className={styles.modalPrizesItem}>
                  <div
                    className={styles.modalPrizesItemImageWrapper}
                    style={imgStyle(prize.imgName)}
                  >
                    {console.log("prize", prize)}
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
