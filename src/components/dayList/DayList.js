import React from "react";
import { useChecklist } from "react-checklist";
import css from "./DayList.module.css";
import dayListTransition from "./dayListTransition.module.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const days = [
  { _id: 1, label: "Пн" },
  { _id: 2, label: "Вт" },
  { _id: 3, label: "Ср" },
  { _id: 4, label: "Чт" },
  { _id: 5, label: "Пт" },
  { _id: 6, label: "Сб" },
  { _id: 7, label: "Нд" },
];

export const DayList = ({flag}) => {
  // const [flag, setFlag] = useState(false);
  const { handleCheck, checkedItems } = useChecklist(days, {
    key: "label",
    keyType: "string",
  });

  console.log(checkedItems); // Set(0) - handling with Set
  console.log([...checkedItems]); // []     - handling with Array
  return (
    <div className={css.dayListPosition}>
      {/* <button className={css.showModal} type="button" onClick={() => setFlag(!flag)}>
        add
      </button> */}
      <CSSTransition
        in={flag}
        timeout={500}
        classNames={dayListTransition}
        unmountOnExit
      >
        <ul className={css.dayList}>

          {days.map((day, indx) => (
            <li key={indx}>
              <input
              className={css.checkPlace}
              style={{backgroundColor:" #5579d7", borderRadius:"4px"}}
                type="checkbox"
                data-key={day.label} // 3
                onChange={handleCheck} // 4
                checked={checkedItems.has(day.label)} // 5
              />
              <label className={css.label}>{day.label}</label>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};
