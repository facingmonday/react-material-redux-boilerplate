import React, { Component } from 'react';
import classNames from 'classnames';
import {
  Grid,
  Typography,
} from '@material-ui/core';

class Cell extends Component {
  renderFieldByColumnType = (columnData, value) => {
    console.log('value', value);
    const { classes } = this.props;
    let CellComponent;
    if (columnData && columnData.component) {
      CellComponent = columnData.component;
    } else if (columnData.type && ComponentMap[columnData.type]) {
      CellComponent = ComponentMap[columnData.type];
    } else if (columnData.render) {
      return (columnData.render(value));
    } else {
      return (<Typography>{value}</Typography>);
    }
    return (<CellComponent {...columnData.componentProps} value={value} />);
  };
  render() {
    console.log('1111111this.props', this.props)
    const { classes, column, value } = this.props;
    const { className, ...columnDataProps } = column.props; // pull className out of columnData.props to not override our own className prop
    return (
      <Grid
        item
        {...columnDataProps} // All columnData.props minus columnData.props.className
        {...(this.props.onClickRow) ? { onClick: () => this.props.onClickRow(rowData[this.props.idField]) } : {}}
        alignItems="center"
        key={`dg_cell_${column.label}`}
      >
        { this.renderFieldByColumnType(column, value) }
      </Grid>
    );
  }
}

export default Cell;