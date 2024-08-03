import React from "react";
import styles from "./DrawerCard.module.scss";
import { IoMdClose } from "react-icons/io";

const DrawerCard = ({ product }) => {
  return (
    <>
      <div className={styles["drawer-card"]}>
        <img src={product.imageURL} alt={product.name} />
        <div>
          <h2 className={styles['drawer-card__title']}>{product.name}</h2>
          <p>{product.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}</p>
        </div>
        <button className={styles["drawer-card__button"]}>
          <IoMdClose size={18}/>
        </button>
      </div>
    </>
  );
};

export default DrawerCard;
