import React, { useState } from "react";
import styles from "./OfferBlock.module.scss";

const OfferBlock = () => {
  const [saleNum, setSaleNum] = useState(79990);
  return (
    <>
      <section className={styles["offer-block"]}>
        <div className={styles["offer-block-row"]}>
          <div>
            <div className={styles["offer-block-text"]}>
              <h1 className={styles["offer-block__title"]}>
                <span className={styles["offer-block__title-green"]}>
                  AirPods Pro 2
                </span>{" "}
                в подарок!
              </h1>
              <p className={styles["offer-block__subtitle"]}>
                При первом заказе
              </p>
            </div>
            <button>Купить</button>
          </div>
          <img
            src="https://static.eldorado.ru/img1/b/bb/08067501.jpg/resize/468x468/"
            alt=""
            style={{ borderRadius: 20 }}
          />
        </div>
      </section>
    </>
  );
};

export default OfferBlock;
