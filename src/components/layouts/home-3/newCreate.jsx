import React from 'react';
import PropTypes from 'prop-types'

import icon1 from '../../../assets/images/icon/starIcon.png'
import icon2 from '../../../assets/images/icon/arrowIcon.png'
import icon3 from '../../../assets/images/icon/earthIcon.png'
import icon4 from '../../../assets/images/icon/shieldIcon.png'

const newCreate = () => {
    const data = [
        {
            title: "Share & Earn",
            icon : icon1,
            colorbg : "transparent"
        },
        {
            title: "Community owned",
            icon : icon2,
            colorbg : "transparent",
        },
        {
            title: "Dcentralized",
            icon : icon3,
            colorbg : "transparent",
        },
        {
            title: "Focus on security",
            icon : icon4,
            colorbg : "transparent",
        },
    ]
    return (
        <section className="tf-box-icon create tf-section bg-home-3 qualities">
            
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
    <div className='col-lg-2 col-md-6 col-12 quality'>
        <div className="sc-box-icon">
        <div className="image center">
            <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>                                                                           
            </div>
        <h5 className="qualityTitle">{props.item.title}</h5>
    </div>
    </div>
    
)


export default newCreate;