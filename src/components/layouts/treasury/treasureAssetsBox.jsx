import React from 'react';
import PropTypes from 'prop-types'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';

const TreasureAssetsBox = props => {
    const data = props.data;

    return (
        <div className='treasureAssetsGlassBox'>
            <div className="treasureBoxTitleWrapper">Assets</div>
            <div className="treasureAssetsDataWrapper">
                <div className="treasureAssetsDataGlassBox">
                    <h5 className="BTCBTreasuryTitle">BTCB Treasury</h5>
                    <div className="balanceWrapper">
                        <h5 className="balanceTitle">Balance BTCB</h5>
                        <h5 className="balanceData">{data[0].balance_BTCB}</h5>
                    </div>
                    <div className="balanceWrapper">
                        <h5 className="balanceTitle">Balance USDT</h5>
                        <h5 className="balanceData">{data[0].balance_USDT}</h5>
                    </div>
                    <Button className="checkAssetBtn">Check Asset</Button>
                </div>
                <div className="treasureAssetsDataGlassBox">
                    <h5 className="BTCBTreasuryTitle">BTCB Treasury</h5>
                    <div className="balanceWrapper">
                        <h5 className="balanceTitle">Balance BTCB</h5>
                        <h5 className="balanceData">{data[0].balance_BTCB}</h5>
                    </div>
                    <div className="balanceWrapper">
                        <h5 className="balanceTitle">Balance USDT</h5>
                        <h5 className="balanceData">{data[0].balance_USDT}</h5>
                    </div>
                    <Button className="checkAssetBtn">Check Asset</Button>
                </div>
                <div className="treasureAssetsDataGlassBox">
                    <h5 className="BTCBTreasuryTitle">BTCB Treasury</h5>
                    <div className="balanceWrapper">
                        <h5 className="balanceTitle">Balance BTCB</h5>
                        <h5 className="balanceData">{data[0].balance_BTCB}</h5>
                    </div>
                    <div className="balanceWrapper">
                        <h5 className="balanceTitle">Balance USDT</h5>
                        <h5 className="balanceData">{data[0].balance_USDT}</h5>
                    </div>
                    <Button className="checkAssetBtn">Check Asset</Button>
                </div>
            </div>
        </div>
    );
}

TreasureAssetsBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default TreasureAssetsBox;