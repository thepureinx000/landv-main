import React, { Component } from 'react';
import TableItem from './TableItem';

const datafirst = {
    title: "ui/ux design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, maiores placeat! Atque officiis numquam voluptatibus esse, fuga deserunt ullam tempora earum non quis enim aliquid quod exercitationem sed voluptas molestiae."
};
const datasecond = {
    title: "front-end",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, maiores placeat! Atque officiis numquam voluptatibus esse, fuga deserunt ullam tempora earum non quis enim aliquid quod exercitationem sed voluptas molestiae."
};
const datathird = {
    title: "back-end",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, maiores placeat! Atque officiis numquam voluptatibus esse, fuga deserunt ullam tempora earum non quis enim aliquid quod exercitationem sed voluptas molestiae."    
};

class TableList extends Component {
    render() {
        return (
            <div className="project-tags">
                <TableItem data={datafirst} />
                <TableItem data={datasecond} />
                <TableItem data={datathird} />                
            </div>
        );
    }
}

export default TableList;