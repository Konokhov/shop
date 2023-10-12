import React, { ChangeEvent } from "react";
import styles from "./Categories.module.scss";

type SelectProps = {
  categories: string[];
  change: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function Categories({ categories, change }: SelectProps) {
  return (
    <div className={styles.wrapper}>
      <select className={styles.select} onChange={change}>
        <option className={styles.option} value={""}>
          all
        </option>
        {categories.map((elem) => (
          <option
            className={styles.option}
            key={elem}
            value={`category/${elem}`}
          >
            {elem}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;
