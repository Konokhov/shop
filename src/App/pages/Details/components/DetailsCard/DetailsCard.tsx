import React from "react";
import styles from "./DetailsCard.module.scss";
import { Product } from "types/Product";
import rating from "../../../../../assets/image/rating.svg";

type DetailsCardProps = {
  data: Product;
};

function DetailsCard({ data }: DetailsCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.box}>
          <img className={styles.image} src={data.image} alt="img product" />
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.category}>{data.category}</span>
        <h1 className={styles.price}>{data.price} ₽</h1>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.rating}>
          <span className={styles.rate}>
            <img className={styles.icon} src={rating} />
            {data.rating?.rate}
          </span>
          <span>Осталось {data.rating?.count} шт</span>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
