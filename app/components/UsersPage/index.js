import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  withStyles,
} from '@material-ui/core';

import DataGrid from '../core/DataGrid';

const styles = () => ({
  container: {
    padding: '0px 40px',
  }
});

class UsersPage extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <DataGrid
            idField={'_id'}
            data={this.props.users}
            showEdit
            showDelete
            columns={[
              {
                label: 'ID',
                field: '_id',
                props: {
                  xs: 2,
                },
              },
              {
                label: 'Email',
                field: 'email',
                props: {
                  xs: 4,
                },
              },
              {
                label: 'Role',
                field: 'role',
                props: {
                  xs: 4,
                },
              },
            ]}
          />
        </Grid>
      </Grid>
    );
  }
}
UsersPage.defaultProps = {

};
UsersPage.propTypes = {
  classes: PropTypes.object,
  users: PropTypes.array,
};

export default withStyles(styles)(UsersPage);