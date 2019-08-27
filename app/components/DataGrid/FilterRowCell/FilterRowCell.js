import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FilterOption from '../FilterOption';
import styles from '../DataGrid.styles';
const useStyles = makeStyles(styles);

const FilterRowCell = ({ column, filter }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.cell}
      item
      direction="column"
      alignItems="center"
      justify="center"
      {...column.props}
      key={`dg_filterrowcell_${column.field}`}
    >
      {column.filterOptions ? <FilterOption column={column} filter={filter} /> : null}
    </Grid>
  );
};
FilterRowCell.defaultProps = {};
FilterRowCell.propTypes = {
  idField: PropTypes.string,
  onClickRow: PropTypes.func,
  onFilter: PropTypes.func,
  column: PropTypes.object,
  filter: PropTypes.object,
};
export default FilterRowCell;
