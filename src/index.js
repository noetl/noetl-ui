import React from 'react';
import ReactDOM from 'react-dom';
import './assets/FontAwesome/css/fontawesome-all.css'
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import ReactTooltip from 'react-tooltip';

import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store()}>
    <BrowserRouter>
      <React.Fragment>
        <App/>
        <ReactTooltip effect='solid' border delayShow={1000}/>
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
