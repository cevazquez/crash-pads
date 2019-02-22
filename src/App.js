import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './shared/Header';
import { PadDetail } from './components/PadDetail';
import { PadList } from './components/Pad/PadList';

import { Nav } from './shared/Header/Nav';

import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="homeBanner">
            <Nav />
            <Header />
          </div>
          <div className="container">
            <Route exact path="/" component={PadList} />
            <Route exact path="/test" component={PadDetail} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
