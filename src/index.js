import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, goerli, arbitrumGoerli } from "wagmi/chains";


const chains = [arbitrumGoerli, goerli]
const projectId = '4cf5553433a887b55497ae6ccffc2a9b'

// configure chains
// const chains = [polygon];
// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: projectId }),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter >
    <WagmiConfig client={wagmiClient}>
        <ScrollToTop />
        <App />
    </WagmiConfig>

    <Web3Modal
          // projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
          projectId={projectId}
          ethereumClient={ethereumClient}
          themeColor="green"
          themeMode="dark"
          themeBackground="gradient"
        />

  </BrowserRouter>
);

