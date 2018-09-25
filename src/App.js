import React, { Component } from 'react';
import './App.css';
import { initApp } from './apps/comedyGlasses';
//import { initApp } from './apps/cube';

class App extends Component {
  componentDidMount(){
    initApp();
  }
  render() {
    return (
      <div className="App">
        <canvas width="1024" height="1024" id='jeeFaceFilterCanvas'></canvas>
        <div id='jeelizFaceFilterFollow'></div>
      </div>
    );
  }
}

export default App;
