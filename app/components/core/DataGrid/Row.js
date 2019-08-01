import React from 'react';
import classNames from 'classnames';

import {
  Grid,
} from '@material-ui/core';
import RowActions from './RowActions';
import Cell from './Cell';

export default (props) => {
  const { classes, index, columns, showEdit, showDelete, rowProps, rowData, onDelete, onEdit } = props;
  return (
    <Grid
      key={index}
      container
      className={classNames(
        classes.row,
        classes[(index % 2) ? 'evenRow' : 'oddRow'],
      )}
      {...rowProps}
    >
      <Grid container spacing={8}>
        { columns.map(column => <Cell column={column} value={rowData[column.field]} />) }
        {
          (showEdit || showDelete)
          ? <RowActions
            id={rowData[props.idField]}
            rowData={rowData}
            showEdit={props.showEdit}
            showDelete={props.showDelete}
            onEdit={onEdit}
            onDelete={onDelete}
          />
          : null
        }
      </Grid>
    </Grid>
  );
};
