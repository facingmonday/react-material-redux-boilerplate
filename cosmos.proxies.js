import createWrapperProxy from 'react-cosmos-wrapper-proxy';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './app/theme';

const muiProxy = createWrapperProxy({
  // Required
  component: MuiThemeProvider, // The wrapper component
  fixtureKey: 'mui', // Key

  // Optional
  defaultEnabled: true, // enable by default in every fixture
  // Props to pass to the wrapper component
  // Note: can be passed from the fixture as well
  props: {
    theme: createMuiTheme(theme),
  },
});

export default [muiProxy];
