import React, { ReactNode } from "react";
import styles from "./ContainerLayout.module.scss";

type ContainerLayoutProps = {
  children: ReactNode;
};

function ContainerLayout({ children }: ContainerLayoutProps) {
  return <div className={styles.container}>{children}</div>;
}

export default ContainerLayout;
