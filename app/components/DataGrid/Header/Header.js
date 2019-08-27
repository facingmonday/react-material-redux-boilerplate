import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Search from '../Search';
import styles from './Header.styles';
const useStyles = makeStyles(styles);

const Header = ({ searchInputLabel = 'Search', addLabel = 'Add', onAdd, onSearch, searchTerm }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.header}>
      <Grid item xs={12} sm={9}>
        <Button variant="contained" color="default" onClick={() => onAdd()}>
          {addLabel}
        </Button>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Search
          placeholder={searchInputLabel}
          inputProps={{
            fullWidth: true,
          }}
          value={searchTerm}
          onChange={term => onSearch(term)}
        />
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  searchTerm: PropTypes.string,
  addLabel: PropTypes.string,
  searchInputLabel: PropTypes.string,
};

export default Header;
