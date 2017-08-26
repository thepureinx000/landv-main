import React, { Component } from 'react';
import arrowDown from '../../media/img/down-arrow.png';

class ArrowDown extends Component {
    render() {
        return (
            <div className="down-arrow">
                <img src={arrowDown} alt="down" />
            </div>
        );
    }
}

export default ArrowDown;