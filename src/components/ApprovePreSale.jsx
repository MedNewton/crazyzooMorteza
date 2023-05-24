import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
import {
    useAccount,
    useConnect,
    useNetwork
} from 'wagmi'




const ApprovePreSale = props => {
    const data = props.data;
        
    
    
    
    const handleMint = async () => {
        // await TokenfeeApprove?.();
    };

    return (
        <div>
            {
            //    isSuccessTokenfee ?
            //    <BuyingPreSale data={data}/> :
               <Button className="swapBtn" >Approve</Button>
            }

        </div>

    );

}

ApprovePreSale.propTypes = {
    data: PropTypes.array.isRequired,
}


export default ApprovePreSale;