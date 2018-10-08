import React, { Component } from 'react';
import Randomizer from './containers/randomizer.js'

import './App.css';
// leaving app intact for scalability in the future is not needed currently
class App extends Component {
  render() {
    return (
      <div className="App">
        <Randomizer className="main" />
      </div>
    );
  }
}

export default App;
