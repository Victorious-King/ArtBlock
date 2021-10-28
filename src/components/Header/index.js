import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Notification from "./Notification";
import User from "./User";
import { connectWallet, getCurrentWalletConnected } from "../../interact.js";
import { useWeb3React } from "@web3-react/core";

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

  const { account } = useWeb3React();

  const handleNavButton = () => {
    setVisibleNav(!visibleNav);
  };

  useEffect(async () => {
    if (account) {
      setWallet(account);
      setVisibleConnect(false);
    } else setVisibleConnect(true);
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
            <a
              className={styles.link}
              // activeClassName={styles.active}
              onClick={handleNavButton}
              href={"https://twitter.com/101010Art"}
              target="_blank"
              key={"3"}
            >
              <Icon name={'twitter'} size="24" />
            </a>
            <a
              className={styles.link}
              // activeClassName={styles.active}
              onClick={handleNavButton}
              href={"https://discord.gg/evYvkhctca"}
              target="_blank"
              key={"4"}
            >
              <Icon name={'discord'} size="24" />
            </a>
          </nav>
        </div>
        {/* <Link
          className={cn("button-stroke button-small", styles.button,{[styles.switch]: !visibleConnect})}
          to="/#"
          onClick={onHandleWallet}
        >
          Connect Wallet
        </Link> */}
        <User
          className={cn(styles.user)}
          walletAddress={walletAddress}
          visibleConnect={visibleConnect}
          setVisibleConnect={setVisibleConnect}
        />
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;
