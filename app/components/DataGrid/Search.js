import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  TextField,
  FormHelperText,
  InputAdornment,
  withStyles,
} from '@material-ui/core';
import { FaFilter as FilterIcon } from 'react-icons/fa';
import { Search as SearchIcon } from '@material-ui/icons';
import styles from './styles';

class Search extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <FormControl {...this.props.inputProps}>
        <TextField
          fullWidth
          placeholder={this.props.placeholder || 'Filter'}
          value={this.props.value}
          onChange={(evt) => {
            this.props.onChange(evt.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'end'}>
                { !this.props.placeholder || this.props.placeholder.includes('Filter') ? <FilterIcon /> : <SearchIcon /> }
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    );
  }
}
Search.defaultProps = {

};
Search.propTypes = {
  inputProps: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.classes,
};

export default withStyles(styles)(Search);
