import React from 'react';
import { useEffect } from 'react';
import DappHeader from '../components/header/DapHeader';
import heroSliderData from '../assets/fake-data/data-slider-3';
import ReferralLayout from '../components/layouts/ReferralLayout';

const ReferralPage = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
    return (
        <div className='home-3' style={{overflow: "hidden"}}>
            <DappHeader />
            <ReferralLayout data={heroSliderData} />
            
        </div>
    );
}

export default ReferralPage;
