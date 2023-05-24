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
import leaves1 from '../../assets/images/referral/Leaves_01.svg'
import leaves8 from '../../assets/images/minting/Leaves_08.svg'
import leaves7 from '../../assets/images/minting/Leaves_07.svg'

import Banana from '../../assets/images/food/Banana.png'
import Grape from '../../assets/images/food/Grape.png'
import Leaves from '../../assets/images/food/Leaves.png'

import referralRhino from '../../assets/images/referral/CrazyZoo_Rhino_V1_2224.png'

import ReferralCodeGlassBox from './referral/ReferralBox';
import ReferralReawrdsBox from './referral/ReferralRewardBox';
import FoodBox from './referral/FoodBox';
import ReferralHistoryBox from './referral/ReferalHistoryBox';


import mintingData from '../../assets/fake-data/fakeMintingData'


const ReferralLayout = props => {
    const data = props.data

    const referralCodeData = [
        {
            link: "https://crazyzoobeta.themoroccan.dev/?ref=HGqt5s5ed"
        }
    ]

    const referralRewards = [
        {
            rewards: 0.0
        }
    ]

    const food = [
        {
            food: "Grape",
            foodIcon: Grape,
            amount: "0"
        },
        {
            food: "Leaves",
            foodIcon: Leaves,
            amount: 1,
        },
        {
            food: "Banana",
            foodIcon: Banana,
            amount: 0
        }
    ]

    const history = [
        {
            wallet: "0xa1..F5",
            level: 1,
            amount: 0
        },
        {
            wallet: "0xa1..F5",
            level: 2,
            amount: 6
        },
        {
            wallet: "0xa1..F5",
            level: 1,
            amount: 0
        },
        {
            wallet: "0xa1..F5",
            level: 3,
            amount: 35
        }
    ]

    return (
        <div className="referralPageContainer" >
            <img src={leaves1} className="referralLeaves1" alt="" />
            <img src={leaves5} className="referralLeaves5" alt="" />
            <img src={leaves8} className="referralLeaves8" alt="" />
            <img src={leaves7} className="referralLeaves7" alt="" />
            <img src={referralRhino} className="referralRhino" alt="" />
            <div className="row referralBoxWrapper centered-axis-x centered-axis-y">
                <div className="col-6 referralBoxLeft">
                    <ReferralCodeGlassBox data={referralCodeData}/>
                    <ReferralReawrdsBox data={referralRewards}/>
                    <FoodBox data={food}/>
                </div>
                <div className="col-6 referralBoxRight">
                    <ReferralHistoryBox data={history}/>
                </div>
            </div>
            
        </div>
    );
}

ReferralLayout.propTypes = {
    data: PropTypes.array.isRequired,
}

export default ReferralLayout;
