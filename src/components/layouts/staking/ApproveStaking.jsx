import React from 'react';
import { Button } from 'react-bootstrap';
import {
    useAccount,
    useConnect,
    useNetwork
} from 'wagmi'
import { SetNFT, GetNFT} from '../../../hooks/dapp/UseNFT';
import { GetStaking} from '../../../hooks/dapp/UseStaking'
import { useEffect, useState } from 'react';
import config from '../../../config'
import Stake from './Stake'
import  Feed  from './Feed';
import { SetUSDT } from '../../../hooks/dapp/UseUSDT'



const ApproveStaking = (
    data
    ) => {
        
    
    const { chain, chains } = useNetwork()
    const { address, isConnected } = useAccount()
    const [stakingContractAddress , setStakingContractAddress] = useState('')
    const [TotalstakedTokens , setTotalstakedTokens] = useState()
    const [foodPrice, setFoodPrice] = useState(0)
    const [ mintedTokens, setMintedTokens ] = useState()
    const [stakedTokens,  setStakedTokens ] = useState()
    
    
    const MTokens = []
    const STokens = []
    for (let tokenId = 1; tokenId <= 30; tokenId++) {
        const  { data : dataGetTokens, isError: isErrorGetTokens, isLoading: isLoadingGetTokens } = GetNFT('ownerOf',chain.id,[`${tokenId}`])
        if(dataGetTokens==address){
            MTokens.push(tokenId)
        }
        const { data: StakedNfts, isError : isErrorStakedNfts, isLoading: isLoadingStakedNfts } = GetStaking('stakedNfts',chain?.id,[`${address}`, `${tokenId}`])
        if(StakedNfts){
            STokens.push(StakedNfts[0].toString())
        }
    }
    console.log("*******************************",MTokens)

    const { data: FoodPrices, isError : isErrorFoodPrices, isLoading: isLoadingFoodPrices } = GetStaking('foodPrices',chain?.id,[`${1}`])
    const { data: StakerInfo, isError : isErrorStakerInfo, isLoading: isLoadingStakerInfo } = GetStaking('userStakeInfo',chain?.id,[`${address}`])
    const [TotalTokensStaked, availableRewards] = StakerInfo || [undefined, undefined];
    const { data: isApprovedForAll, isError:isApproved, isLoading:isLoadingIsApproved } = GetNFT('isApprovedForAll',chain.id,[`${address}`,`${stakingContractAddress}`])
    const { data: GetFeeForId, isError : isErrorGetFeeForId, isLoading: isLoadingGetFeeForId } = GetNFT('getFeeForId',chain?.id,[`${1}`])
    
    
    const { data: dataApproveForFeed, isLoading: isLoadingApproveForFeed, isSuccess: isSuccessApproveForFeed, write: ApproveForFeed } = SetUSDT('approve', [`${stakingContractAddress}`, `${foodPrice}`], chain.id)
    const { data: dataApprovalForAll, isLoading: isLoadingApprovalForAll, isSuccess: isSuccessApprovalForAll, write: ApprovalForAll } = SetNFT('setApprovalForAll',[`${stakingContractAddress}`,'true'],chain.id)
    

    useEffect(()=>{
        setFoodPrice(FoodPrices)
    },[FoodPrices])
    useEffect(()=>{
        setTotalstakedTokens(TotalTokensStaked)
        setMintedTokens(MTokens)
        setStakedTokens(STokens)
    },[StakerInfo])
    useEffect(()=>{
        if(chain!= undefined){
            setStakingContractAddress(config?.ContractsConfig?.[chain?.id]?.ZOOSTAKING ?? '')
        }
    },[isConnected])
    
    const handleApproveForAll = async () => {
        await ApprovalForAll?.();
    };
    const handleApproveForFeed = async () => {
        await ApproveForFeed?.();
    };

    return (
        <div className="myNFTsButtonsWrapper">
            {
               isApprovedForAll || isSuccessApprovalForAll ?
               <Stake mintedTokens={mintedTokens} /> :
               <Button className="mintBtn" disabled={isLoadingApprovalForAll} onClick={handleApproveForAll} >Approve</Button>
            }
            {
               isSuccessApproveForFeed ?
               <Feed TotalstakedTokens={TotalstakedTokens} stakedTokens={stakedTokens} /> :
               <Button className="mintBtn" disabled={isLoadingApproveForFeed} onClick={handleApproveForFeed} >Approve</Button>
            }
        </div>

    );

}



export default ApproveStaking;