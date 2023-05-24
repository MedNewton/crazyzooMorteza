import React from 'react';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';

import { Button } from 'react-bootstrap';

const ReferralReawrdsBox = props => {

    const data = props.data;

    return (
        <div className='referralRewardsGlassBox row'>
            <div className="col-8 referralRewardsWrapper">
                <h5 className="referralRewardsLabel">ReferralRewards available</h5>
                <h5 className="referralRewards">${data[0].rewards}</h5>
            </div>
            <div className="col-4 referralRewardsWithdrawWrapper">
                <Button className="referralRewardsWithdrawBtn">Withdraw</Button>
            </div>
        </div>
    );
}

ReferralReawrdsBox.propTypes = {
    data: PropTypes.array.isRequired,
}


export default ReferralReawrdsBox;