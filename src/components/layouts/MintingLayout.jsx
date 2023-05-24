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
import leaves5 from '../../assets/images/minting/Leaves_05.svg'
import leaves1 from '../../assets/images/minting/Leaves_01.svg'
import leaves8 from '../../assets/images/minting/Leaves_08.svg'
import leaves7 from '../../assets/images/minting/Leaves_07.svg'
import MintingBox from '../MintingBox';

import mintingData from '../../assets/fake-data/fakeMintingData'


const MintingLayout = props => {
    const data = props.data
    return (
        <div className="mintinPageContainer" >
            <img src={leaves1} className="mintingLeaves1" alt="" />
            <img src={leaves5} className="mintingLeaves5" alt="" />
            <img src={leaves8} className="mintingLeaves8" alt="" />
            <img src={leaves7} className="mintingLeaves7" alt="" />
            <div className="row mintingBoxWrapper centered-axis-x centered-axis-y">
                <MintingBox data={mintingData}/>
            </div>
            
        </div>
    );
}

MintingLayout.propTypes = {
    data: PropTypes.array.isRequired,
}

export default MintingLayout;
