import React from 'react';
import { Button } from 'react-bootstrap';
import {
    useAccount,
    useConnect,
    useNetwork
} from 'wagmi'
import { SetNFT, GetNFT } from '../hooks/dapp/UseNFT'


const MintingRandom = (
    data
    ) => {
        
        
    const { chain, chains } = useNetwork()
    const {randomNft} = data
    const { address, isConnected } = useAccount()
    
    const { data: BalanceOf, isError, isLoading } = GetNFT('balanceOf',chain?.id,[`${address}`])
    const { data: dataMint, isLoading: isLoadingMint, isSuccess: isSuccessMint, write: mint } = SetNFT(randomNft, [`${address}`], chain?.id)
    
    const handleMint = async () => {
        await mint?.();
    };

    return (
        <div className="mintBtnWrapper">
            <Button className="mintBtn" disabled={isLoadingMint} onClick={handleMint} >Mint</Button>:

        </div>

    );

}



export default MintingRandom;