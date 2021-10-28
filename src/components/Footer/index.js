import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Group from "./Group";
import Image from "../Image";
import Form from "../Form";
import Icon from "../../components/Icon";
import Theme from "../Theme";

const items = [
  {
    title: "101010.art",
    menu: [
      {
        title: "Collectios",
        url: "/#",
      },
      {
        title: "About",
        url: "/about",
      },
    ],
  },
];

const Footers = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.foot}>
          <div className={styles.copyright}>
            Copyright © 2021 UI8 LLC. All rights reserved
          </div>
          <div className={styles.note}>
            <a href="/#"><Icon name={'twitter'} size="24" /></a>
            <a href="/#"><Icon name={'discord'} size="24" /></a>
            <div className={styles.details}>Dark theme&nbsp;&nbsp;&nbsp; <Theme className="theme-big" /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
