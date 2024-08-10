import React from "react";
import styles from "./FovouritePage.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const FavouritePage = ({
  favouriteItems,
  handleAddToFavourite,
  handleAddToCard,
}) => {
  React.useEffect(() => {}, [handleAddToFavourite, handleAddToCard]);
  return (
    <>
      <div className={styles["favourite-page"]}>
        <h1>{ favouriteItems ? `Избранное (${favouriteItems.length})` : "Избранное"}</h1>
        <div className={styles["favourite-page__content"]}>
          {favouriteItems.length
            ? favouriteItems.map((item) => (
                <ProductCard
                  key={item.id}
                  handleAddToFavourite={handleAddToFavourite}
                  handleAddToCard={handleAddToCard}
                  product={item}
                />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default FavouritePage;
