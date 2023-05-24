import React from 'react';


import i1 from '../../../assets/images/landing/icon1.avif'
import i2 from '../../../assets/images/landing/icon2.avif'
import i3 from '../../../assets/images/landing/icon3.avif'
import i4 from '../../../assets/images/landing/icon4.avif'

import Marquee from 'react-double-marquee';

const Create = () => {
    const data = [
        {
            title: "Share and Earn",
            description: "At Crazyzoo, we believe that sharing is not only caring but also rewarding. By participating at our pre-sales and witj our unique referral program, you'll have the opportunity to earn a passive income. Spread the word about Crazyzoo and watch your rewards grow as your network expands.",
            icon : i1,
            colorbg : "transparent"
        },
        {
            title: "Community Owned",
            description: "Crazyzoo is truly a platform by the people, for the people. We prioritize community involvement and decision-making, ensuring that our users have a direct say in the project's direction and growth. Together, we can shape the future of digital currency and create a fair, inclusive ecosystem.",
            icon : i2,
            colorbg : "transparent",
        },
        {
            title: "Decentralized",
            description: "Our platform is built on a decentralized blockchain infrastructure, ensuring that transactions are transparent, trustless, and secure. This removes the need for intermediaries and offers users complete control over their assets and data.",
            icon : i3,
            colorbg : "transparent",
        },
        {
            title: "Focused On Security",
            description: "At Crazyzoo, we take security seriously. Our platform utilizes state-of-the-art cryptographic techniques and cutting-edge security measures to protect user assets and data. Our commitment to safety gives you peace of mind and confidence in our platform's reliability.",
            icon : i4,
            colorbg : "transparent",
        },
    ]
    return (
        <section className="tf-box-icon create tf-section bg-home-3 qualities">
            
            <div style={{
                width: '100vw',
                height: 'fit-content',
                marginTop: '3%',
                marginBottom: '6%',
                whiteSpace: 'nowrap',
            }} id="marqee" hidden>
                <Marquee speed={0.15} direction={"left"} delay={3000}>
       LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022; LEMUR &#x2022; GORILLA &#x2022; RHINO &#x2022;
      </Marquee>
            </div>
            
            <h5 className='introductionTitle'>Overview</h5>
            
            <div className="row qualitiesWrapper">
                    {
                        data.map((item , index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div> 
        </section>
    );
}

const CreateItem = props => (
    <div className='col-5 quality'>
        <div className="sc-box-icon">
        <div className="image">
            <div className={`icon-create ${props.item.colorbg}`}>
                    <picture className='createIcon'>
                        <source srcSet={props.item.icon}/>
                        <img src={props.item.icon} alt="crazy_zoo_icon" />

                    </picture>
                </div>                                                                           
            </div>
        <h5 className="qualityTitle">{props.item.title}</h5>
        <h5 className="qualityDescription">{props.item.description}</h5>
    </div>
    </div>
    
)

export default Create;
