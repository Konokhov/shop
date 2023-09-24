import React from "react";
import ContainerLayout from "components/ContainerLayout";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ContainerLayout>2023</ContainerLayout>
    </footer>
  );
}

export default Footer;
