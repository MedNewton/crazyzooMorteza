import React from 'react';
import { Link } from 'react-router-dom';
import pawIcon from '../../../assets/images/landing/Paw_Icon.svg'
import roadmapLeaves1 from '../../../assets/images/landing/roadmap_leaves1.svg'
import roadmapLeaves2 from '../../../assets/images/landing/roadmap_leaves2.svg'
import roadmapLeaves3 from '../../../assets/images/landing/roadmap_leaves3.svg'


const Roadmap = () => {
    return(
        <div className='roadmapWrapper'>
            <img src={roadmapLeaves1} className="roadmapLeaves1" alt="" />
            <img src={roadmapLeaves2} className="roadmapLeaves2" alt="" />
            <img src={roadmapLeaves3} className="roadmapLeaves3" alt="" />
            <h5 className='introductionTitle'>Roadmap</h5>
            <div className="row roadmapItemsRow">
                <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        <div className="roadmapItemStepFill"></div>
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBox">
                            <h5 className='roadmapItemTitle'>Q4 2022</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Infrastructure Planning</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Workflow Design</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Social Media Creation</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Visualizing & Creating NFTs</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Planning Marketing Strategy</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Visualizing & creating NFTs</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Visualizing & creating NFTs</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBoxInactive">
                            <h5 className='roadmapItemTitleInactive'>Q1 2023</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Release White Paper</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Smart-Contract creation & Testnet testing</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Marketing Campaign Start</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Audit</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">resell Internal</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start Partnership</h5>
                            </div>
                            <div className="roadmapItemDataRow nonVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start NFT Staking</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBoxInactive">
                            <h5 className='roadmapItemTitleInactive'>Q2 2023</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Cross-Chain Deployment (Polygon-Arbitrum)</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Open Pools & Farm Zoo Token</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Launch Token Uniswap</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start Minting NFT</h5>
                            </div>
                            <div className="roadmapItemDataRow ">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Staking NFT</h5>
                            </div>
                            <div className="roadmapItemDataRow ">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Boost/Forage $ Release</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start NFT Staking</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row roadmapItemsRow">
            <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBoxInactive">
                            <h5 className='roadmapItemTitleInactive'>Q3 2023</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start Crazy Zoo Shop Creation</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start Minting 2 Collection NFT</h5>
                            </div>
                            <div className="roadmapItemDataRow ">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Open Online Shop</h5>
                            </div>
                            <div className="roadmapItemDataRow ">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Launch Crazy Zoo App Mobile</h5>
                            </div>
                            <div className="roadmapItemDataRow ">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Launch Crazy Zoo Pet Cares Product</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Listing on Uniswap</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start NFT Staking</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBoxInactive">
                            <h5 className='roadmapItemTitleInactive'>Q4 2023</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Community Events (crew/club etc.)</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Build Social Network (Custom Domain for Wallet-name displayed on social network)</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Launch Social Network Chat/Personal profiles</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Planning of our own metaverse</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start Creation Game Mobile</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Listing on Uniswap</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start NFT Staking</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBoxInactive">
                            <h5 className='roadmapItemTitleInactive'>Q1 2024</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Open Beta Game</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Launch Game</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">More Partnership</h5>
                            </div>
                            <div className="roadmapItemDataRow ">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Open First Crazy Zoo Shop </h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">2° Presale</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Listing on Uniswap</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start NFT Staking</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Roadmap;

