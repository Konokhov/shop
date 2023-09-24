import React from "react";
import styles from "./MenuIcon.module.scss";

type MenuIconProps = {
  isToggle: boolean;
  isChangeFunc: () => void;
};

function MenuIcon({ isToggle, isChangeFunc }: MenuIconProps) {
  return (
    <button
      onClick={isChangeFunc}
      className={`${styles.menuIcon} ${isToggle ? styles.open : ""}`}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </button>
  );
}

export default MenuIcon;
