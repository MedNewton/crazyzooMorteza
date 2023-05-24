import React from 'react';
import PropTypes from 'prop-types'

const SwappingV3 = props => {
    const data = props.data;
    return(
        <div className='swappingV3GlassBox'>
            <h5 className="swappingV3BoxTitle">Uniswap V3</h5>
            <h5 className="swappingV3Data">1 {data[0].from.toString()} = ${data[0].to.toString() + ' ' + data[0].price.toString()}</h5>
        </div>
    );
}

SwappingV3.propTypes = {
    data: PropTypes.array.isRequired,
}

export default SwappingV3;