import React from "react";
import styles from "./ProductCard.module.scss";
import { MdDone } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const ProductCard = ({ product, handleAddToCard }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  
  const onAddToCart = () => {
    setIsAdded(!isAdded);
    handleAddToCard(product);
  };

  return (
    <>
      <div className={styles["card"]}>
        <button
          onClick={() => setIsLiked(!isLiked)}
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
        <h3>{product.name}, {product.storage + "ГБ"}</h3>
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
          <button
            onClick={() => onAddToCart(product)}
            className={
              isAdded ? styles["card-button-active"] : styles["card-button"]
            }
            title={isAdded ? "Убрать из корзины" : "Добавить в корзину"}
          >
            {isAdded ? <MdDone /> : "+"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
