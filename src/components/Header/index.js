import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Notification from "./Notification";
import User from "./User";
import { connectWallet, getCurrentWalletConnected } from "../../interact.js";

const nav = [
  {
    url: "/#",
    title: "Collections",
  },
  {
    url: "/about",
    title: "About",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [visibleConnect, setVisibleConnect] = useState(true);
  const [search, setSearch] = useState("");
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("No connection to the network.");

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);

    if(walletResponse.address != "") setVisibleConnect(false)
    else setVisibleConnect(true)
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setMessage("👆🏽 Write a message in the text-field above.");
        } else {
          setVisibleConnect(true)
          setWallet("");
          alert("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      alert("🦊 You must install Metamask, a virtual Ethereum wallet, in your browser. https://metamask.io/download.html")
      setMessage(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }


  const onHandleWallet = (e) => {
    //alert('handlewallet')
    connectWalletPressed();
  };
  const handleNavButton = () => {
    setVisibleNav(!visibleNav);
  };

  useEffect(async () => {
    // const message = await loadCurrentMessage();
    // setMessage(message);
    // addSmartContractListener();
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);
    if(address == "") setVisibleConnect(true)
    else setVisibleConnect(false)
    addWalletListener();
  }, []);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link className={styles.logo} to="/">
          <h2>101010</h2>
        </Link>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <Link
                className={styles.link}
                // activeClassName={styles.active}
                onClick={handleNavButton}
                to={x.url}
                key={index}
              >
                {x.title}
              </Link>
            ))}
          </nav>
        </div>
        {/* <Link
          className={cn("button-stroke button-small", styles.button,{[styles.switch]: !visibleConnect})}
          to="/#"
          onClick={onHandleWallet}
        >
          Connect Wallet
        </Link> */}
        <User className={cn(styles.user)} walletAddress = {walletAddress} visibleConnect={visibleConnect} setVisibleConnect = {setVisibleConnect} />
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;
