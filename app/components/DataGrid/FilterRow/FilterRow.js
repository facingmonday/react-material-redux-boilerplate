import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FilterRowCell from '../FilterRowCell';

import styles from './FilterRow.styles';
const useStyles = makeStyles(styles);

const FilterRow = ({ columns, filters, showEdit, showDelete }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.filterRow}>
      <Grid container>
        {columns.map(column => (
          <FilterRowCell column={column} filter={filters.find(f => f.field === column.field)} />
        ))}
        {showEdit || showDelete ? <Grid item xs={2} /> : null}
      </Grid>
    </Grid>
  );
};
FilterRow.defaultProps = {};
FilterRow.propTypes = {
  columns: PropTypes.array,
  showEdit: PropTypes.bool,
  showDelete: PropTypes.bool,
  filters: PropTypes.array,
};

export default FilterRow;
