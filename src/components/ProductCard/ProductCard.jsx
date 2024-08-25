import React, { useEffect } from "react";
import styles from "./ProductCard.module.scss";
import { MdDone } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
const ProductCard = ({
  product,
  handleAddToCard,
  handleAddToFavourite,
  isLoading,
}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  // console.log("Продукт из страницы КОРЗИНА => ", product);

  const onAddToFavourite = (product) => {
    // console.log("onAddToFavourite", product);

    setIsLiked(!isLiked);
    handleAddToFavourite(product);
  };

  const onAddToCart = () => {
    setIsAdded(!isAdded);
    handleAddToCard(product);
  };

  const isHasProduct = (id) => {
    if (localStorage.getItem("cart")) {
      const cartProducts = JSON.parse(localStorage.getItem("cart"));
      // console.log("Procust => ", cartProducts);
      const isHas = cartProducts.some((product) => product.id === id);

      setIsAdded(isHas);
    }
  };

  const isHasProductFavourite = (id) => {
    if (localStorage.getItem("favourite")) {
      const favouriteProducts = JSON.parse(localStorage.getItem("favourite"));
      const isHas = favouriteProducts.some((product) => product.id === id);
      // console.log("isHas", isHas);
      setIsLiked(isHas);
    }
  };

  useEffect(() => {
    isHasProduct(product.id);
    isHasProductFavourite(product.id);
  }, [handleAddToCard, handleAddToFavourite]);

  return (
    <>
      {isLoading ? (
        <div className={styles["loader"]}>
          <Loader />
        </div>
      ) : (
        <div className={styles["card"]}>
          <button
            onClick={() => onAddToFavourite(product)}
            className={
              isLiked ? styles["card-like-active"] : styles["card-like"]
            }
          >
            {isLiked ? (
              <FaHeart color="#ff8585" size={30} />
            ) : (
              <FaRegHeart сolor="#eaeaea" size={30} />
            )}
          </button>
          <img
            className={styles["card-image"]}
            src={product.imageURL[0]}
            alt={product.name}
          />
          <Link to={`/product/${product.id}`}>
            <h3>
              {product.name}, {product.storage + "ГБ"}
            </h3>
          </Link>
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
      )}
    </>
  );
};

export default ProductCard;
