import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import whiteAnimalsBackground from '../../../assets/images/landing/Animal_Background-03.svg'

const Foraging = () => {
    return (

        <div className='foragingWrapper'>
            <img src={whiteAnimalsBackground} className="whiteAnimalsBackground" />
            <div className="foragingInner">
                <h5 className='foragingTitle'>Foraging</h5>
                <p className='foragingSubtitle'>5% Fee (back into NFT Pool liquidity), Reinvesting is basically like buying food for your animals. If your Animal NFT runs out, you need to deposit another Animal NFT otherwise your food can’t be used and you don’t get further APY on that.</p>
                <div className="foragingSubtitle2Wrapper">
                    <p className='foragingSubtitle2'>If the NFT ends its earning period it will go into the “CrazyMode” and you can continue to withdraw the forage earnings. However, if there is no other NFT staked, the forage is 50% halved as penalty.</p>
                </div>
                <div className="row">
                    <div className="col-12">
                    <Button className='learnMoreBtn'>learn more</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foraging