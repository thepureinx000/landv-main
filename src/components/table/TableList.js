import React, { Component } from 'react';
import TableItem from './TableItem';
import uiuxproject from '../../media/img/table/uiuxproject.png';
import frontend from '../../media/img/table/frontend.png';
import backend from '../../media/img/table/backend.png';

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
            <div>
                <section className="project-tags">
                    <TableItem data={datafirst} img={uiuxproject} />
                    <TableItem data={datasecond} img={frontend} />
                    <TableItem data={datathird} img={backend} />                
                </section>
            </div>
        );
    }
}

export default TableList;