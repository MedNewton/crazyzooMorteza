import React from 'react';
import PropTypes from 'prop-types'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';

const TreasureBox = props => {
    const data = props.data;
    return (
        <div className='treasureGlassBox'>
            <div className="treasureBoxTitleWrapper">Crazy Zoo Treasure</div>
            <div className="treasureDataWrapper">
                <div className="treasureDataGlassBox">
                    <div className="treasureDataBox">
                        <h5 className="treasureDataLabel">Total Stored Assets (BTCB)</h5>
                        <h5 className="treasureData">${data[0].total_Stored_Assets.toString()}</h5>
                    </div>
                </div>
                <div className="treasureDataGlassBox">
                    <div className="treasureDataBox">
                        <h5 className="treasureDataLabel">Total Stored Assets (BTCB)</h5>
                        <h5 className="treasureData">${data[0].total_Stored_Assets.toString()}</h5>
                    </div>
                </div>
                <div className="treasureDataGlassBox">
                    <div className="treasureDataBox">
                        <h5 className="treasureDataLabel">Total Stored Assets (BTCB)</h5>
                        <h5 className="treasureData">${data[0].total_Stored_Assets.toString()}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

TreasureBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default TreasureBox;