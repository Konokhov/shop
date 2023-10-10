import React, { ReactNode } from "react";
import styles from "./PageLayout.module.scss";

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return <main className={styles.page}>{children}</main>;
}

export default PageLayout;
