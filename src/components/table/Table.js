import React, { Component } from 'react';
import TableHeader from './TableHeader';

class Table extends Component {
    render() {
        return (
            <div className="table-block">
                <TableHeader />
            </div>
        );
    }
}

export default Table;