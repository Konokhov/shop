import React, { memo } from "react";
import basket from "../../assets/image/basket.svg";
import styles from "./BasketIcon.module.scss";
import { Link } from "react-router-dom";
import { CartProducts } from "../../types/cardProducts";

type BasketIconProps = {
  data: CartProducts | null;
};

function BasketIcon({ data }: BasketIconProps) {
  return (
    <Link to={"/basket"} className={styles.basketIcon}>
      <div className={styles.icon}>
        {data && <span className={styles.total}>{data.products.length}</span>}
        <img className={styles.image} src={basket} alt="Корзина" />
      </div>
      <span className={styles.title}>Корзина</span>
    </Link>
  );
}

export default memo(BasketIcon);
