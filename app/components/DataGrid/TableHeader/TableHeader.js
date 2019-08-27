import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import TableHeaderColumn from '../TableHeaderColumn/TableHeaderColumn';
import styles from './TableHeader.styles';

const useStyles = makeStyles(styles);

const TableHeader = ({ actionColumns, columns, showActionColumn, sort, onSort }) => {
  const classes = useStyles();

  const actionColumnClass = () => {
    if (actionColumns === 2) {
      return classes.actionColumnDouble;
    }
    return classes.actionColumnSingle;
  };

  return (
    <Grid container className={classes.headerContainer} spacing={2}>
      {columns
        .filter(col => typeof col.showColumn === 'undefined' || col.showColumn)
        .map(col => (
          <TableHeaderColumn column={col} />
        ))}
      {showActionColumn ? (
        <Grid item xs className={classNames(classes.headerContainer, classes.headerCell, actionColumnClass())} />
      ) : null}
    </Grid>
  );
};
TableHeader.defaultProps = {
  columns: [],
  showActionColumn: true,
};
TableHeader.propTypes = {
  columns: PropTypes.array,
  showActionColumn: PropTypes.bool,
  actionColumns: PropTypes.number,
  onSort: PropTypes.func,
  sort: PropTypes.object,
};

export default TableHeader;
