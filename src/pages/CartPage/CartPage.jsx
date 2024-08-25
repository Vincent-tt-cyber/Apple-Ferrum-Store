import React from "react";
import styles from "./CartPage.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { AppContext } from "../../App";
const CartPage = ({  handleAddToCard, handleAddToFavourite }) => {
  const { cartItems } = React.useContext(AppContext);
  
  return (
    <>
      <div className={styles["cart-page"]}>
      <div>
          <h1>
            Товары в корзине {cartItems.length ? `(${cartItems.length})` : ""}
          </h1>
        </div>
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
