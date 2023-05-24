import React from 'react';
import { Button } from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css';


const BuyingZoo = (
    data
) => {
    
    
    const handleApprove = async () => {
        // await SellingOtherToken?.();
    };

    
    return (
        <div className="swappingFormWrapper">
                <Button className="swapBtn">{"Swap"}</Button>
        </div>
    );
}


export default BuyingZoo;


  // const { data : approveUsdt, isLoading : USDTIsLoading, isSuccess: USDTIsSuccess, write: approveUSDT } = SetUSDT('approve',[`${swapAddress}`, `${approvedAmount*1e6}`], OtherTokenApproved)
  // const { data : SellingZooTokenData , isLoading : SellingZooTokenIsLoading, isSuccess: SellingZooTokenIsSuccess, write: SellingZooToken } = SetUniswapIntermediary('SellingZooToken', [`100000`, `0xbd4A347F7c500A540cE16c694f60273F63Bb8978`], ZooSell)
  // const { data : SellingOtherTokenData , isLoading : SellingOtherTokenIsLoading, isSuccess: SellingOtherTokenIsSuccess, write: SellingOtherToken } = SetUniswapIntermediary('SellingOtherToken', [`${approvedAmount}`, `${OtherToken}`], OtherTokenSell)
