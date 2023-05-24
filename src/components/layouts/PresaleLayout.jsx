import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Button } from 'react-bootstrap';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import leaves5 from '../../assets/images/presale/Leaves_05.svg'
import leaves1 from '../../assets/images/referral/Leaves_01.svg'
import leaves8 from '../../assets/images/presale/Leaves_08.svg'
import leaves7 from '../../assets/images/minting/Leaves_08.svg'



import presaleRhino from '../../assets/images/presale/CrazyZoo_Rhino_V1_0001.avif'
import presaleLemur from '../../assets/images/presale/CrazyZoo_Lemur_2222.avif'
import presaleGorilla from '../../assets/images/presale/CrazyZoo_Gorilla0007.avif'

import PresaleWelcomeGlassBox from './presale/presaleWelcomeBox';
import PresaleAddressBox from './presale/presaleAddressBox';
import PresaleSocialBox from './presale/presaleSocialBox';
import PrivateSaleBox from './presale/privateSaleBox';
import PresalePriceGlassBox from './presale/presalePriceGlassBox';
import PresaleReferralLinkBox from './presale/PresaleReferralLinkBox';

const PresaleLayout = props => {
    const data = props.data;

    const privateSaleData = [
        {
            countdownTo: 650000000,
            privateSaleFrom: 250,
            privateSaleTo: 1250,
            tokenPriceMatic: 100,
            tokenPriceUSDT: 1000000,
            minBuy: 10,
            maxBuy: 30
        }
    ]

    return (
        <div className="presalePageContainer" >
            <img src={leaves1} className="presaleLeaves1" alt="" />
            <img src={leaves5} className="presaleLeaves5" alt="" />
            <img src={leaves8} className="presaleLeaves8" alt="" />
            <img src={leaves7} className="presaleLeaves7" alt="" />
            <img src={presaleLemur} className="referralLemur" alt="" />
            <img src={presaleGorilla} className="referralGorilla" alt="" />
            <img src={presaleRhino} className="referralRhino" alt="" />
            <div className="row presaleBoxWrapper centered-axis-x centered-axis-y">
                <div className="col-6 presaleBoxLeft">
                    <PresaleWelcomeGlassBox data={data}/>
                    <PresaleSocialBox data={data}/>
                </div>
                <div className="col-6 presaleBoxRight">
                    <PrivateSaleBox data={privateSaleData}/>
                    <PresalePriceGlassBox data={privateSaleData}/>
                    <PresaleReferralLinkBox data={data}/>
                </div>
            </div>
            
        </div>
    );
}

PresaleLayout.propTypes = {
    data: PropTypes.array.isRequired,
}

export default PresaleLayout;
