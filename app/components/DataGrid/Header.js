import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import classNames from 'classnames';
import styles from './styles';

const UnstyledSortIcon = ({ field, sort }) => {
  const iconStyles = {
    sortIcons: {
      display: 'flex',
      flexDirection: 'column',
    },
    doubleArrow: {
      marginTop: '-0.67em',
    },
  };

  if (sort && sort.attr === field) {
    if (sort.order === 'ASC') {
      return (
        <Grid item style={iconStyles.sortIcons}>
          <ArrowDropUp />
        </Grid>
      );
    } else if (sort.order === 'DESC') {
      return (
        <Grid item style={iconStyles.sortIcons}>
          <ArrowDropDown />
        </Grid>
      );
    }
  }
  return (
    <Grid item style={iconStyles.sortIcons}>
      <ArrowDropUp />
      <ArrowDropDown style={iconStyles.doubleArrow} />
    </Grid>
  );
};

UnstyledSortIcon.propTypes = {
  field: PropTypes.object,
  sort: PropTypes.string,
};

const SortIcon = withStyles(styles)(UnstyledSortIcon);

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  actionColumnClass = () => {
    if (this.props.actionColumns === 2) {
      return this.props.classes.actionColumnDouble;
    }
    return this.props.classes.actionColumnSingle;
  }
  renderTableHeadColumn(col) {
    const { classes } = this.props;
    const { className, ...colProps } = col.props; // pull className out of col.props to not override our own className prop
    return col.sort ? (
      <Grid
        container
        {...colProps} // All col.props minus col.props.className
        className={classNames(classes.headerCell, className)} // Append incoming className
        key={`odg_header_${(col.label.replace(' ', ''))}`}
        onClick={() => this.props.onSort(col.field)}
      >
        <Grid item>
          <Typography color="inherit" className={{ [classes.headerCellFilterable]: col.filter }}>
            { col.label }
          </Typography>
        </Grid>
        <SortIcon field={col.field} sort={this.props.sort} />
      </Grid>
    ) : (
      <Grid
        item
        {...col.props}
        className={classNames(classes.headerCell, className)} // Append incoming className
        key={`odg_header_${(col.label.replace(' ', ''))}`}
      >
        <Typography color="inherit">
          { col.label }
        </Typography>
      </Grid>
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.headerContainer}>
        <Grid container spacing={8}>
          { this.props.columns
              .filter((col) => (typeof col.showColumn === 'undefined' || col.showColumn))
              .map((col) => this.renderTableHeadColumn(col))
          }
          {
            (this.props.showActionColumn)
            ? <Grid item xs className={classNames(classes.headerContainer, classes.headerCell, this.actionColumnClass())}></Grid>
            : null
          }
        </Grid>
      </Grid>
    );
  }
}
Header.defaultProps = {
  columns: [],
  showActionColumn: true,
};
Header.propTypes = {
  columns: PropTypes.array,
  classes: PropTypes.object,
  showActionColumn: PropTypes.bool,
  actionColumns: PropTypes.number,
  onSort: PropTypes.func,
  sort: PropTypes.object,
};

export default withStyles(styles)(Header);
