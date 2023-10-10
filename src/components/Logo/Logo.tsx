import React from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className={styles.logo}>
      Магазин
    </Link>
  );
}

export default Logo;
