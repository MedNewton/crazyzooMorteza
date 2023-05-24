import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import Grape from '../../../assets/images/staking/Grape.png'

const FoodBox = props => {
    const data = props.data;

    return (
        <div className='foodBox'>
            <div className="row foodWrapper">
                <div className="col-3 foodImageWrapper">
                    <div className="foodImageGlassBox">
                        <img src={Grape} className="foodImage" alt="" />
                    </div>
                    <h5 className='foodName'>{data[0].name}</h5>
                </div>
                <div className="col-3 foodDataColumn">
                    <h5 className='foodDataTitle'>Cost</h5>
                    <h5 className='foodData'>{data[0].cost} $ZOO</h5>
                    <br />
                    <h5 className='foodDataTitle'>Harvest Period</h5>
                    <h5 className='foodData'>{data[0].harvestPeriod} days</h5>
                </div>
                <div className="col-3 foodDataColumn">
                    <h5 className='foodDataTitle'>Daily Rewards</h5>
                    <h5 className='foodData'>{data[0].dailyReward.toString() + "% (" + data[0].dailyRewardAmount + " $ZOO)"}</h5>
                    <br />
                    <h5 className='foodDataTitle'>Total Payout</h5>
                    <h5 className='foodData'>{data[0].totalPayout} $ZOO</h5>
                </div>
                <div className="col-3 foodDataColumn">
                    <h5 className='foodDataTitle'>Daily Rewards</h5>
                    <h5 className='foodData'>{data[0].dailyRewardsAnimal}</h5>
                    <br />
                    <h5 className='foodDataTitle'>Min feer / Month</h5>
                    <h5 className='foodData'>{data[0].min}</h5>
                </div>
            </div>
        </div>
    );
}

FoodBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default FoodBox;