import React from 'react';
import { Button } from 'react-bootstrap';

const CrazyZooNFTs = () => {
    return (
        <div className='crazyZooNFTsWrapper'>
            <div className="crazyZooNFTsInner">
                <h5 className='crazyZooNFTsTitle'>Crazy Zoo NFTs</h5>
                <p className='crazyZooNFTsSubtitle'>There will be 3 Crazy Zoo NFT Collections each containing 3 different animals. The collections will be launched across multiple time periods and they feature top tier AAA quality animals.</p>
                <div className='row crazyZooNFTsListWrapper'>
                    <div className="col-4 crazyZooNFTsListItem nftLemur">
                        <div className='crazyZooNFTsListItemTitleWrapper'>
                            <h5 className='crazyZooNFTsListItemTitle'>Lemur</h5>
                            <h5 className='crazyZooNFTsListItemAmount'>01</h5>
                        </div>
                    </div>
                    <div className="col-4 crazyZooNFTsListItem nftRhino">
                    <div className='crazyZooNFTsListItemTitleWrapper'>
                            <h5 className='crazyZooNFTsListItemTitle'>Rhino</h5>
                            <h5 className='crazyZooNFTsListItemAmount'>01</h5>
                        </div>
                    </div>
                    <div className="col-4 crazyZooNFTsListItem nftGorilla">
                    <div className='crazyZooNFTsListItemTitleWrapper'>
                            <h5 className='crazyZooNFTsListItemTitle'>Gorilla</h5>
                            <h5 className='crazyZooNFTsListItemAmount'>01</h5>
                        </div>
                    </div>
                </div>
                <div className="row crazyZooNFTSCostsWrapper">
                    <div className="col-4 crazyZooNFTsCostsItem">
                        <h5 className="crazyZooNFTsCost">cost 125 $ZOO</h5>
                    </div>
                    <div className="col-4 crazyZooNFTsCostsItem">
                    <h5 className="crazyZooNFTsCost">cost 125 $ZOO</h5>
                    </div>
                    <div className="col-4 crazyZooNFTsCostsItem">
                        <h5 className="crazyZooNFTsCost">cost 125 $ZOO</h5>
                    </div>
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

export default CrazyZooNFTs;