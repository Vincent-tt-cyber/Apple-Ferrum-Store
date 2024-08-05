import React from "react";
import styles from "./MainPage.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import IconsHandler from "../../components/IconsHandler/IconsHandler";
import { IoMdClose } from "react-icons/io";
const MainPage = ({ data, handleAddToCard }) => {
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const onClearSearch = () => {
    setSearchValue("");
  };
  return (
    <>
      <div className={styles["main-page"]}>
        <div className={styles["main-page-header"]}>
          <h1 className={styles["main-page-title"]}>
            {searchValue ? `Поиск по запросу: ${searchValue}` : "Все iPhone"}
          </h1>
          <div className={styles["main-page-search"]}>
            <IconsHandler icon="search" />
            <input
              type="text"
              placeholder="Поиск"
              value={searchValue}
              onChange={onChangeSearchInput}
            />
            {searchValue && <IoMdClose onClick={onClearSearch} size={18} />}
          </div>
        </div>
        <div className={styles["main-page-grid"]}>
          {data.filter(product => product.name.toLowerCase().includes(searchValue)).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCard={handleAddToCard}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
