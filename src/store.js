import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

export default () => {
  const middleware = applyMiddleware(thunk, logger);
  const store = createStore(rootReducer, middleware);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./rootReducer', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};