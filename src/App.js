import React, { Component } from 'react';

import { Header } from './shared/Header';
import { PadDetail } from './components/PadDetail';
import { PadList } from './components/Pad/PadList';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isPadList: true
    }
  }

  navigate = () => {
    this.setState({
      isPadList: !this.state.isPadList
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.navigate}>Toggle Toggle</button>
        <div className="container">
          {this.state.isPadList ? <PadList /> : <PadDetail />}
        </div>
      </div>
    );
  }
}

export default App;
