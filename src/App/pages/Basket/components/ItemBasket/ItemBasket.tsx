import React from "react";
import { Product } from "types/Product";
import { CartProducts } from "types/cardProducts";
import { Link } from "react-router-dom";
import styles from "./ItemBasket.module.scss";

type ItemBasketProps = {
  basketData: Product;
  data: CartProducts;
};

function ItemBasket({ basketData, data }: ItemBasketProps) {
  const total = data.products.find((i) => i.productId === basketData.id);
  console.log(basketData);

  return (
    <li className={styles.itemBasket}>
      <div className={styles.left}>
        <div className={styles.imageBlock}>
          <img className={styles.image} src={basketData.image} width={100} />
        </div>
        <Link to={`/details/${basketData.id}`} className={styles.title}>
          {basketData.title}
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.price}>{basketData.price} $</div>
        <div className={styles.total}>{total?.quantity} шт</div>
      </div>
    </li>
  );
}

export default ItemBasket;
