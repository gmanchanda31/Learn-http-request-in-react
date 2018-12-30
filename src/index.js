import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';

Axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config here. Eg: You can add headers 
    // to your request here.
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

Axios.interceptors.response.use(
  response => {
    console.log(response);
    // Edit request config here. Eg: You can add headers
    // to your request here.
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
