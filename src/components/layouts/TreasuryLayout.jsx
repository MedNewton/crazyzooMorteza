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

import Banana from '../../assets/images/food/Banana.png'
import Grape from '../../assets/images/food/Grape.png'
import Leaves from '../../assets/images/food/Leaves.png'

import treasuryRhino from '../../assets/images/treasury/CrazyZoo_Rhino_V1_0009.avif'
import treasuryLemur from '../../assets/images/treasury/CrazyZoo_Lemur_0009.avif'

import TreasureBox from './treasury/TreasureBox';
import TreasureAssetsBox from './treasury/treasureAssetsBox';

import mintingData from '../../assets/fake-data/fakeMintingData'



const TreasuryLayout = props => {
    const data = props.data

    const treasury = [
        {
            total_Stored_Assets: 15.54,
            balance_BTCB: 0.0013,
            balance_USDT: 0.0025
        }
    ]

    return (
        <div className="treasuryPageContainer" >
            <img src={leaves1} className="treasuryLeaves1" alt="" />
            <img src={leaves5} className="treasuryLeaves5" alt="" />
            <img src={leaves8} className="treasuryLeaves8" alt="" />
            <img src={leaves7} className="referralLeaves7" alt="" />
            <img src={treasuryLemur} className="treasuryLemur" alt="" />
            <img src={treasuryRhino} className="treasuryRhino" alt="" />
            <div className="row treasuryBoxWrapper centered-axis-x centered-axis-y">
                <TreasureBox data={treasury}/>
                <TreasureAssetsBox data={treasury}/>
            </div>
            
        </div>
    );
}

TreasuryLayout.propTypes = {
    data: PropTypes.array.isRequired,
}

export default TreasuryLayout;
