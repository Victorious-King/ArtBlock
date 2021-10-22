import React from "react";
import cn from "classnames";
import styles from "./Accept.module.sass";

const items = [
  {
    title: "Service fee",
    value: "0 ETH",
  },
  {
    title: "Total bid amount",
    value: "1.46 ETH",
  },
];

const Accept = ({ className }) => {
  return (
    <div className={cn(className, styles.accept)}>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>Mint</button>
      </div>
    </div>
  );
};

export default Accept;
