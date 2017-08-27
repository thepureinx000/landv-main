import React, { Component } from 'react';

class FooterMenu extends Component {
  render() {
    return (
        <div className="footer-menu">
            <ul>
                <li><a href="#" className="footer-link">Home</a></li>
                <li><a href="#" className="footer-link">Why L & V</a></li>
                <li><a href="#" className="footer-link">Portfolio</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Hire us</a></li>
                <li><a href="#" className="footer-get-started footer-link">Get Started</a></li>
            </ul>        
        </div>
    );
  }
}

export default FooterMenu;
