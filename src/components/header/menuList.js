import React, { Component } from 'react';

class MenuList extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li><a href="#" className="menu-link">Home</a></li>
                    <li><a href="#" className="menu-link">Why L&V</a></li>
                    <li><a href="#" className="menu-link">Portfolio</a></li>
                    <li><a href="#" className="menu-link">Blog</a></li>
                    <li><a href="#" className="menu-link">Hire us</a></li>
                    <li><a href="#" className="get-started-btn menu-link">Get Started</a></li>
                </ul>
            </div>
        );
    }
}

export default MenuList;