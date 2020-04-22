import React from "react";
import { Link } from "react-router-dom";
import css from "./logo.module.css";

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <div>
          <h2 className={css.logo}>KidsLike</h2>
        </div>
      </Link>
    </>
  );
};
