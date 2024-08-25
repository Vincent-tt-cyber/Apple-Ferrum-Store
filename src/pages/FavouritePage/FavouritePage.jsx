import React from "react";
import styles from "./FovouritePage.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { AppContext } from "../../App";

const FavouritePage = ({ handleAddToFavourite, handleAddToCard }) => {
  const { favouriteItems } = React.useContext(AppContext);

  React.useEffect(() => {}, [handleAddToFavourite, handleAddToCard]);
  return (
    <>
      <div className={styles["favourite-page"]}>
        <div>
          <h1>
            Избранное {favouriteItems.length ? `(${favouriteItems.length})` : ""}
          </h1>
        </div>

        <div
          className={
            favouriteItems.length
              ? styles["favourite-page__content"]
              : styles["favourite-page__empty"]
          }
        >
          {favouriteItems.length ? (
            favouriteItems.map((item) => (
              <ProductCard
                key={item.id}
                handleAddToFavourite={handleAddToFavourite}
                handleAddToCard={handleAddToCard}
                product={item}
              />
            ))
          ) : (
            <div>
              <span style={{ fontSize: 80 }}>😒</span>
              <h2>Закладок нет :(</h2>
              <p>Вы ничего не добавляли в закладки</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FavouritePage;
