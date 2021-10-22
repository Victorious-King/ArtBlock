import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Users from "./Users";
import Control from "./Control";
import Options from "./Options";
import Accept from "./Control/Accept";

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.bg}>
            <div className={styles.preview}>
              <img
                srcSet="/images/content/item-pic@2x.jpg 2x"
                src="/images/content/item-pic.jpg"
                alt="Item"
              />
            </div>
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>The amazing art</h1>
            <div className={styles.counter}>Veli T</div>
            <div className={styles.info}>
              This NFT Card will give you Access to Special Airdrops. To learn
              more about UI8 please visit{" "}
            </div>
            <Accept />
            <div className={styles.info}>
              <div className={styles.info}>
              “mono no aware” is an exploration of change at the borders between existence and emptiness. Shapes and colors appear, twisting and fading gradually into new forms. The evolution of the system creates unpredictable and surprising emergent patterns, as deviations from neat symmetry quickly evolve into chaos. The animation is a cellular automaton running with no pre-defined end — but some patterns don’t have what it takes to survive indefinitely. That’s okay; not everything lasts forever (but the pieces will restart in this case). [Click] to restart. The Level of Detail (LOD) on each animation can be adjusted using [Left Arrow] for less, or [Right Arrow] for more, to allow a customized visual experience and achieve the desired framerate for various devices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
