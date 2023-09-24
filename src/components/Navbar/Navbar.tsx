import React, { memo } from "react";
import styles from "./Navbar.module.scss";

type NavbarProps = {
  isToggle: boolean;
};

function Navbar({ isToggle }: NavbarProps) {
  return (
    <nav className={`${styles.navbar} ${isToggle ? styles.open : ""}`}>
      <ul className={`${styles.list} ${isToggle ? styles.open : ""}`}>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Главная
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Товары
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default memo(Navbar);
