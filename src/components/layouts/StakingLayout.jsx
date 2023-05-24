import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'react-bootstrap';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import imgbg from '../../assets/images/backgrounds/Forest_Background.svg'
import leaves5 from '../../assets/images/referral/Leaves_05.svg'
import leaves1 from '../../assets/images/treasury/Leaves_01.svg'
import leaves8 from '../../assets/images/treasury/Leaves_08.svg'
import leaves7 from '../../assets/images/minting/Leaves_07.svg'


import stakingRhino from '../../assets/images/staking/CrazyZoo_Rhino_V1_2223.avif'
import stakingLemur from '../../assets/images/staking/CrazyZoo_Lemur_2222.avif'

import MyNFTsGlassBox from './staking/myNFTsBox';
import AnimalsGlassBox from './staking/animalsBox';
import FoodBox from './staking/FoodBox';

const StakingLayout = props => {
    const data = props.data

    const myNFTsData = [
        {
            Lemur: 1,
            Rhino: 2,
            Gorilla: 0
        }
    ]

    const Animals = [
        {
            name: "Gorilla",
            minted: 43,
            totalSupply: 100,
            rarity: "Common",
            food: "Banana",
            number: "432",
            staked: 0
        },
        {
            name: "Lemur",
            minted: 13,
            totalSupply: 100,
            rarity: "Rare",
            food: "Grapes",
            number: "245",
            staked: 5
        }
    ]

    const Food = [
        {
            name: "Grapes",
            cost: 5,
            dailyRewardAmount: 0.0175,
            dailyReward: 0.5,
            dailyRewardsAnimal: "Lemur",
            harvestPeriod: 500,
            totalPayout: 8.75,
            min: 2
        },
        {
            name: "Banana",
            cost: 3,
            dailyRewardAmount: 0.015,
            dailyReward: 0.4,
            dailyRewardsAnimal: "Gorilla",
            harvestPeriod: 100,
            totalPayout: 5.60,
            min: 3
        }
    ]

    return (
        <div className="treasuryPageContainer" >
            <img src={leaves1} className="treasuryLeaves1" alt="" />
            <img src={leaves5} className="treasuryLeaves5" alt="" />
            <img src={leaves8} className="treasuryLeaves8" alt="" />
            <img src={leaves7} className="referralLeaves7" alt="" />
            <img src={stakingRhino} className="stakingRhino" alt="" />
            <img src={stakingLemur} className="stakingLemur" alt="" />
            <div className="row stakingBoxWrapper centered-axis-x centered-axis-y">
                <div className="row stakingTopWrapper">
                    <div className="col-6 stakingTopLeftWrapper">
                        <MyNFTsGlassBox data={myNFTsData}/>
                    </div>
                    <div className="col-6 stakingToprightWrapper">
                        <AnimalsGlassBox data={Animals}/>
                    </div>
                </div>
                <div className="row stakingBottomWrapper">
                    <FoodBox data={Food}/>
                </div>
            </div>
            
        </div>
    );
}

StakingLayout.propTypes = {
    data: PropTypes.array.isRequired,
}

export default StakingLayout;
