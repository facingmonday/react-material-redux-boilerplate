import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import configureStore, { history } from './store/configureStore';
import App from './containers/App';
import themeJSON from './theme';

const theme = createMuiTheme(themeJSON);
const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App history={history} />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
), document.getElementById('app'));
