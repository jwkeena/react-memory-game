import React, { Component } from 'react';
import Header from './components/Header/index';
import Jumbotron from './components/Jumbotron/index'
import Logo from './components/Logo/index'
import './App.css';

class App extends Component {
  
  state = {
    score: 0,
    topScore: 0,
    logoLinks: [
      {
        id: 1,
        src: "https://jwkeena.github.io/images/logo-html.png",
        clicked: false
      },
      {
        id: 2,
        src: "https://jwkeena.github.io/images/logo-postman.png",
        clicked: false
      },
      {
        id: 3,
        src: "https://jwkeena.github.io/images/logo-firebase.png",
        clicked: false
      },
      {
        id: 4,
        src: "https://jwkeena.github.io/images/logo-materialize.png",
        clicked: false
      },
      {
        id: 5,
        src: "https://jwkeena.github.io/images/logo-js.png",
        clicked: false
      },
      {
        id: 6,
        src: "https://jwkeena.github.io/images/logo-mongodb.png",
        clicked: false
      },
      {
        id: 7,
        src: "https://jwkeena.github.io/images/logo-node.png",
        clicked: false
      },
      {
        id: 8,
        src: "https://jwkeena.github.io/images/logo-css.png",
        clicked: false
      },
      {
        id: 9,
        src: "https://jwkeena.github.io/images/logo-sequelize.png",
        clicked: false
      },
      {
        id: 10,
        src: "https://jwkeena.github.io/images/logo-jquery.png",
        clicked: false
      },
      {
        id: 11,
        src: "https://jwkeena.github.io/images/logo-react.png",
        clicked: false
      },
      {
        id: 12,
        src: "https://jwkeena.github.io/images/logo-bootstrap.png",
        clicked: false
      },
      {
        id: 13,
        src: "https://jwkeena.github.io/images/logo-bash.png",
        clicked: false
      },
      {
        id: 14,
        src: "https://jwkeena.github.io/images/logo-mysql.png",
        clicked: false
      },
      {
        id: 15,
        src: "https://jwkeena.github.io/images/logo-xml.png",
        clicked: false
      }
    ]
  }

  resetGameState = () => {
    console.log("clicked")
    this.setState({
      score: 0,
      topScore: 0
    });
  };

  shuffle = () => {
    let i = this.state.logoLinks.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random()* (i+1));
        temp = this.state.logoLinks[j];
        this.state.logoLinks[j] = this.state.logoLinks[i];
        this.state.logoLinks[i] = temp;
    };
    this.setState({
      logoLinks: this.state.logoLinks
    });
  };

  render () {
    return (
      <div>
        <Header
          resetGameState={this.resetGameState} score={this.state.score} topScore={this.state.topScore}
        />
        <Jumbotron/>
        <div className="container">
          {this.state.logoLinks.map( (logoLink, index) => {
            return(
              <Logo src={logoLink.src} key={logoLink.id} shuffle={this.shuffle} logoLinks={this.state.logoLinks}/>
          )
          })}
        </div>
      </div>
    );
  }
}

export default App;
