import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import styles from '../Cell.styles';
const useStyles = makeStyles(styles);

const Select = ({ value }) => {
  const classes = useStyles();
  return <span className={classes.select}>{value}</span>;
};
Select.defaultProps = {};
Select.propTypes = {
  value: PropTypes.string,
};

export default Select;
