import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import styles from './Cell.styles';
import ComponentTypes from './types';

const useStyles = makeStyles(styles);

const Cell = ({ idField, column, value, onClick = () => null, ...rest }) => {
  const classes = useStyles();
  console.log('column.type', column.type);
  let CellComponent = null;
  if (column && column.component) {
    CellComponent = column.component;
  } else if (column.type && ComponentTypes[column.type]) {
    CellComponent = ComponentTypes[column.type];
  } else {
    CellComponent = ComponentTypes.text;
  }

  return (
    <Grid
      className={classes.cell}
      item
      direction="column"
      alignItems="center"
      justify="center"
      onClick={onClick}
      key={`dg_cell_${column.field}`}
      {...column.props}
      {...rest}
    >
      {<CellComponent column={column} value={value} {...column.componentProps} />}
    </Grid>
  );
};

Cell.propTypes = {
  idField: PropTypes.string,
  column: PropTypes.object,
  value: PropTypes.any,
  onClick: PropTypes.func,
};

export default Cell;
