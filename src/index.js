import React from 'react';
import ReactDOM from 'react-dom';
import './assets/FontAwesome/css/fontawesome-all.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
