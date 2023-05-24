import React from 'react';
import { Button } from 'react-bootstrap';
import {
    useAccount,
    useConnect,
    useNetwork
} from 'wagmi'

import MintingRandom from './MintingRandom';




const ApproveNFT = (
    data
    ) => {
        
    
    const { chain, chains } = useNetwork()
    const {randomNft,NFTContractAddress,NFTfee} = data


    // const amountString = NFTfee ? Number(NFTfee).toFixed() : 0;
    // const _NFTfee = amountString ? ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(18)) : 0;
    
    
    // const { data: dataNFTApprove, isLoading: isLoadingNFTApprove, isSuccess: isSuccessNFTApprove, write: NFTApprove } = SetUSDT('approve', [`${NFTContractAddress}`, `${NFTfee}`], chain.id)

    
    const handleMint = async () => {
        // await NFTApprove?.();
    };

    return (
        <div className="mintBtnWrapper">
            {
               isSuccessNFTApprove ?
               <MintingRandom randomNft={randomNft}/> :
               <Button className="mintBtn" >Approve</Button>
            }

        </div>

    );

}



export default ApproveNFT;