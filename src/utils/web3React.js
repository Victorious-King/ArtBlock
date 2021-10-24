import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ethers } from "ethers";
//import getNodeUrl from "./getRpcUrl";

const POLLING_INTERVAL = 12000;
const rpcUrl = 'https://ropsten.infura.io/v3/b54cce4b8d564b0b9f9e84e0cdd8efa2'//getNodeUrl();
const chainId = 3 //parseInt(process.env.REACT_APP_CHAIN_ID, 10);

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  qrcode: true,
  //bridge: "https://bridge.walletconnect.org",
  pollingInterval: POLLING_INTERVAL,
});

export const connectorsByName = {
    Injected: injected,
    WalletConnect: walletconnect
};

export const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

export const signMessage = async (provider, account, message) => {
    if (window.BinanceChain) {
      const { signature } = await window.BinanceChain.bnbSign(account, message)
      return signature
    }
  
    /**
     * Wallet Connect does not sign the message correctly unless you use their method
     * @see https://github.com/WalletConnect/walletconnect-monorepo/issues/462
     */
    if (provider.provider?.wc) {
      const wcMessage = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message))
      const signature = await provider.provider?.wc.signPersonalMessage([wcMessage, account])
      return signature
    }
  
    return provider.getSigner(account).signMessage(message)
  }
