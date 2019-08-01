import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createHistory from 'history/createBrowserHistory';

import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import sagas from '../sagas';


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const history = createHistory();

export default function configureStore() {
  const logger = createLogger({
    // ...options
  });
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
  ;
  const enhancer = composeEnhancers(
    applyMiddleware(routerMiddleware(history), sagaMiddleware ),
  );
  const store = createStore(rootReducer(history), enhancer);

  // Start all of our sagas
  sagaMiddleware.run(sagas);

  return store;
}
