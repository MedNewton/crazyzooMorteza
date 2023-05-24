import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'react-bootstrap';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import imgbg from '../../assets/images/backgrounds/Forest_Background.svg'

import newLeaves1 from '../../assets/images/landing/newLeaves1.svg'
import newLeaves2 from '../../assets/images/landing/newLeaves2.svg'


import heroLemur from '../../assets/images/landing/heroLemur.avif'
import heroRhino from '../../assets/images/landing/heroRhino.avif'
import heroGorilla from '../../assets/images/landing/heroGorilla.avif'

import Marquee from 'react-double-marquee';

import Typewriter from 'typewriter-effect/dist/core';
import { useEffect } from 'react';






const Slider = props => {
    const data = props.data


    

    useEffect(() => {

        let heroTextWrapper = document.getElementById('heroTextWrapper');

        var typewriter = new Typewriter(heroTextWrapper, {
            loop: true,
            delay: 100,
            deleteSpeed: 100,
            pauseFor: 10,
            cursorClassName: "heroCursor"
          });

        typewriter
            .pauseFor(100)
            .typeString('WELCOME TO<br />CRAZY ZOO')
            .start();
    }, [])

    return (
        /*<div className="mainslider" >
            
            <img src={heroLeaves1} className="heroLeaves1" alt="" />
            <img src={heroLeaves2} className="heroLeaves2" alt="" />
            <img src={heroLeaves3} className="heroLeaves3" alt="" />
            <img src={heroLeaves4} className="heroLeaves4" alt="" />
            <picture className='heroGorilla'>
                <source srcSet={heroGorillaAvif}/>
                <img src={heroGorillaAvif} alt="crazyZooGorilla" />
            </picture>
            <picture className='heroLemur'>
                <source srcSet={heroLemurAvif}/>
                <img src={heroLemurAvif} alt="crazyZooLemur" />
            </picture>
            <Swiper
                modules={[Navigation,  Scrollbar, A11y ]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} className={item.class}>
                            <SliderItem item={item} />
                        </SwiperSlide>
                        
                    ))
                }
        </Swiper>
        </div>*/

        <div className="heroSection">
            <div className="heroTextWrapper" id='heroTextWrapper'>
                
            </div>
            <h5 className='heroSubtitle'>The world of NFT<br />pets</h5>
            <div className="heroAvatarsWrapper" hidden>
                <img className='heroAvatar' src={heroLemur} alt="heroLemur" />
                <img className='heroAvatar' src={heroRhino} alt="heroRhino" />
                <img className='heroAvatar' src={heroGorilla} alt="heroGorilla" />
            </div>

            <div style={{
                width: '100vw',
                height: 'fit-content',
                marginTop: '5%',
                whiteSpace: 'nowrap',
            }} id="marqee" hidden>
                <Marquee speed={0.15} direction={"left"} delay={3000}>
                    LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022;
                </Marquee>
            </div>
        </div>

    );
}

Slider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}
const SliderItem = props => (
    <div className="flat-title-page" style={{ backgroundImage: `url(${imgbg})` }}>


        <div className="overlay">
            <div className="row greenShadow"></div>
        </div>
        <div className="swiper-container mainslider home">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slider-item">
                        <div className="themesflat-container ">
                            <div className="wrap-heading flat-slider flex">
                                <div className="content">
                                    <h4 className="heading">{props.item.title_1}</h4>
                                    <div className='newsletterWrapper'>
                                        <div className="row">
                                            <div className="col-8 newsletterInputWrapper">
                                                <input
                                                    type="text"
                                                    className='newsletterInputs'
                                                    placeholder='Subscribe to our newletter' />
                                            </div>
                                            <div className="col-4 newsletterBtnWrapper">
                                                <Button className="subscribeBtn">Subscribe</Button>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)
export default Slider;
