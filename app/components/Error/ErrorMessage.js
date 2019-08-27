import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import styles from './Error.styles';
const useStyles = makeStyles(styles);

const ErrorMessage = ({ message }) => {
  const classes = useStyles();
  return <span className={classes.errorMessage}>{message}</span>;
};
ErrorMessage.defaultProps = {};
ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
