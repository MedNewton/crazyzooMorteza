import React from 'react';
import { Button } from 'react-bootstrap';
import {
    useAccount,
    useConnect,
    useNetwork
} from 'wagmi'



const MintingRandom = (
    data
    ) => {
        
        
    const { chain, chains } = useNetwork()
    const {randomNft} = data
    const { address, isConnected } = useAccount()
    
    
    const handleMint = async () => {
        // await mint?.();
    };

    return (
        <div className="mintBtnWrapper">
            <Button className="mintBtn" >Mint</Button>:

        </div>

    );

}



export default MintingRandom;