import React from "react";
import styles from "./Drawer.module.scss";
import DrawerCard from "../DrawerCard/DrawerCard";
import IconsHandler from "../IconsHandler/IconsHandler";
import { IoMdClose } from "react-icons/io";

const Drawer = ({ isOpenDrawer, setIsOpenDrawer, iPhoneData }) => {
  return (
    <>
      <div className={styles["drawer"]}>
        <div className={styles["drawer-content"]}>
          <div>
            <div className={styles["drawer-header"]}>
              <h2 className={styles["drawer__title"]}>Корзина</h2>
              <button onClick={() => setIsOpenDrawer(!isOpenDrawer)} className={styles["drawer-close"]}>
                <IoMdClose size={18} />
              </button>
            </div>

            <div className={styles["drawer__cards"]}>
              {iPhoneData.map((product) => (
                <div key={product.id}>
                  <DrawerCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
