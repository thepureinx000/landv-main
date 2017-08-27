import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableList from './TableList';

class Table extends Component {
    render() {
        return (
            <div className="table-block">
                <TableHeader />
                <TableList />
            </div>
        );
    }
}

export default Table;