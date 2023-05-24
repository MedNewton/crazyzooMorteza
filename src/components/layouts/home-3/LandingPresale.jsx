import React from 'react';
import { Link } from 'react-router-dom'
import pawCoin from '../../../assets/images/landing/Paw_coin_golden.png'
import footerBackground from '../../../assets/images/landing/Animal_Background-02.svg'
import presaleLeaves1 from '../../../assets/images/landing/presale_leaves1.svg'
import presaleLeaves2 from '../../../assets/images/landing/presale_leaves2.svg'

const Presale = () => {
    return (
        <div className='landingPresaleWrapper'>
            <img src={presaleLeaves1} className="landingPresaleLeaves1" alt="" />
            <img src={presaleLeaves2} className="landingPresaleLeaves2" alt="" />
            <h5 className='landingPresaleTitle'>Presale</h5>
            <div className="row landingPresaleItemRow">
                <div className="col-3 presaleItemTitleWrapper">
                    <img src={pawCoin} className="goldenPawCoin" />
                    <h5 className='presaleItemTitle'>0.9$ USDT</h5>
                </div>
                <div className="col-9 presaleItemDescriptionWrapper">
                    <h5 className="presaleItemDescriptionTitle">The first presale</h5>
                    <h5 className="presaleItemDescription">
                    The first presale phase for the $ZOO token will offer a big discount at 0.9$ USDT per $ZOO and a limit of 120.000 tokens allocated for phase 1.
                    </h5>
                </div>
            </div>
            <div className="row landingPresaleItemRow activeRow">
                <div className="col-3 presaleItemTitleWrapper">
                    <img src={pawCoin} className="goldenPawCoin" />
                    <h5 className='presaleItemTitle'>0.95$ USDT</h5>
                </div>
                <div className="col-9 presaleItemDescriptionWrapper">
                    <h5 className="presaleItemDescriptionTitle">The second presale</h5>
                    <h5 className="presaleItemDescription">
                    It will offer another discount at 0.95$ USDT per $ZOO and a limit of 220.000 tokens allocated for phase 2.                    </h5>
                </div>
            </div>
            <div className="row landingPresaleItemRow listingRow">
                <div className="col-3 presaleItemTitleWrapper">
                    <img src={pawCoin} className="goldenPawCoin" />
                    <h5 className='presaleItemTitle'>1.00$ USDT</h5>
                </div>
                <div className="col-9 presaleItemDescriptionWrapper-Listing">
                    <h5 className="presaleItemDescriptionTitle">Listing price</h5>
                    
                </div>
            </div>
        </div>
    );
}

export default Presale