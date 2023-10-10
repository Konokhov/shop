import React from "react";
import styles from "./DetailsCard.module.scss";

function DetailsCard() {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.box}>
          <img
            className={styles.image}
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.category}>men's clothing</span>
        <h1 className={styles.price}>100 ₽</h1>
        <h1 className={styles.title}>Mens Cotton Jacket</h1>
        <p className={styles.description}>
          great outerwear jackets for Spring/Autumn/Winter, suitable for
          manyoccasions, such as working ...
        </p>
        <div className={styles.info}>
          <span>Рейтинг 3.5</span>
          <span>Осталось 6 шт</span>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
