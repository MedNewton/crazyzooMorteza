import React from 'react';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';

import { Button } from 'react-bootstrap';

const PresaleWelcomeGlassBox = props => {

    const data = props.data;

    return (
        <div className='presaleWelcomeGlassBox'>
            <div className="presaleWelcomeBoxTitleWrapper">Welcome to Crazy Woo</div>
            <p>Crazy Zoo is a Play to Earn Social Impact Ecosystem that offers a user-friendly platform that connects a variety of blockchain and cryptocurrency-related industries.</p>
            <p className='outlinedParagraph'>With innovation at the foundation of all we do, we constantly strive to stay one step ahead of the competition in this constantly evolving industry, while also making sure we adhere to our basic values of sustainability and equality.</p>
        </div>
    );

}

PresaleWelcomeGlassBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default PresaleWelcomeGlassBox;