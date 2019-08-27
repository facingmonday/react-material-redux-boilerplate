import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import People from '@material-ui/icons/People';
import Home from '@material-ui/icons/Home';
import Settings from '@material-ui/icons/Settings';

const styles = () => ({
  icon: {},
});

const availableIcons = {
  home: <Home />,
  settings: <Settings />,
  people: <People />,
};

class Icon extends Component {
  render() {
    const { name } = this.props;
    const iconName = availableIcons[name] ? name : 'home';
    return availableIcons[iconName];
  }
}

Icon.defaultProps = {};

Icon.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
};

export default withStyles(styles)(Icon);
