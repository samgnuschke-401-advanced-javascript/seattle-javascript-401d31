import React from 'react';

import './header.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
    }
  }

  handleToggle = () => {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <React.Fragment>
        <nav id="headerNav">
          <ul>
            <li>One</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </nav>
        <button onClick={this.handleToggle}>toggleHeader</button>
        {this.state.visible ? <h1 id="head">Our Awesome Header</h1> : null}
      </React.Fragment>
    )
  }
}

export default Header;
