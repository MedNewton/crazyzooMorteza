import React from 'react';
import { useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import { ProgressBar } from 'react-bootstrap'

import stakingLemur from '../../../assets/images/staking/stakingLemur.png'
import stakingGorilla from '../../../assets/images/staking/stakingGorilla.png'

const AnimalsGlassBox = props => {
    const data = props.data

    const Gorilla = data[0];
    const Lemur = data[1]

    const [animal, setAnimal] = useState(Gorilla);
    const [animalImage, setAnimalImage] = useState(stakingGorilla);

    function changeAnimal(){
        if(animal == Gorilla){
            setAnimalImage(stakingLemur);
            setAnimal(Lemur);
        }else{
            setAnimalImage(stakingGorilla);
            setAnimal(Gorilla);
        }
    }


    return (
        <div className='animalsGlassBoxWrapper'>
            <div className="animalsSliderWrapper">
                <div className="animalsPrevBtn" onClick={() => {changeAnimal()}}>&#8826;</div>
                <div className="animalsImageBox">
                    <div className="animalsImageInner" id='animalImage'>
                        <img src={animalImage} className='animalImg' alt="" />
                    </div>
                </div>
                <div className="animalsNextBtn" onClick={() => {changeAnimal()}}>&#8827;</div>
            </div>
            <div className="myNFTsGlassBox">
                <h5 className='myNFTsGlassBoxTitle'>{animal.name}</h5>
                <div className='myNFTsProgressWrapper'>
                    <div className="myNFTsProgressLableWrapper">
                        <h5 className='animalProgressLabel'>{animal.minted}</h5>
                    </div>
                    <ProgressBar min={0} max={animal.totalSupply} now={animal.minted} id="animalProgressBar"/>
                    <div className="myNFTsProgressLableWrapper">
                        <h5 className='animalProgressLabel'>{animal.totalSupply}</h5>
                    </div>
                </div>
                <div className="myNFTsDataWrapper">
                    <div className="myNFTsDataItemWrapper">
                        <h5 className='animalData'>{animal.rarity}</h5>
                        <h5 className='animalDataLabel'>Rarity</h5>
                    </div>
                    <div className="myNFTsDataItemWrapperBordered">
                        <h5 className='animalData'>{animal.food}</h5>
                        <h5 className='animalDataLabel'>Food</h5>
                    </div>
                    <div className="myNFTsDataItemWrapper">
                        <h5 className='animalData'>{animal.number.toString()}</h5>
                        <h5 className='animalDataLabel'>Number</h5>
                    </div>
                </div>
                <div className="animalStakedWrapper">
                    <h5 className='stakedLabel'>Stacked</h5>
                    <h5 className='staked'>{animal.staked}</h5>
                </div>
            </div>
        </div>
        
    );
}

AnimalsGlassBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default AnimalsGlassBox;