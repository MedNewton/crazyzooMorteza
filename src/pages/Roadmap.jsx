import React from 'react';
import Header from '../components/header/Header';
import Roadmap from '../components/layouts/home-3/Roadmap';

import Community from '../components/layouts/home-3/Community';
import DappCommunity from '../components/layouts/home-3/dappCommunity';
const RoadmapPage = () => {
    return(
        <div className='home-3' style={{overflow: "hidden"}}>
            <Header />
            <Roadmap />
            <DappCommunity />
        </div>
    );
}

export default RoadmapPage;