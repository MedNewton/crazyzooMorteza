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
import leaves5 from '../../assets/images/swapping/Leaves_05.svg'
import leaves1 from '../../assets/images/swapping/Leaves_01.svg'
import leaves8 from '../../assets/images/swapping/Leaves_08.svg'
import leaves7 from '../../assets/images/minting/Leaves_07.svg'
import swappingGorilla from '../../assets/images/swapping/CrazyZoo_Gorilla0005.avif'
import swappingRhino from '../../assets/images/swapping/CrazyZoo_Rhino_V1_0006.avif'
import SwappingBox from './SwappingBox';
import SwappingV3 from '../SwappingV3';
import mintingData from '../../assets/fake-data/fakeMintingData'


const SwappingLayout = props => {
    const swappingV3Value = [
        {
            price : 1.27,
            from : "MATIC",
            to : "USD"
        }
    ];
    const data = props.data
    const modalShow = props.modalShow
    return (
        <div className="swappingPageContainer" >
            <img src={leaves1} className="swappingLeaves1" alt="" />
            <img src={leaves5} className="swappingLeaves5" alt="" />
            <img src={leaves8} className="swappingLeaves8" alt="" />
            <img src={leaves7} className="swappingLeaves7" alt="" />
            <img src={swappingGorilla} className="swappingGorilla" alt="" />
            <img src={swappingRhino} className="swappingRhino" alt="" />
            <div className="row swappingBoxWrapper centered-axis-x centered-axis-y">
                <SwappingBox data={mintingData} modalShow={modalShow} />
                <SwappingV3 data={swappingV3Value}/>
            </div>
            
        </div>
    );
}

SwappingLayout.propTypes = {
    data: PropTypes.array.isRequired,
    modalSHow: PropTypes.func.isRequired
}

export default SwappingLayout;
