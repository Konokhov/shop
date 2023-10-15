import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.scss";
import { Product } from "types/Product";

type ItemProps = {
  elem: Product;
};

function Item({ elem }: ItemProps) {
  return (
    <li className={styles.item}>
      <article className={styles.card}>
        <div className={styles.imageBox}>
          <img className={styles.image} src={elem.image} alt="" />
        </div>
        <div className={styles.body}>
          <h1 className={styles.price}>{elem.price} ₽</h1>
          <h1 className={styles.title}>{elem.title}</h1>
          <p className={styles.description}>{elem.description}</p>
        </div>
        <div className={styles.footer}>
          <Link to={`/details/${elem.id}`} className={styles.detailed}>
            Подробнее
          </Link>
        </div>
      </article>
    </li>
  );
}

export default Item;
