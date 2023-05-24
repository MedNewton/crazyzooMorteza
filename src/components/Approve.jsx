import React from 'react';
import { Button } from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css';
import { SetToken, GetToken } from '../hooks/dapp/useToken'
import { SetUSDT, GetUSDT } from '../hooks/dapp/UseUSDT'
import { SetUniswapIntermediary } from '../hooks/dapp/UseUniswap'
import { useNetwork } from 'wagmi'
import SellingZoo from '../components/SellingZoo'
import BuyingZoo from '../components/BuyingZoo'
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import {
    useAccount,
    useConnect
} from 'wagmi'

const Approve = (
    data
) => {
    const { chain, chains } = useNetwork()
    const { address, isConnected } = useAccount()
    const [swapDone, setSwapDone] = useState(true)
    const { swapContractAddress, OtherTokenAddress, isZoo, approvedAmount } = data


    // Convert the amount to a fixed-point string representation
    const amountString = Number(approvedAmount).toFixed();

    // // Multiply the amount by 10^6 (since your token has 6 decimals)
    const ZootokenAmount = ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(6));
    const OthertokenAmount = ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(18));

    const { data: dataZooApprove, isLoading: isLoadingZooApprove, isSuccess: isSuccessZooApprove, write: ZooApprove } = SetToken('approve', [`${swapContractAddress}`, `${ZootokenAmount}`], chain.id)
    const { data: dataTokenApprove, isLoading: isLoadingTokenApprove, isSuccess: isSuccessTokenApprove, write: TokenApprove } = SetUSDT('approve', [`${swapContractAddress}`, `${OthertokenAmount}`], chain.id)


    const handleApprove = async () => {

        if (isZoo) {
            await ZooApprove?.();
        } else {
            await TokenApprove?.();
        }
    };

    useEffect(() => {
        if (isSuccessTokenApprove || isSuccessZooApprove) {
            setSwapDone(false)
        }
    }, [isSuccessTokenApprove, isSuccessZooApprove])

    return (
        <div className="swappingFormWrapper">
            {
                swapDone ?
                    <Button className="swapBtn" onClick={handleApprove}>{"Approve"}</Button>
                    :
                    isZoo ?
                        <SellingZoo
                            isZoo={isZoo}
                            OtherTokenAddress={OtherTokenAddress}
                            approvedAmount={approvedAmount}
                            setSwapDone={setSwapDone}
                        />
                        :
                        <BuyingZoo
                            isZoo={isZoo}
                            OtherTokenAddress={OtherTokenAddress}
                            approvedAmount={approvedAmount}
                            setSwapDone={setSwapDone}
                        />
            }
        </div>
    );
}


export default Approve;


  // const { data : approveUsdt, isLoading : USDTIsLoading, isSuccess: USDTIsSuccess, write: approveUSDT } = SetUSDT('approve',[`${swapAddress}`, `${approvedAmount*1e6}`], OtherTokenApproved)
  // const { data : SellingZooTokenData , isLoading : SellingZooTokenIsLoading, isSuccess: SellingZooTokenIsSuccess, write: SellingZooToken } = SetUniswapIntermediary('SellingZooToken', [`100000`, `0xbd4A347F7c500A540cE16c694f60273F63Bb8978`], ZooSell)
  // const { data : SellingOtherTokenData , isLoading : SellingOtherTokenIsLoading, isSuccess: SellingOtherTokenIsSuccess, write: SellingOtherToken } = SetUniswapIntermediary('SellingOtherToken', [`${approvedAmount}`, `${OtherToken}`], OtherTokenSell)
