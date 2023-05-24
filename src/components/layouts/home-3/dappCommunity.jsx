import React from 'react';
import TwitterIcon from '../../../assets/images/landing/Twitter.svg'
import TelegramIcon from '../../../assets/images/landing/Telegram.svg'
import DiscordIcon from '../../../assets/images/landing/Discord.svg'
import MediumIcon from '../../../assets/images/landing/Medium.svg'
import GithubIcon from '../../../assets/images/landing/github.svg'
import CrewIcon from '../../../assets/images/landing/crew3.svg'
import { Link } from 'react-router-dom';


const DappCommunity = () => {
    return (
        <div className='dappCommunityWrapper' id='community'>
            <div className="circlesWrapper">
                <div className='circle1'>
                    <div className="circle2">
                        <div className="circle3">
                            <div className="circle4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="communityTextWrapper">
                <hr className='communityHR'/>
                <h5 className='communityTitle'>JOIN OUR <span className='communityGradientText'>COMMUNITY</span></h5>
                <h5 className='communitySubtitle'>Learn more about Crazy Zoo, interact with the our team and engage with other investors. Join the community and have your say in shaping the future of decentralized finance.</h5>
                <div className="communityIconsWrapper">
                    <Link to={"https://twitter.com/CrazyZoo_io"} target="_blank">
                    <div className="communityIconWrapper"><img src={TwitterIcon} alt="" className='communityIcon' /></div>
                    </Link>
                    <Link to={"https://discord.gg/crazyzoo"} target="_blank">
                    <div className="communityIconWrapper"><img src={DiscordIcon} alt="" className='communityIcon' /></div>
                    </Link>
                    <Link to={"https://t.me/crazyzoo_Official"} target="_blank">
                    <div className="communityIconWrapper"><img src={TelegramIcon} alt="" className='communityIcon' /></div>
                    </Link>
                    <Link to={"https://medium.com/@CrazyZoo_io"} target="_blank">
                    <div className="communityIconWrapper"><img src={MediumIcon} alt="" className='communityIcon' /></div>
                    </Link>
                    <Link to={"https://github.com/"} target="_blank">
                    <div className="communityIconWrapper"><img src={GithubIcon} alt="" className='communityIcon' /></div>
                    </Link>
                    <Link to={"https://crew3.xyz/c/crazyzoo/questboard"} target="_blank">
                    <div className="communityIconWrapper"><img src={CrewIcon} alt="" className='communityIcon' /></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DappCommunity;