import React, { Component } from 'react';

import Logo from './logo';
import ArrowDown from './arrowDown';
import MenuList from './menuList';

class Header extends Component {
    render() {
        return(
            <div className="main">
                <div className="main-overlay"></div>
                <div className="header">
                    <Logo />
                    <MenuList />
                </div>
                <div className="main-text">
                    <span>FULL-STACK INDEPENDENT DUO</span>
                    <h1>LASZLO & VANO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quasi aliquid beatae molestiae ipsa quia placeat asperiores</p>
                </div>
                <a href="#" className="arrow">
                    <ArrowDown />
                </a>
            </div>
        );
    }
}

export default Header;