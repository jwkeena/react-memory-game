import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  
  state = {
    score: 0,
    topScore: 0
  }

  resetGameState = () => {
    console.log("clicked")
    this.setState({
      score: 0,
      topScore: 0
    })
  }

  render () {
    return (
      <div>
        <Header
          resetGameState={this.resetGameState}
        />
        <div className="container">
  
        </div>
      </div>
    );
  }
}

export default App;
