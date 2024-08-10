import React from "react";
import styles from "./CartPage.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
const CartPage = ({ cartItems, handleAddToCard, handleAddToFavourite }) => {
  
  return (
    <>
      <div className={styles["cart-page"]}>
        <h1>{cartItems ? `Корзина (${cartItems.length})` : "Корзина пуста"}</h1>
        <div className={styles["cart-page__content"]}>
          {cartItems.length
            ? cartItems.map((product) => (
                <ProductCard
                  key={product.id}
                  handleAddToCard={handleAddToCard}
                  handleAddToFavourite={handleAddToFavourite}
                  product={product}
                />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default CartPage;
