import React from 'react';
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap";
import pawIcon from '../../assets/images/swapping/Paw_coin.png'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import axios from 'axios';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useEffect, useState } from 'react';

const formatResult = (item) => {
    return (
        <>
            <div className='fromCoinBtn'>
                <img src={item.logo} className="swapCoinLogo" alt="" />
                <span style={{ display: 'block', textAlign: 'left', fontFamily: "CircularMedium", color: "#000" }}>{item.name}</span>
            </div>
        </>
    )
}

const FromSwapModal = (props) => {

    const hide = props.onHide;

    const coins = [
        {
            id: 0,
            name: "Zoo",
            symbol: "zoo",
            logo: pawIcon
        }
    ]

    const [coinsList, setCoinsList] = useState(coins);

    


    async function getCoins(){
        await axios.get('https://api.coincap.io/v2/assets/').then(function(response){
            let coinsData = response.data.data;
            for(let id in coinsData){
                let coinObject = {
                    id: coinsData[id].rank + 1,
                    name: coinsData[id].name,
                    symbol: coinsData[id].symbol,
                    logo: "https://assets.coincap.io/assets/icons/"+coinsData[id].symbol.toString().toLowerCase()+"@2x.png"
                }
                coinsList.push(coinObject)
            }
        })
    }


    useEffect(()=>{
        getCoins()
    },[])

    

    const [fromCoin, setFromCoin, toCoin, setToCoin] = useContext(UserContext)


    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        
    }

    const handleOnHover = (result) => {
        // the item hovered
        
    }

    const handleOnSelect = (item) => {
        // the item selected
        setFromCoin(item)
        hide()
    }

    const handleOnFocus = () => {
        
    }

    

    return (

        <Modal
            show={props.show}
            onHide={props.onHide}
        >
            <Modal.Header closeButton></Modal.Header>

            <div className="modal-body swapModal space-y-20 pd-20">


                <ReactSearchAutocomplete
                    items={coinsList}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    formatResult={formatResult}
                    autoFocus
                />

                <div className="coinsList">
                    <div className="coinsScrollableList">
                    {
                        coinsList.map((coin, index) => {
                            return(
                                <div className='fromCoinBtn' key={index} onClick={()=>{setFromCoin(coin);hide()}}>
                                <img src={coin.logo} className="swapCoinLogo" alt="" />
                                <span style={{ display: 'block', textAlign: 'left', fontFamily: "CircularMedium", color: "#fff" }}>{coin.name}</span>
                            </div>
                            )
                        })
                    }
                    </div>
                </div>


            </div>
        </Modal>

    );
};

export default FromSwapModal;
