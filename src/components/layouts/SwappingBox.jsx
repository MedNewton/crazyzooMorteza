import React from 'react';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import pawIcon from '../../assets/images/swapping/Paw_coin.png'
import usdtIcon from '../../assets/images/swapping/USDT_coin.png'
import SwapModal from './swapModal';

const SwappingBox = props => {

    const swapCurrencies = [
        {
            name: "ZOO",
            symbol: "zoo",
            logo: pawIcon
        },
        {
            name: "USDT",
            symbol: "usdt",
            logo: usdtIcon
        }

    ];

    const [fromCoin, setFromCoin] = useState(swapCurrencies[0]);
    const [toCoin, setToCoin] = useState(swapCurrencies[1]);
    
    const [swapModalShow, setSwapModalShow] = useState(false);


    const modalShow = props.modalShow


    const data = props.data;
    return (

        <div className="mintingGlassBox">
            <div className="mintingBoxTitleWrapper">Swap Tokens</div>
            <div className="row swappingFormWrapper">
                <div className="swapInBox">
                    <h5 className="swapInBoxTitle">Input</h5>
                    <div className="swapInFormWrapper">
                        <Button className='fromCoinBtn' onClick={modalShow}>
                            <img src={fromCoin.logo} className="swapCoinLogo" alt="" />
                            <span>{fromCoin.name}</span>
                        </Button>
                        <div className="maxswapIn">50% max</div>
                        <input type="number" id='swapInInput' className='swapInInput' placeholder='0.0' />

                    </div>

                </div>
                <div className="swapOutBox">
                    <h5 className="swapOutBoxTitle">Output</h5>
                    <div className="swapOutFormWrapper">
                        <Button className='toCoinBtn'>
                            <img src={toCoin.logo} className="swapCoinLogo" alt="" />
                            <span>{toCoin.name}</span>
                        </Button>
                        <div className="maxswapIn">50% max</div>
                        <input type="number" id='swapOutInput' className='swapOutInput' placeholder='0.0' readOnly />

                    </div>

                </div>
                <Button className="swapBtn">Approve</Button>
            </div>
            
        </div>
        
    );

}

SwappingBox.propTypes = {
    data: PropTypes.array.isRequired,
    modalShow: PropTypes.func.isRequired
}

export default SwappingBox;