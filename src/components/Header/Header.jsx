import React from "react";
import styles from "./Header.module.scss";
import IconsHandler from "../IconsHandler/IconsHandler";

const Header = () => {
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header-row"]}>
          <div className={styles["header-logo"]}>
            <h1 className={styles["header-logo__title"]}>Apple Ferrum</h1>
            <p className={styles["header-logo__subtitle"]}>
              Онлайн-магазин техники Apple
            </p>
          </div>
          <ul className={styles["header-nav__list"]}>
            <li className={styles["header-nav__item"]}>
              <IconsHandler icon="Cart" />
              0 руб.
            </li>
            <li className={styles["header-nav__item"]}>
              <IconsHandler icon="heart" /> Закладки
            </li>
            <li className={styles["header-nav__item"]}>
              <IconsHandler icon="user" />
              Войти
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
