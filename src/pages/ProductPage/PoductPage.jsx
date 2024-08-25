import React from "react";
import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";

const ProductPage = () => {
  const { id } = useParams();
  const { iphonesData } = React.useContext(AppContext);
  // const [productInfo, setProductInfo] = React.useState([]);
  // const pathName = window.location.pathname;

  React.useEffect(() => {}, [iphonesData]);
  return (
    <>
      <div className={styles["product-page"]}>
        <div className={styles["product-page__content"]}>
          {iphonesData &&
            iphonesData.map((product) => {
              if (product.id == id) {
                return (
                  <div key={product.id}>
                    <div className={styles["product-page-row"]}>
                      <div className={styles["product-page__gallery"]}>
                        <div className={styles["product-page__gallery-slider"]}>
                          {product.imageURL.map((image) => (
                            <img key={image} src={image} alt={product.name} />
                          ))}
                        </div>
                        <div
                          className={styles["product-page__gallery-main-image"]}
                        >
                          <img src={product.imageURL[0]} alt={product.name} />
                        </div>
                      </div>

                      <div className={styles["product-page__info"]}>
                        <h1>{product.name}</h1>
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
