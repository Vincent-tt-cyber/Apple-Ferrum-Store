import React from "react";
import styles from "./ProductPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../App";
import { Heart, ShoppingCart } from "lucide-react";

const ProductPage = () => {
  const { id } = useParams();
  const { iphonesData } = React.useContext(AppContext);
  const product = iphonesData.find((product) => product.id == id);
  const [mainImage, setMainImage] = React.useState(product.imageURL[0]);
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const { handleAddToCard, handleAddToFavourite } =
    React.useContext(AppContext);

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

  React.useEffect(() => {
    isHasProduct(product.id);
    isHasProductFavourite(product.id);
  }, [iphonesData, handleAddToCard, handleAddToFavourite]);
  return (
    <>
      <div className={styles["product-page"]}>
        <div className={styles["product-page__content"]}>
          <Link to="/" className={styles["product-page__back"]}>
            Назад
          </Link>
          {iphonesData &&
            iphonesData.map((product) => {
              if (product.id == id) {
                return (
                  <div key={product.id}>
                    <div className={styles["product-page-row"]}>
                      <div className={styles["product-page__gallery"]}>
                        <div className={styles["product-page__gallery-slider"]}>
                          {product.imageURL.map((image) => (
                            <img
                              key={image}
                              src={image}
                              alt={product.name}
                              draggable="false"
                              onClick={() => setMainImage(image)}
                            />
                          ))}
                        </div>
                        <div
                          className={styles["product-page__gallery-main-image"]}
                        >
                          <img
                            src={mainImage}
                            draggable="false"
                            alt={product.name}
                          />
                        </div>
                      </div>
                      <div className={styles["product-page__info"]}>
                        <div className={styles["product-page__info-item"]}>
                          Модель:
                          <h3>{product.name}</h3>
                        </div>
                        <div className={styles["product-page__info-item"]}>
                          Цвет: <b>{product.color}</b>
                        </div>
                        <div className={styles["product-page__info-item"]}>
                          Объем памяти: <b>{product.storage}GB</b>
                        </div>
                        <div className={styles["product-page__info-item"]}>
                          Цена:{" "}
                          <b>
                            {product.price.toLocaleString("ru-RU", {
                              style: "currency",
                              currency: "RUB",
                            })}
                          </b>
                        </div>
                        <div className={styles["product-page__buttons"]}>
                          <button
                            onClick={() => {
                              handleAddToCard(product);
                              setIsAdded(!isAdded);
                            }}
                            className={styles["product-page__button-cart"]}
                          >
                            <ShoppingCart />{" "}
                            {isAdded ? (
                              <span>Удалить из корзины</span>
                            ) : (
                              "Добавить в корзину"
                            )}
                          </button>
                          <button
                            onClick={() => {
                              handleAddToFavourite(product);
                              setIsLiked(!isLiked);
                            }}
                            className={styles["product-page__button-favorite"]}
                          >
                            <Heart />{" "}
                            {isLiked ? (
                              <span>Убрать из избранного</span>
                            ) : (
                              "Добавить в избранное"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ProductPage;
