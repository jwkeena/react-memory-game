import React, { Component } from 'react';
import Header from './components/Header/index';
import Jumbotron from './components/Jumbotron/index'
import Logo from './components/Logo/index'
import './App.css';

const logoLinks = [
  "https://jwkeena.github.io/images/logo-html.png"
]
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
          resetGameState={this.resetGameState} score={this.state.score} topScore={this.state.topScore}
        />
        <Jumbotron/>
        <div className="container">
          <Logo/>
        </div>
      </div>
    );
  }
}

export default App;
