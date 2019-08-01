import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  withStyles,
} from '@material-ui/core';

const styles = (theme) => ({
  formControl: {
    flex: 1,
  },
});

class StatBar extends Component {
  render() {
    const { classes, sites, stats } = this.props;
    return (
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel htmlFor={'site'}>Site</InputLabel>
        <Select
          value={this.props.site}
          onChange={this.props.onChangeSite}
          inputProps={{
            name: 'site',
            id: 'site',
          }}
        >
          <MenuItem value={''}>
            <em>{'All'}</em>
          </MenuItem>
          {
            (sites && sites.length)
            ? sites.map(site => (
              <MenuItem value={site._id}>
                <em>{site.name}</em>
              </MenuItem>))
            : null
          }
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(StatBar);
