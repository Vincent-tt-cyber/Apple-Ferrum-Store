import React from "react";
import styles from "./ProductCard.module.scss";
import { MdDone } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  return (
    <>
      <div className={styles["card"]}>
        <button onClick={() => setIsLiked(!isLiked)}
          className={isLiked ? styles["card-like-active"] : styles["card-like"]}
        >
          {isLiked ? (
            <FaHeart color="#ff8585" size={30} />
          ) : (
            <FaRegHeart сolor="#eaeaea" size={30} />
          )}
        </button>
        <img
          className={styles["card-image"]}
          src={product.imageURL}
          alt={product.name}
        />
        <h3>{product.name}</h3>
        {/* <p>{product.color}</p> */}
        <div className={styles["card-footer"]}>
          <div className={styles["card-price"]}>
            <p className={styles["card-price-title"]}>Цена:</p>
            <p className={styles["card-price-value"]}>
              {product.price.toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
              })}
            </p>
          </div>
          <button onClick={() => setIsAdded(!isAdded)}
            className={
              isAdded ? styles["card-button-active"] : styles["card-button"]
            }
            title="Добавить в корзину"
          >
            {isAdded ? <MdDone /> : "+"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
