import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, withStyles } from '@material-ui/core';
import styles from './UsersPage.styles';
import DataGrid from '../DataGrid';

class UsersPage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { classes, users } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <DataGrid
            {...users}
            data={users.results}
            showEdit
            showDelete
            enableCreate
            onAdd={() => this.props.history.push('/users/create')}
            onEdit={id => this.props.history.push(`/users/${id}`)}
            onSearch={searchTerm => this.props.fetchUsers({ searchTerm })}
            onFilter={filters => this.props.fetchUsers({ filters })}
            onChangePage={val => this.props.fetchUsers(val)}
            onChangeLimit={val => this.props.fetchUsers(val)}
            onSort={val => this.props.fetchUsers({ sort: [val] })}
            columns={[
              {
                label: 'ID',
                field: 'id',
                props: {
                  xs: 2,
                },
                filterOptions: {
                  type: 'text',
                },
              },
              {
                label: 'Email',
                field: 'email',
                props: {
                  xs: 4,
                },
                filterOptions: {
                  type: 'boolean',
                },
              },
              {
                label: 'Role',
                field: 'role',
                props: {
                  xs: 4,
                },
                filterOptions: {
                  type: 'select',
                  label: 'Role',
                  options: [
                    {
                      label: 'User',
                      value: 'user',
                    },
                    {
                      label: 'Admin',
                      value: 'admin',
                    },
                  ],
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
  fetchUsers: PropTypes.func,
  history: PropTypes.object,
};

export default withStyles(styles)(UsersPage);
