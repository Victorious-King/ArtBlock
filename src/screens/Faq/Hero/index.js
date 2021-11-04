import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Icon from "../../../components/Icon";



const Hero = () => {

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <h3 className={cn("h3", styles.Gtitle)}>About</h3>
          <div className={styles.info}>
          101010.ART is a generative art platform enabling cross collaboration between the world's best artists
          and creative developers to create large scale collections. Our focus is to create highly creative
          work that has a combined top tier value. By encouraging artists and coders to collaborate we are
          opening a whole new of possibilities, rather than those which are purely concepted from a code
          based point of view. 
          </div>
          <h4 className={cn("h4", styles.title)}>The Art</h4>
          <div className={styles.info}>
            • Unique large scale collections, based around cross collaboration between the worlds best artists
            and coders.<br/>
            • Curated for the highest quality. 
          </div>
          <h4 className={cn("h4", styles.title)}>Community</h4>
          <div className={styles.info}>
            • We aim to bring together the most creative and unique thinkers in the NFT space.  
          </div>
          <h4 className={cn("h4", styles.title)}>Roadmap</h4>
          <div className={styles.info}>
          • Voltaine x Viktor initial release<br/>
          • New artists invited to join 101010. A portion of sales income will be used to create a 'Kitty' to help the
          creation of future projects.<br/>
          • Value added the regular collectors of 101010.ART collections.<br/>
          • Move to auction 101010.ART at Sotheby's and other high value marketplaces.
          </div>
          <h4 className={cn("h4", styles.title)}>The Blockchain</h4>
          <div className={styles.info}>
          The first collections will minted on the Ethereum blockchain. Other chains such as Tezos will also be
          considered for future special drops. The collections will be hosted on OpenSea. 
          </div>
          <h4 className={cn("h4", styles.title)}>Founder and Team </h4>
          <div className={styles.info}>
          101010.ART, founded by VOLTAINE. is made up of a team of creative developers, blockchain
          developers, artists, designers, project managers and marketing. 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
