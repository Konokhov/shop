import React, { memo } from "react";
import basket from "../../assets/image/basket.svg";
import styles from "./BasketIcon.module.scss";

function BasketIcon() {
  return (
    <a className={styles.basketIcon} href="#">
      <div className={styles.icon}>
        <span className={styles.total}>5</span>
        <img className={styles.image} src={basket} alt="Корзина" />
      </div>
      <span className={styles.title}>Корзина</span>
    </a>
  );
}

export default memo(BasketIcon);
