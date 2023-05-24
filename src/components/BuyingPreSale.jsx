import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
import {
    useAccount,
    useNetwork
} from 'wagmi'
import { useEffect, useState } from 'react';
import { SetPreSale } from '../hooks/dapp/UsePreSale';
import { SetNFT, GetNFT } from '../hooks/dapp/UseNFT'
import { ethers } from 'ethers';


const BuyingPreSale = (
    data
) => {
        
        
    const { chain, chains } = useNetwork()
    const {inputAmount } = data
    const { address, isConnected } = useAccount()
    

    const amountString = inputAmount ? Number(inputAmount).toFixed() : 0;
    const _Tokenfee = amountString ? ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(18)) : 0;
    
    const { data: BalanceOf, isError, isLoading } = GetNFT('balanceOf',chain.id,[`${address}`])
    const { data: dataBuyZooTokens, isLoading: isLoadingBuyZooTokens, isSuccess: isSuccessBuyZooTokens, write: buyZooTokens } = SetPreSale('buyZooTokens', [`${address}`,`${_Tokenfee}`], chain.id)
    
    const handleMint = async () => {
        await buyZooTokens?.();
    };

    return (
        <div >
            <Button className="swapBtn" disabled={isLoadingBuyZooTokens} onClick={handleMint} >Buy Tokens</Button>:

        </div>

    );

}

export default BuyingPreSale;