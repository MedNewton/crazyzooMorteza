import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
import {
    useAccount,
    useConnect,
    useNetwork
} from 'wagmi'
import { SetUSDT } from '../hooks/dapp/UseUSDT'
import BuyingPreSale from './BuyingPreSale'
import { ethers } from 'ethers';



const ApprovePreSale = props => {
    const data = props.data;
        
    
    const { chain, chains } = useNetwork()
    const {PreSaleContractAddress,tokenPriceUSDT,inputAmount} = data[0]

    const amountString = tokenPriceUSDT ? Number(tokenPriceUSDT).toFixed() : 0;
    const _Tokenfee = amountString ? ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(18)) : 0;
    
    
    const { data: dataTokenfee, isLoading: isLoadingTokenfee, isSuccess: isSuccessTokenfee, write: TokenfeeApprove } = SetUSDT('approve', [`${PreSaleContractAddress}`, `${_Tokenfee}`], chain.id)

    
    const handleMint = async () => {
        // await TokenfeeApprove?.();
    };

    return (
        <div>
            {
            //    isSuccessTokenfee ?
            //    <BuyingPreSale data={data}/> :
               <Button className="swapBtn" onClick={handleMint} >Approve</Button>
            }

        </div>

    );

}

ApprovePreSale.propTypes = {
    data: PropTypes.array.isRequired,
}


export default ApprovePreSale;