import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import styles from './Error.styles';
const useStyles = makeStyles(styles);

const ErrorModal = ({ message }) => {
  const classes = useStyles();
  return <span className={classes.errorModal}>{message}</span>;
};
ErrorModal.defaultProps = {};
ErrorModal.propTypes = {
  message: PropTypes.string,
};

export default ErrorModal;
