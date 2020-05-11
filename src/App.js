import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles';
import CircleSelector from './components/CircleSelector';

const circles = ['SELECT CIRCLE 1', 'SELECT CRICLE 2', 'SELECT CIRCLE 3', 'SELECT CIRCLE 4'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selCircleIdx: 'SELECT CIRCLE 1' ,
      numbers: [],
      };
    }
    handleCircleSelection = (circleIdx) => {
      this.setState({selCircleIdx: circleIdx})
    }
 

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        Selected circle: {circles[this.state.selCircleIdx]}
        {/* <button onClick={() => this.setState((state) => {
          return {
            selCircleIdx: ++state.selCircleIdx % 4
          };
        })}>
          Pick
        </button> */}
        <main>
        <CircleSelector 
          circles= {circles} 
          selCircleIdx= {this.state.selCircleIdx}
          handleCircleSelection={this.handleCircleSelection}
        />
          
        <Circles
          circles= {circles} 
         
          numbers= {this.state.selCircleIdx}
         />
          
        </main>
      </div>
    );
  }
}

export default App;