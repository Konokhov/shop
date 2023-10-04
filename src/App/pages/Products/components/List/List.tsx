import React from "react";
import Item from "../Item";
import styles from "./List.module.scss";

function List() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Item />
      </li>
      <li className={styles.item}>
        <Item />
      </li>
      <li className={styles.item}>
        <Item />
      </li>

      <li className={styles.item}>
        <Item />
      </li>
      <li className={styles.item}>
        <Item />
      </li>
      <li className={styles.item}>
        <Item />
      </li>
    </ul>
  );
}

export default List;
