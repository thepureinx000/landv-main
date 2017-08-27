import React, { Component } from 'react';

class GetStartedItem extends Component {
    render() {
        return (
            <div className="get-started-block">
                <div className="get-started-block-overlay"></div>
                <div className="get-started-wrap">
                    <span>full-stack web developers</span>
                    <h4>laszlo and vano</h4>
                    <button className="get-started-block-btn">Hire us</button>
                    <button className="get-started-block-btn">GitLab</button>
                </div>
            </div>
        );
    }
}

export default GetStartedItem;