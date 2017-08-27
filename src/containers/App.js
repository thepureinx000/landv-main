import React, { Component } from 'react';
import Header from '../components/header/Header';
import Table from '../components/table/Table';
import GetStartedItem from '../components/getstarted/GetStartedItem';
import Footer from '../components/footer/Footer';

import '../media/css/App.css';
import '../media/css/responsive.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Table />
        <GetStartedItem />
        <Footer />
      </div>
    );
  }
}

export default App;
