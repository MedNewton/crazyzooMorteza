import './App.css';
import { Routes, Route } from 'react-router-dom';
import routes from './pages/index'
import { Context, createContext, useState } from 'react';
import pawIcon from './assets/images/swapping/Paw_coin.png'
import {
    useAccount,
  } from 'wagmi'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext(null);

function App() {

    const { address, connector, isConnected } = useAccount()
 
    
    const swapCurrencies = [

      {
            id: 0,
          name: "ZOO",
          symbol: "zoo",
          logo: pawIcon
      },
      {
            id: 1,
          name: "USDC",
          symbol: "USDC",
          logo: "https://assets.coincap.io/assets/icons/btc@2x.png"
      }
    
      ];

    const [fromCoin, setFromCoin] = useState(swapCurrencies[0]);
    const [toCoin, setToCoin] = useState(swapCurrencies[1]);

    return (

        <>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <UserContext.Provider value={[ fromCoin, setFromCoin, toCoin, setToCoin ]}>
            <Routes >
                {
                    routes.map((data, index) => (
                        <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
                    ))
                }
            </Routes>
        </UserContext.Provider>
        </>
    );
}

export default App;
