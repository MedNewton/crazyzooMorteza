import React from 'react';
import introVid from '../../../assets/images/landing/introVideo.mp4'

const Introduction = () => {

    return(
        <div className='introductionWrapper'>
            
            <h5 className='introductionTitle'>Introduction</h5>
            <div className="row introductionInnerWrapper">
                <div className="col-6 introductionTextWrapper">
                    <div className="introductionPara2Wrapper">
                    <p className='introductionPara2'>Crazy Zoo is a Play to Earn Social Impact Ecosystem that offers a user-friendly platform that connects a variety of blockchain and cryptocurrency-related industries.</p>
                    </div>
                    <div className="introductionPara2Wrapper">
                    <p className='introductionPara2'>With innovation at the foundation of all we do, we constantly strive to stay one step ahead of the competition in this constantly evolving industry, while also making sure we adhere to our basic values of sustainability and equality.</p>
                    </div>
                </div>
                <div className="col-6 introductionImageWrapper">
                    <div className="introducionImage">
                        <video src={introVid} muted loop autoPlay className='introVid' />
                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;