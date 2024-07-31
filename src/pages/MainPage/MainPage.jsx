import React from "react";
import styles from "./MainPage.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import IconsHandler from "../../components/IconsHandler/IconsHandler";
const MainPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className={styles["main-page"]}>
        <div className={styles["main-page-header"]}>
          <h1 className={styles["main-page-title"]}>Все iPhone</h1>
          <div className={styles["main-page-search"]}>
            <IconsHandler icon="search" />
            <input type="text" placeholder="Поиск" />
          </div>
        </div>
        <div className={styles["main-page-grid"]}>
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
