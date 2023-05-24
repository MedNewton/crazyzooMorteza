import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
import {
    useAccount,
    useNetwork
} from 'wagmi'
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';


const BuyingPreSale = (
    data
) => {
        
        
    const { chain, chains } = useNetwork()
    const {inputAmount } = data
    const { address, isConnected } = useAccount()
    

    
    const handleMint = async () => {
        // await buyZooTokens?.();
    };

    return (
        <div >
            <Button className="swapBtn"  >Buy Tokens</Button>:

        </div>

    );

}

export default BuyingPreSale;