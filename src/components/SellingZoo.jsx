import React from 'react';
import { Button } from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css';
import { SetToken, GetToken } from '../hooks/dapp/useToken'
import { SetUSDT } from '../hooks/dapp/UseUSDT'
import { SetUniswapIntermediary } from '../hooks/dapp/UseUniswap'
import { useNetwork } from 'wagmi'
import { useEffect  } from 'react';

const SellingZoo = (
    data
) => {
    const { chain, chains } = useNetwork()
    const { OtherTokenAddress, isZoo, approvedAmount, setSwapDone } = data
    
    const { data : dataSellingZooToken, isLoading : isLoadingSellingZooToken, isSuccess: isSuccessSellingZooToken, write: SellingZooToken } = SetUniswapIntermediary('SellingZooToken',[`${approvedAmount*1e6}`,`${OtherTokenAddress}`], chain.id)
    
    const handleApprove = async () => {
        await SellingZooToken?.();
    };

    useEffect(()=>{

        if(isSuccessSellingZooToken){
            setSwapDone(false)
        }

    },[isSuccessSellingZooToken])
    
    return (
        <div className="swappingFormWrapper">
                <Button className="swapBtn" onClick ={handleApprove}>{"Swap"}</Button>
        </div>
    );
}


export default SellingZoo;


  // const { data : approveUsdt, isLoading : USDTIsLoading, isSuccess: USDTIsSuccess, write: approveUSDT } = SetUSDT('approve',[`${swapAddress}`, `${approvedAmount*1e6}`], OtherTokenApproved)
  // const { data : SellingZooTokenData , isLoading : SellingZooTokenIsLoading, isSuccess: SellingZooTokenIsSuccess, write: SellingZooToken } = SetUniswapIntermediary('SellingZooToken', [`100000`, `0xbd4A347F7c500A540cE16c694f60273F63Bb8978`], ZooSell)
  // const { data : SellingOtherTokenData , isLoading : SellingOtherTokenIsLoading, isSuccess: SellingOtherTokenIsSuccess, write: SellingOtherToken } = SetUniswapIntermediary('SellingOtherToken', [`${approvedAmount}`, `${OtherToken}`], OtherTokenSell)
