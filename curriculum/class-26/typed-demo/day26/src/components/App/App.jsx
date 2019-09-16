// const React = require('react');
import React from 'react';
import Header from '../Header/Header';

import './app.css';

// Vinicio - a component in react can be either a function or a class
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 100,
      kali: 'is the best',
      ginger: 'second best',
    };
  }

  updateState = event => {
    // Vinicio - if you don't use an arrow function `this` won't be bound to the class
    // Vinicio - this is called lexical scope
    console.log('HELLO!!!!!');
    this.setState({counter: 1001},() => console.log('state changed'));
    // Vinicio - setState is an async function

  };

  incrementCounter = event => {
    this.setState(previousState => ({
        counter: previousState.counter + 1,
      }));
  };

  // Vinicio - a class component MUST have a render method
  render() {
    // Vinicio - this render method MUST return JSX
    // Vinicio - These are called react fragment
    return (
      <>
        <Header/>
        <p> Kali is the very best!</p>
        <p> The counter is equal to: {this.state.counter}</p>

        <button onClick={this.updateState}>ENGAGE!</button>

        <button onClick={this.incrementCounter}>INCREMENT COUNTER =D</button>
      </>
    );
  }
}

export default App;
// module.exports = App;