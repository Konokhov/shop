import React, { useState, memo } from "react";
import ContainerLayout from "components/ContainerLayout";
import Logo from "components/Logo";
import Navbar from "components/Navbar";
import BasketIcon from "components/BasketIcon";
import MenuIcon from "components/MenuIcon";
import styles from "./Header.module.scss";

function Header() {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const isChangeFunc = () => {
    setIsToggle(!isToggle);
  };

  return (
    <header className={styles.header}>
      <ContainerLayout>
        <div className={styles.body}>
          <div className={styles.left}>
            <Logo />
            <Navbar isToggle={isToggle} />
          </div>
          <div className={styles.right}>
            <BasketIcon />
            <MenuIcon isToggle={isToggle} isChangeFunc={isChangeFunc} />
          </div>
        </div>
      </ContainerLayout>
    </header>
  );
}

export default memo(Header);
