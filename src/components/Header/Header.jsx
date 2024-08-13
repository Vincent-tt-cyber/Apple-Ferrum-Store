import React from "react";
import styles from "./Header.module.scss";
import IconsHandler from "../IconsHandler/IconsHandler";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const Header = ({ isOpenDrawer, setIsOpenDrawer }) => {
  const { cartItems } = React.useContext(AppContext);

  const totalPrice = cartItems.reduce((sum, item) => item.price + sum, 0);

  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header-row"]}>
          <Link to="/" className={styles["header-logo"]}>
            <h1 className={styles["header-logo__title"]}>Apple Ferrum</h1>
            <p className={styles["header-logo__subtitle"]}>
              Онлайн-магазин техники Apple
            </p>
          </Link>
          <ul className={styles["header-nav__list"]}>
            <li
              onClick={() => setIsOpenDrawer(!isOpenDrawer)}
              className={styles["header-nav__item"]}
            >
              <IconsHandler icon="Cart" />
              {totalPrice.toLocaleString("ru-RU", {style: "currency",currency: "RUB",})}
            </li>
            <li className={styles["header-nav__item"]}>
              <Link to="/favourite">
                <IconsHandler icon="heart" /> Закладки
              </Link>
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
