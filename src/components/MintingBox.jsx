import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import {
    useAccount,
    useConnect,
    useNetwork
} from 'wagmi'
import config from '../config'
import ApproveNFT from './ApproveNFT'
import { GetNFT } from '../hooks/dapp/UseNFT'



const MintingBox = props => {
    const { chain, chains } = useNetwork()
    const { address, isConnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const [NFTContractAddress , setNFTContractAddress] = useState('')
    
    const Array = ["mintLemur", "mintRhino", "mintGorilla"];
    const randomIndex = Math.floor(Math.random() * Array.length);
    
    const { data: NFTfee, isError : isErrorFeeForId, isLoading: isLoadingFeeForId } = GetNFT('getFeeForIndex',chain?.id,[`${randomIndex}`])

    
    useEffect(()=>{
        if(chain!= undefined){
            setNFTContractAddress(config?.ContractsConfig?.[chain?.id]?.ZOONFT ?? '')
        }
    },[isConnected])
      

    const data = props.data;
    return (

        <div className="mintingGlassBox">
            <div className="mintingBoxTitleWrapper">Minting</div>
            <div className="row mintingFormWrapper">
                <div className="col-5 mintDisplayWrapper">
                    <div className="mintPreviewBox">
                        <div className="mintDisplayImage"></div>
                    </div>
                </div>
                <div className="col-7 mintInputsWrapper">
                    <div className="NFTPriceBox">
                        <h5 className='NFTPriceLabel'>Crazy Zoo NFT Price</h5>
                        <h5 className='NFTPrice'>{data[0].NFTPrice.toString()} $ZOO</h5>
                    </div>
                    <div className="mintedProgressBarWrapper">
                        <div className="mintedProgressBarLabelWrapper">
                            <h5 className='mintedLabel'>Minted</h5>
                            <h5 className='mintedData'>{data[0].minted.toString()}/{data[0].totalSupply.toString()}</h5>
                            <ProgressBar min={0} max={data[0].totalSupply} now={data[0].minted} id="mintedProgressBar" />
                        </div>

                        <div className="animalsProgressBarLabelWrapper">
                            <h5 className='animalsLabel'>Total Animals</h5>
                            <h5 className='animalsData'>{data[0].animals.toString()}/0{data[0].totalAnimals.toString()}</h5>
                            <ProgressBar min={0} max={data[0].totalAnimals} now={data[0].animals} id="animalsProgressBar" />
                        </div>
                        <div className="totalPriceLabelWrapper">
                            <h5 className='totalPriceLabel'>Total Price</h5>
                            <h5 className='totalPriceData'>{data[0].totalPrice.toString()} $ZOO</h5>
                        </div>
                        <div className="mintBtnWrapper">
                            {
                                isConnected ?
                                    <ApproveNFT randomNft={Array[randomIndex]} NFTContractAddress={NFTContractAddress} NFTfee = {NFTfee} /> :
                                    <Button className="mintBtn" onClick={() => connect({ connector: connectors[1] })} >Connect Wallet</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

MintingBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default MintingBox;