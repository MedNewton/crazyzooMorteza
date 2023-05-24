import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {
    useAccount,
    useNetwork
} from 'wagmi'
import {SetStaking} from '../../../hooks/dapp/UseStaking'


const Feed = (
    data
    ) => {
        
        
    const { chain, chains } = useNetwork()
    const {TotalstakedTokens, stakedTokens} = data
    const { address, isConnected } = useAccount()
    const [ nftToStaked, setNftToStaked ] = useState([])
    
    const { data: dataFeedYourAnimal, isLoading: isLoadingFeedYourAnimal, isSuccess: isSuccessFeedYourAnimal, write: FeedYourAnimal } = SetStaking('feedYourAnimal', [`${nftToStaked[nftToStaked.length-1]}`], chain?.id)
    
    useEffect(()=>{
        setNftToStaked(stakedTokens)
    })
    const handlefeed = async () => {

        if(TotalstakedTokens?.toString() < 1){
            alert("you have zero staked nfts")
        } else {
            await FeedYourAnimal?.();
        }

    };
    
    return (
        <div className="myNFTsButtonsWrapper">
            <Button className="MyNFTsStakeBtn"   onClick={handlefeed} >feed</Button>:

        </div>

    );

}



export default Feed;