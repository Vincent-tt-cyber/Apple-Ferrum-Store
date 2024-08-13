import React from "react";
import styles from "./ProductPage.module.scss";

const PoductPage = () => {

  const { current} = React.useRef();
  console.log(current);
  
  return (
    <>
      <div className={styles["product-page"]}>PoductPage</div>
    </>
  );
};

export default PoductPage;
