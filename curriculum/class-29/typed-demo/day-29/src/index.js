import React from 'react';
import ReactDOM from 'react-dom';

// Vinicio - this is how we import things when the package has many exports
import {BrowserRouter} from "react-router-dom";

import App from './Components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));

