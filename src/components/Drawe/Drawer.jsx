import React, { useEffect } from "react";
import styles from "./Drawer.module.scss";
import DrawerCard from "../DrawerCard/DrawerCard";
import IconsHandler from "../IconsHandler/IconsHandler";
import { IoMdClose } from "react-icons/io";
import BOXimage from "../../assets/images/box.jpg";

const Drawer = ({
  isOpenDrawer,
  setIsOpenDrawer,
  productsData,
  deleteItemFromCart,
}) => {
  useEffect(() => {}, [deleteItemFromCart]);
  return (
    <>
      <div className={styles["drawer"]}>
        <div className={styles["drawer-content"]}>
          <div>
            <div className={styles["drawer-header"]}>
              <h2 className={styles["drawer__title"]}>Корзина</h2>
              <button
                onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                className={styles["drawer-close"]}
              >
                <IoMdClose size={18} />
              </button>
            </div>
            <div className={styles["drawer__cards"]}>
              {productsData.map((product) => (
                <DrawerCard
                  key={product.id}
                  product={product}
                  deleteItemFromCart={deleteItemFromCart}
                />
              ))}
            </div>
          </div>
          {productsData.length === 0 && (
            <div className={styles["drawer__empty"]}>
              <img src={BOXimage} alt="BOX" />
              <h2>Корзина пуста</h2>
              <p>Добавьте хотя бы один товар</p>
            </div>
          )}
          <div>
            {productsData.length > 0 && (
              <>
                <ul className={styles["drawer__total"]}>
                  <li>
                    <span>Итого: </span>
                    <b>21 498 руб.</b>
                  </li>
                  <li>
                    <span>Налог 5%: </span>
                    <b>1074 руб.</b>
                  </li>
                </ul>
                <button className={styles["drawer__button"]}>
                  Оформить <IconsHandler icon={"arrow-right"} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
