import React, { ReactNode } from "react";
import styles from "./ProductFilter.module.scss";

type ProductFilterProps = {
  children: ReactNode;
};

function ProductFilter({ children }: ProductFilterProps) {
  return <div className={styles.filters}>{children}</div>;
}

export default ProductFilter;
