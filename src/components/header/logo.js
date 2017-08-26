import React, { Component } from 'react';
import logo from '../../media/img/logo.png';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        );
    }
}

export default Logo;