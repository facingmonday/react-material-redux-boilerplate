/**
 * DataGrid
 * created by JMP
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import {
  TablePagination,
  TextField,
  Grid,
  Icon,
  Button,
  withStyles,
  CircularProgress,
  Select,
  Typography,
} from '@material-ui/core';
import DragIndicator from '@material-ui/icons/DragIndicator';
import SearchIcon from '@material-ui/icons/Search';
//  import DeleteIcon from '@material-ui/icons/Delete';
import classNames from 'classnames';
import Search from './Search';
import Header from './Header';
import RowActions from './RowActions';
import CreateForm from './CreateForm';
import styles from './styles';
import Row from './Row';

const ComponentMap = {
  Icon,
  SearchIcon,
  TextField,
  Select,
  DragIndicator,
  RowActions,
};

class DataGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      open: false,
    };
    this.columns = this.props.columns;
  }
  actionColumnClass = () => {
    if (this.actionColumns === 2) {
      return this.props.classes.actionColumnDouble;
    }
    return this.props.classes.actionColumnSingle;
  }
  countActionColumns = () => {
    let count = 0;
    count += this.props.showEdit ? 1 : 0;
    count += this.props.showDelete ? 1 : 0;
    return count;
  }
  handlerCreateOrUpdate = (data) => {
    if (data.notificationId) {
      this.props.onUpdate(data);
    }
    this.props.onCreate(data);
  }
  handleEdit = (data) => {
    this.setState({
      open: true,
      model: data,
    });
  };
  handleDelete = (data) => {
    this.props.onDelete(data);
  };
  createLeftButtons = () => {
    if (this.props.enableCreate) {
      return <Button variant={'contained'} color="default" style={styles.newOrderButton} onClick={() => this.setState({ open: true })}>{this.props.createLabel || 'Add'}</Button>;
    }
    if (this.props.actions && this.props.actions.length) {
      return this.props.actions.map(this.renderAction);
    }
    if (this.props.leftButtonLabel) {
      return <Button onClick={this.props.leftButtonOnClick} {...this.props.leftButtonProps} >{this.props.leftButtonLabel}</Button>;
    }
    return null;
  };
  renderAction = (action) => (
    <Button key={`odg_action_${action.label.replace(' ', '')}`} >
      {action.label}
    </Button>
  );
  renderNoData() {
    return (
      <Grid container>
        <Grid item xs={12} style={{ textAlign: 'center' }} colSpan={Object.keys(this.props.columns).length}>No Data</Grid>
      </Grid>
    );
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          {
            (this.props.createForm)
            ? React.createElement(this.props.createForm, {
              open: this.state.open,
              onClose: () => this.setState({ open: false }),
              onSubmit: (data) => this.props.onCreate(data),
            })
            : <CreateForm
              open={this.state.open}
              columns={this.props.columns}
              model={this.state.model}
              onClose={() => { this.setState({ open: false, model: null }); }}
              onSubmit={(data) => {
                this.setState({ open: false });
                if (data.notificationId) {
                  return this.props.onUpdate(data);
                }
                return this.props.onCreate(data);
                
              }}
            />
          }
        </Grid>
        <Grid item xs={12} sm={9}>
          {this.createLeftButtons()}
        </Grid>
        <Grid item xs={12} sm={3}>
          {
            (this.props.showSearch)
            ? <Search
              placeholder={this.props.searchInputLabel}
              inputProps={{
                fullWidth: true,
              }}
              onChange={(term) => this.props.onChangeSearch(term)}
            />
            : null
          }
        </Grid>
        <Grid container className={this.props.classes.tableWrapper}>
          <Grid container className={this.props.tableClassName}>
            {
              (this.props.columns)
              ? <Header columns={this.props.columns} sort={this.props.sort} onSort={this.props.onSort} actionColumns={this.countActionColumns()} showActionColumn={(this.props.showEdit || this.props.showDelete)} />
              : null
            }
            <Grid container className={this.props.classes.tableRowsWrapper}>
              {
                (() => {
                  if (this.props.loading) {
                    return <div style={{ textAlign: 'center' }}><CircularProgress /></div>;
                  } else if (this.props.data && this.props.data.length) {
                    return this.props.data.map((row, i) => {
                      return (
                        <Row
                          index={i}
                          {...this.props}
                          rowData={row}
                          onEdit={this.handleEdit}
                          onDelete={this.handleDelete}
                        />
                      );
                    });
                  }
                  return this.renderNoData();
                })()
              }
            </Grid>
          </Grid>
        </Grid>
        {
          (this.props.data && this.props.data.length && this.props.showPagination)
          ? <Grid container justify="flex-end">
            <TablePagination
              page={(this.props.offset) ? this.props.offset / this.props.limit : 0}
              rowsPerPage={this.props.limit}
              rowsPerPageOptions={this.props.rowsPerPageOptions}
              component="div"
              count={this.props.count}
              onChangeRowsPerPage={(evt) => this.props.onChangeLimit(evt.target.value)}
              onChangePage={(evt, page) => this.props.onChangeOffset(page * this.props.limit)}
              classes={{
                root: this.props.classes.pagination,
                toolbar: this.props.classes.paginationToolbar,
              }}
            />
          </Grid>
          : null
        }
      </Grid>
    );
  }
}
DataGrid.defaultProps = {
  rowProps: {},
  showSearch: true,
  actions: [],
  showEdit: true,
  showDelete: true,
  count: 0,
  limit: 10,
  offset: 0,
  showPagination: true,
  rowsPerPageOptions: [5, 10, 25, 50, 100, 250, 500],
};
DataGrid.propTypes = {
  /* Internal object of styles passed to props withStyles*/
  classes: PropTypes.object,
  
  /* The field in the row that will be used as the id */
  idField: PropTypes.string,
  
  /* An array of actions (buttons in the upper left) */
  actions: PropTypes.array,
  
  /* The data set to be displayed */
  data: PropTypes.array,
  
  /* The column definition for the data grid */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      field: PropTypes.string,
      props: PropTypes.object,
      filter: PropTypes.bool,
      sort: PropTypes.bool,
      editComponent: PropTypes.string,
      editComponentProps: PropTypes.objectOf({
        options: PropTypes.array,
      }),
      render: PropTypes.func,
    }),
  ),
  
  /* The total number of records available */
  count: PropTypes.number,
  
  /* The page to start on */
  offset: PropTypes.number,
  
  /* The number of records to show in the data grid */
  limit: PropTypes.number,
  
  /* The display properties that are passed to the row */
  rowProps: PropTypes.object,
  
  /* Function to be called when you change the page */
  onChangeOffset: PropTypes.func,
  
  /* Function to be called when you change the page */
  onChangeLimit: PropTypes.func,
  
  /* Boolean on whether to show the search field or not */
  showSearch: PropTypes.bool,
  
  /* Whether or not to show the create button */
  enableCreate: PropTypes.bool,
  
  /* Text to display on the create button */
  createLabel: PropTypes.string,
  
  /* The placeholder text for the search input */
  searchInputLabel: PropTypes.string,
  
  /* Function to be called when you change the page */
  onChangeSearch: PropTypes.func,
  
  /* Whether to show the edit pencil(edit) in the row */
  showEdit: PropTypes.bool,
  
  /* Whether to show the delete icon in the row */
  showDelete: PropTypes.bool,
  
  /* Function to be called when you click the row */
  onClickRow: PropTypes.func,
  
  /* Function to be called when you create a new row */
  onCreate: PropTypes.func,
  
  /* Function to be called when you update a row */
  onUpdate: PropTypes.func,
  
  /* Function to be called when you delete the page */
  onDelete: PropTypes.func,
  
  /* Function to be called when you click on a column header */
  onSort: PropTypes.func,
  loading: PropTypes.bool,
  createForm: PropTypes.object,
  showPagination: PropTypes.bool,
  sort: PropTypes.object,
  leftButtonOnClick: PropTypes.func,
  leftButtonLabel: PropTypes.string,
  leftButtonProps: PropTypes.object,
  
  /* Passing an optional class name from the parent component to the data grid wrapping element */
  tableClassName: PropTypes.string,
  
  /* Array of options of how many rows to display in pagination */
  rowsPerPageOptions: PropTypes.array,
};
export default withStyles(styles)(DataGrid);
