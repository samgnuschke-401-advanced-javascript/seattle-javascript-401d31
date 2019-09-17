import React from 'react';
/**
 * A component for incrementing / decrementing a number 
 * @param {number} count
 */


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleButtonUp = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    });
  };

  handleButtonDown = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.handleButtonDown}>-</button>
        <p>{this.state.count}</p>
        <button onClick={this.handleButtonUp}>+</button>
      </div>
    )
  }
}

export default Counter
