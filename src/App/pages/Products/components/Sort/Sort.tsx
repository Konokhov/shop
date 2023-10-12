import React, { ChangeEvent } from "react";
import styles from "./Sort.module.scss";

type SortProps = {
  change: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function Sort({ change }: SortProps) {
  return (
    <div className={styles.wrapper}>
      <select className={styles.select} onChange={change}>
        <option className={styles.option} value={"desc"}>
          desc
        </option>
        <option className={styles.option} value={"asc"}>
          asc
        </option>
      </select>
    </div>
  );
}

export default Sort;
