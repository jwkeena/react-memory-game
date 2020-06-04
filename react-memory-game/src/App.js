import React, { Component } from 'react';
import Header from './components/Header/';
import Footer from './components/Footer/';
import Jumbotron from './components/Jumbotron/';
import Logo from './components/Logo/';
import './App.css';

class App extends Component {
  
  state = {
    maxScoreReached: false,
    justLost: false,
    score: 0,
    topScore: 0,
    logoLinks: [
      {
        id: 1,
        src: "https://jwkeena.github.io/assets/images/logo-html.png",
        clicked: false
      },
      {
        id: 2,
        src: "https://jwkeena.github.io/assets/images/logo-postman.png",
        clicked: false
      },
      {
        id: 3,
        src: "https://jwkeena.github.io/assets/images/logo-firebase.png",
        clicked: false
      },
      {
        id: 4,
        src: "https://jwkeena.github.io/assets/images/logo-materialize.png",
        clicked: false
      },
      {
        id: 5,
        src: "https://jwkeena.github.io/assets/images/logo-js.png",
        clicked: false
      },
      {
        id: 6,
        src: "https://jwkeena.github.io/assets/images/logo-mongodb.png",
        clicked: false
      },
      {
        id: 7,
        src: "https://jwkeena.github.io/assets/images/logo-node.png",
        clicked: false
      },
      {
        id: 8,
        src: "https://jwkeena.github.io/assets/images/logo-css.png",
        clicked: false
      },
      {
        id: 9,
        src: "https://jwkeena.github.io/assets/images/logo-sequelize.png",
        clicked: false
      },
      {
        id: 10,
        src: "https://jwkeena.github.io/assets/images/logo-jquery.png",
        clicked: false
      },
      {
        id: 11,
        src: "https://jwkeena.github.io/assets/images/logo-react.png",
        clicked: false
      },
      {
        id: 12,
        src: "https://jwkeena.github.io/assets/images/logo-bootstrap.png",
        clicked: false
      },
      {
        id: 13,
        src: "https://jwkeena.github.io/assets/images/logo-bash.png",
        clicked: false
      },
      {
        id: 14,
        src: "https://jwkeena.github.io/assets/images/logo-mysql.png",
        clicked: false
      },
      {
        id: 15,
        src: "https://jwkeena.github.io/assets/images/logo-xml.png",
        clicked: false
      }
    ]
  }

  shuffle = () => {
    const array = this.state.logoLinks; // Creating copy of current logoLinks array to not mutate the state directly
    let i = array.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random()* (i+1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    };
    this.setState({
      logoLinks: array
    });
  };

  lose = () => {
      // Reset all click booleans to false (if they are true), then set score to zero
      const resetLogoLinks = this.state.logoLinks;
      for (let i=0; i<15; i++) {
        if (resetLogoLinks[i].clicked === true) {
          resetLogoLinks[i].clicked = !resetLogoLinks[i].clicked;
        }
      };

      this.setState({
        score: 0,
        logoLinks: resetLogoLinks,
        justLost: true
      })
  };

  updateTopScore = () => {
    if (this.state.score >= this.state.topScore) {
      this.setState({
        topScore: this.state.score
      });
    };
  }

  maxScoreCheck = () => {
    if (this.state.score === 15) {
      this.setState({
        maxScoreReached: true
      });
    };
  };

  clickHandler = (index) => {
    const tempLogoLinks = this.state.logoLinks; // Create copy of entire array
    
    if (tempLogoLinks[index].clicked === true) {
      this.lose();
      console.log("this logo has been clicked already!");

    } else {

      tempLogoLinks[index].clicked = !tempLogoLinks[index].clicked // Flip boolean at just one point
      // Replace state with copied and mutated state
      this.setState({
        justLost: false,
        logoLinks: tempLogoLinks,
        score: this.state.score + 1
        }, () => { // Must run updateTopScore in a callback because setState is asynchronous
          this.updateTopScore();
          this.maxScoreCheck();
      });
    };

    this.shuffle();
  }

  render () {
    return (
      <div>
        <Header
          resetGameState={this.resetGameState} score={this.state.score} topScore={this.state.topScore}
        />
        <Jumbotron maxScoreReached={this.state.maxScoreReached}/>
        <div className="container">
          {this.state.logoLinks.map( (logoLink, index) => {
            return(
                <Logo justLost={this.state.justLost} src={logoLink.src} key={logoLink.id} shuffle={this.shuffle} logoLinks={this.state.logoLinks} clickHandler={() => this.clickHandler(index)}/> 
                )
              })}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
