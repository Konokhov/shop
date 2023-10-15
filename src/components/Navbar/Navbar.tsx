import React, { memo } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

type NavbarProps = {
  isToggle: boolean;
  isCloseToggle: () => void;
};

function Navbar({ isToggle, isCloseToggle }: NavbarProps) {
  return (
    <nav className={`${styles.navbar} ${isToggle ? styles.open : ""}`}>
      <ul className={`${styles.list} ${isToggle ? styles.open : ""}`}>
        <li className={styles.item}>
          <Link to={"/"} className={styles.link} onClick={isCloseToggle}>
            Главная
          </Link>
        </li>
        <li className={styles.item}>
          <Link to={"products"} className={styles.link} onClick={isCloseToggle}>
            Товары
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default memo(Navbar);
