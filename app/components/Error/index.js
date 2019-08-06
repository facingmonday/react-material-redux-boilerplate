import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = () => ({});

class Error extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { message } = this.props;
    return <div>{message}</div>;
  }
}
Error.defaultProps = {};
Error.propTypes = {};

export default withStyles(styles)(Error);
