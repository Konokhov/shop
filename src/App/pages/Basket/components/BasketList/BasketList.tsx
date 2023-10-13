import React from "react";
import ItemBasket from "../ItemBasket";
import { Product } from "types/Product";
import { CartProducts } from "types/cardProducts";
import styles from "./BasketList.module.scss";

type BasketListProps = {
  basketData: Product[];
  data: CartProducts;
};

function BasketList({ basketData, data }: BasketListProps) {
  return (
    <ul className={styles.basketList}>
      {basketData.map((elem) => (
        <ItemBasket key={elem.id} basketData={elem} data={data} />
      ))}
    </ul>
  );
}

export default BasketList;
