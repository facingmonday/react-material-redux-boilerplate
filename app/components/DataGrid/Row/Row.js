import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import RowActions from '../RowActions';
import Cell from '../Cell';

import styles from './Row.styles';
const useStyles = makeStyles(styles);

const Row = ({ columns, showEdit, showDelete, idField, index, rowData }) => {
  const classes = useStyles();
  console.log('rowData', columns, rowData);
  return (
    <Grid key={index} container className={classNames(classes.row, classes[index % 2 ? 'evenRow' : 'oddRow'])}>
      <Grid container>
        {columns.map(column => (
          <Cell column={column} value={rowData[column.field]} />
        ))}
        {showEdit || showDelete ? <RowActions id={rowData[idField]} /> : null}
      </Grid>
    </Grid>
  );
};

Row.propTypes = {
  idField: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  index: PropTypes.number.isRequired,
  columns: PropTypes.object.isRequired,
  showEdit: PropTypes.bool,
  showDelete: PropTypes.bool,
  rowData: PropTypes.object.isRequired,
};

export default Row;
