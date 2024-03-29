import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
import { createBrowserHistory } from 'history';

// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import sagas from '../sagas';

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const history = createBrowserHistory();

export default function configureStore() {
  // const logger = createLogger({
  // ...options
  // });
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) // eslint-disable-line
      : compose;
  const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware));
  const store = createStore(rootReducer(history), enhancer);

  // Start all of our sagas
  sagaMiddleware.run(sagas);

  return store;
}
