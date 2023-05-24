import React from 'react'; 
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

import {BsCircleSquare, BsBoundingBoxCircles} from 'react-icons/bs'
import {TbCircleSquare, TbCirclesRelation,TbCircles} from 'react-icons/tb'


const NFTsMintingIntro = () => {
    return(
        <section className='MintingIntroSection'>
            <div className="MintingIntroSectionTitleBox">
                <div></div>
                <h5>NFT-Mints Operations</h5>
            </div>
            <div className="MintingIntroSectionTextBox">
                <h5 className="MintingIntroSectionTextBoxTitle">
                    NFTs Are Minted Using A Smart Contract
                </h5>
                <h5 className="MintingIntroSectionTextBoxText">
                The Correct Holds The formation About The Digital Asset. Such As Owners The Terme Of Sale. And Any Othon When Someone Want To Mint An NFT. They Une The Smart Contact To Create The Asset And Assign Unique Digital identifier. This is Then Used To Track The Asset And Provider Of Ownership
                </h5>
            </div>
            <div className="MintingIntroSectionIconsBox">
                <div className="MintingIntroSectionIconBox">
                    <div className="MintingIntroSectionIconBoxIcon">
                        <BsBoundingBoxCircles size={50} color='#79ffa1' strokeWidth={0.1} />
                    </div>
                    <h5 className="MintingIntroSectionIconBoxTitle">Upload</h5>
                    <h5 className="MintingIntroSectionIconBoxText">The contract holds the information about the digital asset.</h5>
                </div>
                <div className="MintingIntroSectionIconBox">
                    <div className="MintingIntroSectionIconBoxIcon">
                        <TbCircleSquare size={50} color='#79ffa1' />
                    </div>
                    <h5 className="MintingIntroSectionIconBoxTitle">Reward</h5>
                    <h5 className="MintingIntroSectionIconBoxText">The contract holds the information about the digital asset.</h5>
                </div>
                <div className="MintingIntroSectionIconBox">
                    <div className="MintingIntroSectionIconBoxIcon">
                        <TbCirclesRelation size={50} color='#79ffa1' />
                    </div>
                    <h5 className="MintingIntroSectionIconBoxTitle">Auction</h5>
                    <h5 className="MintingIntroSectionIconBoxText">The contract holds the information about the digital asset.</h5>
                </div>
                <div className="MintingIntroSectionIconBox">
                    <div className="MintingIntroSectionIconBoxIcon">
                        <TbCircles size={50} color='#79ffa1' />
                    </div>
                    <h5 className="MintingIntroSectionIconBoxTitle">Grow</h5>
                    <h5 className="MintingIntroSectionIconBoxText">The contract holds the information about the digital asset.</h5>
                </div>
            </div>
        </section>
    )
}

export default NFTsMintingIntro;