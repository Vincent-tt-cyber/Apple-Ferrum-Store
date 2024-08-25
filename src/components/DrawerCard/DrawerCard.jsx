import React from "react";
import styles from "./DrawerCard.module.scss";
import { IoMdClose } from "react-icons/io";

const DrawerCard = ({ product, deleteItemFromCart }) => {
  React.useEffect(() => {}, [deleteItemFromCart]);
  return (
    <div className={styles["drawer-card"]}>
      <img src={product.imageURL[0]} alt={product.name} />
      <div>
        <h2 className={styles["drawer-card__title"]}>{product.name}</h2>
        <p>
          {product.price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          })}
        </p>
      </div>
      <button
        className={styles["drawer-card__button"]}
        onClick={() => deleteItemFromCart(product.id)}
      >
        <IoMdClose size={18} />
      </button>
    </div>
  );
};

export default DrawerCard;
