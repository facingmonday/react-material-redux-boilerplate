import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import styles from '../Cell.styles';
const useStyles = makeStyles(styles);

const Text = ({ value, ...rest }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.text} {...rest}>
      {value}
    </Typography>
  );
};
Text.defaultProps = {};
Text.propTypes = {
  value: PropTypes.string,
};

export default Text;
