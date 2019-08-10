import React, { Component } from 'react';
import Header from './components/Header/index';
import Jumbotron from './components/Jumbotron/index'
import Logo from './components/Logo/index'
import './App.css';

const logoLinks = [
  "https://jwkeena.github.io/images/logo-html.png",
  "https://jwkeena.github.io/images/logo-postman.png",
  "https://jwkeena.github.io/images/logo-firebase.png",
  "https://jwkeena.github.io/images/logo-materialize.png",
  "https://jwkeena.github.io/images/logo-js.png",
  "https://jwkeena.github.io/images/logo-mongodb.png",
  "https://jwkeena.github.io/images/logo-node.png",
  "https://jwkeena.github.io/images/logo-css.png",
  "https://jwkeena.github.io/images/logo-sequelize.png",
  "https://jwkeena.github.io/images/logo-jquery.png",
  "https://jwkeena.github.io/images/logo-react.png",
  "https://jwkeena.github.io/images/logo-bootstrap.png",
  "https://jwkeena.github.io/images/logo-bash.png",
  "https://jwkeena.github.io/images/logo-mysql.png",
  "https://jwkeena.github.io/images/logo-xml.png",
  "https://jwkeena.github.io/images/logo-latin.png",
  "https://jwkeena.github.io/images/logo-greek.png",
  "https://jwkeena.github.io/images/logo-express.png"
]

const placement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
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
          {logoLinks.map( (logoLink, index) => {
            return(
              <Logo src={logoLink} key={index}/>
          )
          })}
        </div>
      </div>
    );
  }
}

export default App;
