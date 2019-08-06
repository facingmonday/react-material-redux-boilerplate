import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

class Cell extends Component {
  renderFieldByColumnType = (columnData, value) => {
    let CellComponent;
    if (columnData && columnData.component) {
      CellComponent = columnData.component;
    } else if (columnData.type && ComponentMap[columnData.type]) {
      CellComponent = ComponentMap[columnData.type];
    } else if (columnData.render) {
      return columnData.render(value);
    } else {
      return <Typography>{value}</Typography>;
    }
    return <CellComponent {...columnData.componentProps} value={value} />;
  };

  render() {
    const { classes, column, value } = this.props;
    const { className, ...columnDataProps } = column.props; // pull className out of columnData.props to not override our own className prop
    return (
      <Grid
        className={classes}
        item
        {...columnDataProps} // All columnData.props minus columnData.props.className
        {...(this.props.onClickRow ? { onClick: () => this.props.onClickRow(rowData[this.props.idField]) } : {})}
        alignItems="center"
        key={`dg_cell_${column.label}`}
      >
        {this.renderFieldByColumnType(column, value)}
      </Grid>
    );
  }
}

Cell.propTypes = {
  idField: PropTypes.string,
  classes: PropTypes.shape,
  column: PropTypes.shape,
  value: PropTypes.any,
  onClickRow: PropTypes.func,
};

export default Cell;
