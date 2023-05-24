import React from 'react';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';

import { Button } from 'react-bootstrap';

const ReferralCodeGlassBox = props => {

    const data = props.data;

    return (
        <div className='referralCodeGlassBox'>
            <div className="referralCodeBoxTitleWrapper">Referral Link</div>
            <div className="row referralCodeFormWrapper">
                <div className="referralCodeBtnWrapper">
                    <Button className="referralCodeBtn">Copy Referral Link</Button>
                </div>
                <div className="referralCodeInputWrapper">
                <div className="referralCodeBox">
                        <h5 className='referralCode'>{data[0].link.toString()}</h5>
                        <h5 className='referralCodeSmallCopyBtn'>Copy</h5>
                    </div>
                </div>
            </div>
        </div>
    );

}

ReferralCodeGlassBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default ReferralCodeGlassBox;