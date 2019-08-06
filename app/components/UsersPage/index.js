import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, withStyles } from '@material-ui/core';

import DataGrid from '../DataGrid';

const styles = () => ({
  container: {
    padding: '20px 40px',
  },
});

class UsersPage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const {
      classes,
      users: { users, loading, error },
    } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <DataGrid
            idField="id"
            data={users}
            showEdit
            showDelete
            enableCreate
            onEdit={id => this.props.history.push(`/users/${id}`)}
            header={
              <Grid container>
                <Grid item xs={12} sm={9}>
                  <Button variant="contained" color="default" onClick={() => this.props.history.push('/users/create')}>
                    {'Add'}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={3} />
              </Grid>
            }
            columns={[
              {
                label: 'ID',
                field: 'id',
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
UsersPage.defaultProps = {};
UsersPage.propTypes = {
  classes: PropTypes.object,
  users: PropTypes.array,
};

export default withStyles(styles)(UsersPage);
