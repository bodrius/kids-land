import React from "react";
import style from "./ButtonPlus.module.css";

export function ButtonPlus({ onClick, children }) {
  return (
    <button className={style.Card__ButtonPlus} onClick={onClick}>
      {children}
    </button>
  );
}
