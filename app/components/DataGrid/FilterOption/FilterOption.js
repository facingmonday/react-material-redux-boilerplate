import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Select, MenuItem, Checkbox, TextField, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import styles from './FilterOption.styles';

const useStyles = makeStyles(styles);

const FilterOption = ({ column, filter = {}, onFilter }) => {
  const classes = useStyles();
  const { field, filterOptions } = column;
  const onChange = value => {
    onFilter({ [field]: value });
  };
  if (filterOptions && filterOptions.type === 'boolean') {
    return (
      <FormControl className={classes.checkboxContainer} fullWidth>
        <FormControlLabel
          control={<Checkbox checked={Boolean(filter.value || false)} onChange={onChange} value="checkedA" />}
          label={filterOptions.label || 'Enabled?'}
          className={classes.checkbox}
        />
      </FormControl>
    );
  }
  if (filterOptions && filterOptions.type === 'select') {
    return (
      <FormControl fullWidth className={classes.selectContainer}>
        <Select className={classes.select} value={filter && filter.value} onChange={onChange}>
          <MenuItem value=""></MenuItem>
          {filterOptions.options.map(option => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
  return (
    <FormControl fullWidth className={classes.textContainer}>
      <TextField id={field} className={classes.text} label={() => null} value={filter.value ? filter.value : null} />
    </FormControl>
  );
};
FilterOption.propTypes = {
  column: PropTypes.object,
  filter: PropTypes.object,
  onFilter: PropTypes.func,
};
export default FilterOption;
