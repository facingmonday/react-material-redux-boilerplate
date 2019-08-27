import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import styles from './SortIcon.styles';
const useStyles = makeStyles(styles);

const ASC = 'ASC';
const DESC = 'DESC';

export const SortIcon = ({ direction }) => {
  const classes = useStyles();

  if (direction === ASC) {
    return (
      <Grid item className={classes.sortIcons}>
        <ArrowDropUp />
      </Grid>
    );
  }
  if (direction === DESC) {
    return (
      <Grid item className={classes.sortIcons}>
        <ArrowDropDown />
      </Grid>
    );
  }
  return null;
};

SortIcon.defaultProps = {};
SortIcon.propTypes = {
  direction: PropTypes.string,
};

export default SortIcon;
