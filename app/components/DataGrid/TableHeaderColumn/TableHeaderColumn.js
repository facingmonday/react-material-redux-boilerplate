import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import styles from '../TableHeader/TableHeader.styles';
import SortIcon from '../SortIcon/SortIcon';

const useStyles = makeStyles(styles);

const ASC = 'ASC';
const DESC = 'DESC';

const TableHeaderColumn = ({ column, sort, onSort }) => {
  const classes = useStyles();
  const sortOption = sort && sort.find(obj => obj.field === column.field);
  return (
    <Grid
      container
      {...column.props}
      className={classes.headerCell}
      key={`dg_tableheadercolumn_${column.label.replace(' ', '')}`}
      onClick={() =>
        typeof onSort === 'function' &&
        onSort({
          field: column.field,
          direction: sortOption && sortOption.direction === ASC ? DESC : ASC,
        })
      }
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography className={classes.headerCell}>{column.label}</Typography>
      </Grid>
      {sortOption && <SortIcon field={sortOption.field} direction={sortOption.direction} />}
    </Grid>
  );
};

TableHeaderColumn.defaultProps = {};
TableHeaderColumn.propTypes = {
  column: PropTypes.object,
  onSort: PropTypes.func,
  sort: PropTypes.array,
};

export default TableHeaderColumn;
