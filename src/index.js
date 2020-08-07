import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

