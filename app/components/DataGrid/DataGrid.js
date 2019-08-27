/**
 * DataGrid
 * created by JMP
 */

import React from 'react';
import PropTypes from 'prop-types';
import { TablePagination, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Header from './Header/Header';
import TableHeader from './TableHeader';
import Rows from './Rows';
import FilterRow from './FilterRow';

import styles from './DataGrid.styles';
const useStyles = makeStyles(styles);

const DataGrid = props => {
  const classes = useStyles();
  let actionColumnCount = 0;
  actionColumnCount += props.showEdit ? 1 : 0;
  actionColumnCount += props.showDelete ? 1 : 0;

  return (
    <Grid container>
      <Grid item xs={12}>
        {props.header ? React.cloneElement(props.header, { ...props }) : <Header />}
      </Grid>
      <Grid container className={classes.tableWrapper}>
        <Grid container className={props.tableClassName}>
          {props.columns && props.showHeader ? <TableHeader actionColumns={actionColumnCount} /> : null}
          {props.columns && true && (
            <Grid container className={classes.tableRowsWrapper}>
              {props.columns ? <FilterRow actionColumns={actionColumnCount} /> : null}
            </Grid>
          )}
          <Grid container className={classes.tableRowsWrapper}>
            <Rows />
          </Grid>
        </Grid>
      </Grid>
      {props.data && props.data.length && props.showPagination ? (
        <Grid container justify="flex-end">
          <TablePagination
            page={props.offset}
            rowsPerPage={props.limit}
            rowsPerPageOptions={props.rowsPerPageOptions}
            count={props.total}
            onChangeRowsPerPage={evt => props.onChangeLimit({ limit: evt.target.value })}
            onChangePage={(evt, page) => props.onChangePage({ offset: page * props.limit })}
            component="div"
            classes={{
              root: classes.pagination,
              toolbar: classes.paginationToolbar,
            }}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};
DataGrid.defaultProps = {
  showEdit: true,
  showDelete: true,
  limit: 10,
  offset: 0,
  showPagination: true,
  rowsPerPageOptions: [5, 10, 25, 50, 100, 250, 500],
  showHeader: true,
};
DataGrid.propTypes = {
  header: PropTypes.any,
  showHeader: PropTypes.bool,
  data: PropTypes.array,
  columns: PropTypes.any,
  total: PropTypes.number,
  offset: PropTypes.number,
  limit: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeLimit: PropTypes.func,
  showEdit: PropTypes.bool,
  showDelete: PropTypes.bool,
  showPagination: PropTypes.bool,
  tableClassName: PropTypes.string,
  rowsPerPageOptions: PropTypes.array,
};
export default DataGrid;
