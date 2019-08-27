import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, TextField, FormHelperText, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FaFilter as FilterIcon } from 'react-icons/fa';
import { Search as SearchIcon } from '@material-ui/icons';
import styles from '../DataGrid.styles';

const useStyles = makeStyles(styles);

const Search = ({ placeholder, onChange, value }) => {
  const classes = useStyles();
  return (
    <FormControl fullWidth className={classes.searchContainer}>
      <TextField
        fullWidth
        placeholder={placeholder || 'Filter'}
        value={value}
        onChange={evt => {
          onChange(evt.target.value);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};
Search.defaultProps = {};
Search.propTypes = {
  inputProps: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.classes,
};

export default Search;
