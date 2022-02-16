import React, { Component } from 'react';
import './Gameover.css';
import './App.css';

class Gameover extends Component {
  render() {
    const score = this.props.scoreCallback();

    return(
      <div id="overlay">
        <div id="gameover">Your score: <br/>{score}
        <button id="startgame" onClick={ this.props.startCallback }>New Game</button></div>
      </div>
    );

  }
}

export default Gameover;
