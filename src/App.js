import React, { Component } from 'react';
import { Header } from './shared/Header';
import { PadList } from './components/Pad/PadList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <PadList />
        </div>
      </div>
    );
  }
}

export default App;
