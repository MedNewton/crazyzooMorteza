import React from 'react';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';

import { Button } from 'react-bootstrap';

const PresaleAddressBox = props => {

    const data = props.data;

    return (
        <div className='presaleAddressGlassBox row'>
            <div className="col-4 referralRewardsWithdrawWrapper">
                <Button className="referralRewardsWithdrawBtn">Address</Button>
            </div>
            <div className="col-8 referralRewardsWrapper">
                <h5 className="presaleAddressLabel">0x5sd5e2d...</h5>
                
            </div>
        </div>
    );
}

PresaleAddressBox.propTypes = {
    data: PropTypes.array.isRequired,
}


export default PresaleAddressBox;