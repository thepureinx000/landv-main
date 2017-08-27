import React, { Component } from 'react';
import Header from '../components/header/Header';
import Table from '../components/table/Table';
import '../media/css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
