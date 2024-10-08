import React, { useEffect } from "react";
import styles from "./MainPage.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import IconsHandler from "../../components/IconsHandler/IconsHandler";
import { IoMdClose } from "react-icons/io";
import OfferBlock from "../../components/OfferBlock/OfferBlock";
import { AppContext } from "../../App";
const MainPage = ({ isLoading }) => {
  const { iphonesData, sortType, handleSort } = React.useContext(AppContext);
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
      {/* <OfferBlock /> */}
      <div className={styles["main-page"]}>
        <div className={styles["main-page-header"]}>
          <h1 className={styles["main-page-title"]}>Все iPhone</h1>
          <select
              // className={styles.}
              onChange={(e) => handleSort(e.target.value)}
              value={sortType}
            >
              <option className={styles['option']} value="all">Все</option>
              <option className={styles['option']} value="cheap">Дешевле</option>
              <option className={styles['option']} value="expensive">Дороже</option>
            </select>
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
          {iphonesData
            .filter((product) =>
              product.name.toLowerCase().includes(searchValue)
            )
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isLoading={isLoading}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
