import React from 'react';

import Header from './components/header/header.jsx';
import Counter from './components/counter/counter.jsx';

import './style/reset.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    )
  }
}

export default App;