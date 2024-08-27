import React from "react";
import styles from "./ProductPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../App";

const ProductPage = () => {
  const { id } = useParams();
  const { iphonesData } = React.useContext(AppContext);
  const product = iphonesData.find((product) => product.id == id);
  const [mainImage, setMainImage] = React.useState(product.imageURL[0]);
  // const [productInfo, setProductInfo] = React.useState([]);
  // const pathName = window.location.pathname;

  React.useEffect(() => {}, [iphonesData]);
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
                              onClick={() => setMainImage(image)}
                            />
                          ))}
                        </div>
                        <div
                          className={styles["product-page__gallery-main-image"]}
                        >
                          <img src={mainImage} alt={product.name} />
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
                          Цена: <b>{product.price}</b>
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
