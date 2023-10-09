import React from "react";
import Item from "../Item";
import styles from "./List.module.scss";
import { Product } from "types/Product";

type ListProps = {
  data: Product[];
};

function List({ data }: ListProps) {
  return (
    <ul className={styles.list}>
      {data.map((elem: Product) => (
        <Item key={elem.id} elem={elem} />
      ))}
    </ul>
  );
}

export default List;
