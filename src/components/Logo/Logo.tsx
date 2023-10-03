import React from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className={styles.logo}>
      Shop
    </Link>
  );
}

export default Logo;
