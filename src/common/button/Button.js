import React from "react";
import style from "../card/Card.module.css";

export function Button({ onClick, children }) {
  const [state, setState] = React.useState({ visible: false });
  return <button className={style.Card__listBtn} onClick={onClick}>{children}</button>;
}
