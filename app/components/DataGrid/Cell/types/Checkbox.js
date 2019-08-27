import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Checkbox as MuiCheckbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import styles from '../Cell.styles';
const useStyles = makeStyles(styles);

const Checkbox = ({ column, value, onChange }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.checkboxContainer} fullWidth>
      <MuiCheckbox
        className={classes.checkbox}
        checked={Boolean(value || false)}
        onChange={onChange}
        value={column.field}
      />
    </FormControl>
  );
};
Checkbox.defaultProps = {};
Checkbox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  column: PropTypes.object,
};

export default Checkbox;
