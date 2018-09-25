import React, { Component } from 'react';

import { init_glanceTracking } from './apps/glanceTrack';

class App2 extends Component {
  componentDidMount(){
    init_glanceTracking();
  }
  render() {
    return (
      <div className="App">
        <h1 id="status"></h1>
        <div id='glanceTrackerCanvasContainer'>
          &nbsp;Tracking your glance ...<br/>
          <canvas id='glanceTrackerCanvas'></canvas>
        </div>
      </div>
    );
  }
}

export default App2;
