import React, { ReactNode } from "react";
import styles from "./ProductFilter.module.scss";

type ProductFilterProps = {
  children: ReactNode;
};

function ProductFilter({ children }: ProductFilterProps) {
  return (
    <div className={styles.productFilter}>
      <div className={styles.filters}>{children}</div>
    </div>
  );
}

export default ProductFilter;
