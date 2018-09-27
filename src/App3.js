import React, { Component } from 'react';
import { initApp } from './apps/faceTrack';

class App3 extends Component {
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

export default App3;
