import React from 'react';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';

import { Button } from 'react-bootstrap';

const FoodBox = props => {

    const data = props.data;
    return (
        <div className="foodGlassBox row">
            <div className="col-3 foodBoxTitleWrapper">
                <h5 className="foodBoxTitle">Food available</h5>
            </div>
            <div className="col-9 foodWrapper">
                {
                    data.map((foodItem, index) => (
                        <div key={index} className="row foodDataWrapper">
                            <div className="col-6 foodNameWrapper">
                                <img src={foodItem.foodIcon} alt="" className='foodIcon' />
                                <h5 className="foodName">{foodItem.food.toString()}</h5>
                            </div>
                            <div className="col-2 foodAmountWrapper">
                                <h5 className="foodAmount">{foodItem.amount.toString()}</h5>
                            </div>
                            <div className="col-4 feedBtnWrapper">
                                <Button className="feedBtn">Feed</Button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

FoodBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default FoodBox;