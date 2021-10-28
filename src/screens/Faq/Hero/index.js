import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Icon from "../../../components/Icon";



const Hero = () => {

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <h1 className={cn("h2", styles.title)}>About</h1>
          <div className={styles.info}>
            Loreum ipsum dolor sit amet, consectetur
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
