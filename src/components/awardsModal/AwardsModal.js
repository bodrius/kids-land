import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-dom-confetti";
import styles from "./awardsModal.module.css";

const AwardsModal = ({
  openModaled,
  prizes,
  useOutsideAlerter,
  pointsTotal,
  closeModal,
  collectAwards,
  fail,
}) => {
  const [modal, openModal] = useState(openModaled);
  const [modalCheck, setModalCheck] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const wrapperRef = useRef(null);

  const config = {
    angle: 90,
    spread: "120",
    startVelocity: "60",
    elementCount: "100",
    dragFriction: 0.1,
    duration: "10000",
    stagger: "10",
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  useOutsideAlerter(wrapperRef);

  useEffect(() => {
    if (pointsTotal > 0) {
      setModalCheck(true);
    }
  }, []);

  const bgImg = (props) => {
    const imgUrl = require(`../../assets/image/prizesImg/${props}.jpg`);
    return imgUrl;
  };

  return (
    <>
      {modal ? (
        <div tabIndex="0" className={styles.modalBackdrop}>
          <div ref={wrapperRef} className={styles.modalBox}>
            <img
              alt="cat"
              className={styles.modalImgCat}
              src={require('../../assets/image/icon/modalCat/FAVPNG_simons-cat-plush-key-ring-decal-sticker-feed-me_n4ytLmmf.png')}
              width="200"
              height="auto"
            />
            {modalCheck ? (
              <>
                {fail ? (
                  <p className={styles.modalGreetings}>Недостатньо балів!</p>
                ) : (
                  <p className={styles.modalGreetings}>
                    Ти дійсно бажаєш витратити {pointsTotal} балів?
                  </p>
                )}
              </>
            ) : (
              <>
                {prizes.length > 0 ? (
                  <p className={styles.modalGreetings}>Вітаємо! Ти отримуєш:</p>
                ) : (
                  <p className={styles.modalGreetings}>Обери хоч щось!</p>
                )}
              </>
            )}
            <ul className={styles.modalPrizes}>
              {prizes.map((prize) => (
                <li key={prize.title} className={styles.modalPrizesItem}>
                  <div
                    id="sexyId"
                    className={styles.modalPrizesItemImageWrapper}
                    style={{ backgroundImage: `url(${bgImg(prize.imgName)})` }}
                  ></div>
                  <p className={styles.modalPrizesName}>{prize.title}</p>
                </li>
              ))}
            </ul>
            <div>
              <div className={styles.modalCheckDiv}>
                {modalCheck ? (
                  <>
                    {fail ? (
                      <button
                        disabled={true}
                        className={styles.modalCheckButton}
                        onClick={() => {
                          setModalCheck(false);
                          collectAwards();
                        }}
                      >
                        Так!
                      </button>
                    ) : (
                      <button
                        className={styles.modalCheckButton}
                        onClick={() => {
                          setModalCheck(false);
                          collectAwards();
                          setConfetti(true);
                        }}
                      >
                        Так!
                      </button>
                    )}
                    <button
                      className={styles.modalCheckButton}
                      onClick={() => closeModal()}
                    >
                      Повернутися
                    </button>
                  </>
                ) : (
                  <> </>
                )}
              </div>
            </div>
            <div className={styles.confettiWrapper}>
              <Confetti active={confetti} config={config} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AwardsModal;
