import React from 'react';
import PropTypes from 'prop-types'
import { Button, ProgressBar } from 'react-bootstrap'
import { SetNFT, GetNFT} from '../../../hooks/dapp/UseNFT';
import { useEffect, useState } from 'react';
import config from '../../../config'
import ApproveStaking from './ApproveStaking'
import {
    useAccount,
    useConnect,
    useNetwork
} from 'wagmi'


const MyNFTsGlassBox = props => {
    const data = props.data;

    const Rhino = data[0].Rhino;
    const Lemur = data[0].Lemur;
    const Gorilla = data[0].Gorilla;
    const Total = Rhino + Lemur + Gorilla;
    const { chain, chains } = useNetwork()
    const { address, isConnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    

    return (
        <div className='myNFTsGlassBoxWrapper'>
            <div className="myNFTsImageBox">
                <div className="myNFTsImageInner1"></div>
                <div className="myNFTsImageInner2">
                    <div className="myNFTsImageInnerTextBox">
                        <h5 className='myNFTsImageInnerText'>Lemur</h5>
                        <h5 className='myNFTsImageInnerText'>483</h5>
                    </div>
                </div>
            </div>

            <div className="myNFTsGlassBox">
                <h5 className='myNFTsGlassBoxTitle'>My NFTs</h5>
                <div className='myNFTsProgressWrapper'>
                    <div className="myNFTsProgressLableWrapper">
                        <h5 className='myNFTProgressLabel'>{Total.toString()}</h5>
                    </div>
                    <ProgressBar min={0} max={30} now={Total} id="myNFTSProgressBar"/>
                </div>
                <div className="myNFTsDataWrapper">
                    <div className="myNFTsDataItemWrapper">
                        <h5 className='myNFTsData'>{Lemur.toString()}</h5>
                        <h5 className='myNFTsDataLabel'>Lemur</h5>
                    </div>
                    <div className="myNFTsDataItemWrapperBordered">
                        <h5 className='myNFTsData'>{Rhino.toString()}</h5>
                        <h5 className='myNFTsDataLabel'>Rhino</h5>
                    </div>
                    <div className="myNFTsDataItemWrapper">
                        <h5 className='myNFTsData'>{Gorilla.toString()}</h5>
                        <h5 className='myNFTsDataLabel'>Gorilla</h5>
                    </div>
                </div>
                <div className="myNFTsButtonsWrapper">
                    {
                        isConnected ?
                        <ApproveStaking /> :
                        <Button className="mintBtn" onClick={() => connect({ connector: connectors[1] })} >Connect Wallet</Button>

                    }
                    {/* <Button className="MyNFTsFeedBtn">Feed</Button>
                    <Button className="MyNFTsStakeBtn">Stake</Button> */}
                </div>
            </div>
        </div>
    );
}

MyNFTsGlassBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default MyNFTsGlassBox;