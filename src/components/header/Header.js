import React, { Component } from 'react';

import Logo from './logo';
import ArrowDown from './arrowDown';
import MenuList from './menuList';

class Header extends Component {
    render() {
        return(
            <div>
                <header className="main">
                    <div className="main-overlay"></div>
                    <div className="header">
                        <Logo />
                        <a href="#" className="m-menu-link">
                            <i className="fa fa-bars"></i>
                        </a>
                        <MenuList />
                    </div>
                    <div className="main-text">
                        <span>FULL-STACK INDEPENDENT DUO</span>
                        <h1>LASZLO & VANO</h1>
                        <p>L&V agency is a digital production agency focusing on web development as its core products.</p>
                    </div>
                    <a href="#" className="arrow">
                        <ArrowDown />
                    </a>
                </header>
        </div>
        );
    }
}

export default Header;