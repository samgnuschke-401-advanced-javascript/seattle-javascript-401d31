import React from 'react';
import {Route} from 'react-router-dom';

import Contact from '../Contact/Contact';
import About from '../About/About';
import Header from '../Header/Header';

import If from '../If/If';

import './App.css';

function App() {
  const dog = 'Kali';
  return (
    <>
      <p>Welcome to Front-end Routing!</p>
      <Header/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/about" component={About}/>
      <If condition={dog === 'Kali'}>
        <p>Yes, Kali is the cutest dog ever!</p>
        <div> More things to render</div>
        <p> Jacob is Sick!</p>
      </If>
    </>
  );
}

export default App;
