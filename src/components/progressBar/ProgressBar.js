import React from "react";
import { connect } from "react-redux";
import style from "./ProgressBar.module.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const ProgressBar = ({ userPoints, weekPoints }) => {
  let percent = 100;
  if (weekPoints) {
    percent = parseFloat((userPoints / weekPoints) * 100);
  }
  if (userPoints === 0) {
    percent = 0;
  }

  return (
    <>
      <div className={style.wrapp}>
        <div className={style.info}>
          <p className={style.progressBarText}>
            Зароблено балів за весь період:
            <span className={style.points}>{userPoints}</span>
          </p>
          <p className={style.progressBarText}>
            Заплановано балів на цей тиждень:
            <span className={style.points}>{weekPoints}</span>
          </p>
        </div>
        <div className={style.progress_container}>
          <span className={style.secondPoints}>
            {userPoints}/{weekPoints}
          </span>
          <Progress
            percent={percent}
            theme={{
              status: {
                symbol: "",
                color: "#fbc630"
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
//   // userPoints: 300,
  countPoints: 800
});

export default connect(mapStateToProps, null)(ProgressBar);

// export default ProgressBar;
