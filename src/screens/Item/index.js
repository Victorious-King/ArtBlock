import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import cn from "classnames";
import styles from "./Item.module.sass";
import Users from "./Users";
import { Range, getTrackBackground } from "react-range";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import env from "react-dotenv";
import {ethers, utils} from 'ethers'
//const ethers = require('ethers');

const contract = require("../../artifacts/101010art.json");
const contractAddress = "0xE10a6344523DCc1Ba9cD9c05d2C7b7051C53b452";

const contractAbi = contract.abi;
const chainID = 4;

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [values, setValues] = useState([1]);
  const STEP = 1;
  const MIN = 1;
  const MAX = 20;
  const { id } = useParams();
  console.log(id);
  const { account, connector, activate, library, chainId } = useWeb3React();

  const mintNFT = async(counts) => {
    
    let overrides = {
      value: ethers.utils.parseEther((counts*0.1).toString())
    }
    let provider;
    window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));
    const signer = provider.getSigner();
    let nftContract = new ethers.Contract(contractAddress, contractAbi, signer)
    //let ownerOfNftAddress = await nftContract.ownerOf(0);
    
    try{
      let tx = await nftContract.mint(counts,overrides)
      
      alert("Successfuly minted")
    }
    catch(e){
      alert(e)
    }
    //console.log(tx)
    //let tx = await nftContract.reserve('reserve','1',overrides)
    //console.log(tx)
  }

  const mintProc = () => {
    if(!account){    
      alert("Please connect the wallet")
    }
    //setVisible(!visible);
    //setVisibleConnect(false);
    else {
      if(chainId!=chainID ){
        alert('Wrong Network')
        return;
      }
      
      mintNFT(values[0]);
    }
  };

  useEffect(async () => {
    if (id) {
      const response = await fetch(`https://ipfs.io/ipfs/${id}/1.json`);
      if (response.ok) {
        let resData = await response.json();
        setImgUrl(resData.image);
      }
    }
  }, [id]);
  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.bg}>
            <div className={styles.preview}>
              <img src={imgUrl} alt="Item" />
            </div>
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>The amazing art</h1>
            <div className={styles.counter}>Veli T</div>
            <div className={styles.info}>
              This NFT Card will give you Access to Special Airdrops. To learn
              more about UI8 please visit{" "}
            </div>
            <div className={styles.btns}>
            <div className={styles.range}>
              <div className={styles.label}>Amount</div>
              <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: "36px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "8px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values,
                          colors: ["#3772FF", "#E6E8EC"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "24px",
                      width: "24px",
                      borderRadius: "50%",
                      backgroundColor: "#3772FF",
                      border: "4px solid #FCFCFD",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-33px",
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "18px",
                        fontFamily: "Poppins",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        backgroundColor: "#141416",
                      }}
                    >
                      {values[0]}
                    </div>
                  </div>
                )}
              />
              <div className={styles.scale}>
                <div className={styles.number}>1</div>
                <div className={styles.number}>20</div>
              </div>
            </div>
              <button className={cn("button", styles.button)} onClick={mintProc} >Mint</button>
            </div>
            <div className={styles.info}>
              <div className={styles.info}>
                “mono no aware” is an exploration of change at the borders
                between existence and emptiness. Shapes and colors appear,
                twisting and fading gradually into new forms. The evolution of
                the system creates unpredictable and surprising emergent
                patterns, as deviations from neat symmetry quickly evolve into
                chaos. The animation is a cellular automaton running with no
                pre-defined end — but some patterns don’t have what it takes to
                survive indefinitely. That’s okay; not everything lasts forever
                (but the pieces will restart in this case). [Click] to restart.
                The Level of Detail (LOD) on each animation can be adjusted
                using [Left Arrow] for less, or [Right Arrow] for more, to allow
                a customized visual experience and achieve the desired framerate
                for various devices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
