import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

Amplify.configure(config)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
