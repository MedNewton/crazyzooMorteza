import React from 'react'; 
import { useEffect, useState } from 'react';

import createGorilla from "../../../assets/images/landing/CrazyZoo_Gorilla_2222.avif"
import createLemur from "../../../assets/images/landing/CrazyZoo_Lemur_2224.avif"

const LastCreate = () =>{

    return(
        <section className="tf-box-icon create tf-section bg-home-3 qualities">
            <div className="newCreateCardsBox">
                <div className='newCreateCardBox'>
                    <div className='newCreateCardBoxImage imgBx1'></div>
                </div>
                <div className='newCreateCardBox'>
                    <div className='newCreateCardBoxImage imgBx2'></div>
                </div>
            </div>
            <div className="newCreateTextBox">
                <h5>
                At Crazyzoo, we believe that sharing is not only caring but also rewarding. By participating at our pre-sales and witj our unique referral program, you'll have the opportunity to earn a passive income. Spread the word about Crazyzoo and watch your rewards grow as your network expands.
                </h5>
                <h5>
                Crazyzoo is truly a platform by the people, for the people. We prioritize community involvement and decision-making, ensuring that our users have a direct say in the project's direction and growth. Together, we can shape the future of digital currency and create a fair, inclusive ecosystem.
                </h5>
            </div>
            
            
        </section>
    )

}

export default LastCreate;