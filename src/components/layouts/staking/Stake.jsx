import React from 'react';
import { Button } from 'react-bootstrap';
import {
    useAccount,
    useConnect,
    useNetwork
} from 'wagmi'
import {SetStaking, GetStaking} from '../../../hooks/dapp/UseStaking'
import {GetNFT} from '../../../hooks/dapp/UseNFT'

const Stake = (
    data
    ) => {
        
        
    const { chain, chains } = useNetwork()
    const {mintedTokens: userTokens} = data
    const { address, isConnected } = useAccount()


    const { data: dataStakeNFT, isLoading: isLoadingStakeNFT, isSuccess: isSuccessStakeNFT, write: StakeNFT } = SetStaking('stakeNFT', [userTokens], chain?.id)
    
    const handleStake = async () => {
        if(userTokens.length < 1){
            alert("no nfts to be staked")
        } else {
            await StakeNFT?.();
        }
    };
    
    return (
        <div className="myNFTsButtonsWrapper">
            <Button className="mintBtn" disabled={isLoadingStakeNFT} onClick={handleStake} >Stake</Button>
        </div>

    );

}



export default Stake;