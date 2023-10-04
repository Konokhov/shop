import React from "react";
import styles from "./Item.module.scss";

function Item() {
  return (
    <article className={styles.card}>
      <div className={styles.imageBox}>
        <img
          className={styles.image}
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
      <div className={styles.body}>
        <h1 className={styles.price}>100 ₽</h1>
        <h1 className={styles.title}>Mens Cotton Jacket</h1>
        <p className={styles.description}>
          great outerwear jackets for Spring/Autumn/Winter, suitable for many
          occasions, such as working ...
        </p>
      </div>
      <div className={styles.footer}>
        <a className={styles.detailed} href="#">
          Подробнее
        </a>
        <button className={styles.button}>В корзину</button>
      </div>
    </article>
  );
}

export default Item;
