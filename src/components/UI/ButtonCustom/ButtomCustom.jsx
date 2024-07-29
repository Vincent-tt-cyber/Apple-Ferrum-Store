import React from "react";
import styles from "./ButtomCustom.module.scss";

const ButtomCustom = ({ children,  }) => {
  return (
    <>
      <div className={styles["buttom"]}>{children}</div>
    </>
  );
};

export default ButtomCustom;
