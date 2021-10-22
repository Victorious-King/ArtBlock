import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Dropdown from "../../../components/Dropdown";
import Icon from "../../../components/Icon";
import Item from "./Item";

const items = [
  {
    title: "General",
    icon: "home",
    items: [
      "How does it work",
      "How to start with Stacks",
      "Dose it suppport Dark Mode",
      "Does it support Auto-Layout",
      "What is Stacks Design System",
    ],
  },
  {
    title: "Support",
    icon: "circle-and-square",
    items: [
      "How to start with Stacks",
      "Dose it suppport Dark Mode",
      "Does it support Auto-Layout",
      "What is Stacks Design System",
      "How does it work",
      "How to start with Stacks",
    ],
  },
  {
    title: "Hosting",
    icon: "lightning",
    items: [
      "How does it work",
      "How to start with Stacks",
      "Dose it suppport Dark Mode",
      "What is Stacks Design System",
    ],
  },
  {
    title: "Product",
    icon: "pen",
    items: [
      "How does it work",
      "How to start with Stacks",
      "Dose it suppport Dark Mode",
      "Does it support Auto-Layout",
      "What is Stacks Design System",
    ],
  },
];

const Hero = () => {
  const options = [];
  items.map((x) => options.push(x.title));

  const [direction, setDirection] = useState(options[0]);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <h1 className={cn("h2", styles.title)}>About</h1>
          <div className={styles.info}>
            Loreum ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
