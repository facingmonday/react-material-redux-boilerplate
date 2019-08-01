import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  withStyles,
} from '@material-ui/core';
import DataGrid from '../core/DataGrid';

const styles = (theme) => ({

});

class ClientList extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }
  
  render() {
    const { classes, clientList: { clients, loading, error } } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12} >
          <DataGrid
            idField={'_id'}
            data={clients}
            showEdit={false}
            showDelete={false}
            columns={[
              {
                field: 'fingerprint',
                label: 'Client',
                props: {
                  xs: 2,
                },
                render: (client) => <Link to={`/clients/${client}`}>{client}</Link>,
              },
              {
                field: 'lastUpdated',
                label: 'Last Updated',
                props: {
                  xs: 2,
                },
              },
              {
                field: 'browserData',
                label: 'Last Updated',
                props: {
                  xs: 8,
                },
                render: (value) => <span>{JSON.stringify(value)}</span>
              },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Button variant={'contained'} color={'default'} onClick={this.props.fetchClients}>Refresh</Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ClientList);
