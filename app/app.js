import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import configureStore, { history } from './store/configureStore';
import App from './containers/App';

import theme from './theme';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={createMuiTheme(theme)}>
        <App history={history} />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
