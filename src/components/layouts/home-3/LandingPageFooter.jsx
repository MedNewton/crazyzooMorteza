import React from 'react';
import footerBackground from '../../../assets/images/landing/Animal_Background-02.svg'
import TwitterIcon from '../../../assets/images/landing/Twitter.svg'
import TelegramIcon from '../../../assets/images/landing/Telegram.svg'
import DiscordIcon from '../../../assets/images/landing/Discord.svg'
import MediumIcon from '../../../assets/images/landing/Medium.svg'

import { Input } from 'semantic-ui-react';


const LandingPageFooter = () => {
    return(
        <div className='LandingPageFooterWrapper'>
            <div className="newsletterWrapper" hidden>
                <div className="newsletter">
                    <h5 className='newsletterSmallText'>STAY UP TO DATE</h5>
                    <h5 className='newsletterTitle'>Get our newsletter</h5>
                    
                    <Input placeholder={"Enter your email"} icon="long arrow alternate right" className="newsletterInput"></Input>
                </div>
                <div className="newsletterLeaves"></div>
            </div>
            
            <h5 className="zooCopyrights">© 2023 Crazy Zoo. All rights reserved.</h5>
            
        </div>
    );
}

export default LandingPageFooter;