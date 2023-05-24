import React from 'react';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';

import { Button } from 'react-bootstrap';
import { BiWalletAlt } from "react-icons/bi";

const ReferralHistoryBox = props => {
    const data = props.data;

    return (
        <div className="referralHistoryGlassBox row">
            <h5 className="referralHistoryBoxTitle">History</h5>
            <div className="referralHistoryTH">
                <BiWalletAlt className='THIcon' size={20} />
                <h5>Wallet</h5>
                <h5>Referral Level</h5>
                <h5>Referral Amount</h5>
            </div>
            {
                data.map((historyItem, index) => (
                    <div key={index} className="referralHistoryTR">
                        <BiWalletAlt color='#B4DC82' size={20} />
                        <h5>{historyItem.wallet.toString()}</h5>
                        <h5>Level {historyItem.level.toString()}</h5>
                        <h5>${historyItem.amount.toString}</h5>
                    </div>
                ))
            }

        </div>
    );
}

ReferralHistoryBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default ReferralHistoryBox;