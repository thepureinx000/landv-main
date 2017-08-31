import React, { Component } from 'react';

class TableItem extends Component {
    render() {
        return (
            <div className="project-tag">
                <img src={this.props.img} />
                <span>{this.props.data.title}</span>
                <p>{this.props.data.description}</p>
                <button className="project-btn">Select</button>
            </div>
        );
    }
}

export default TableItem;