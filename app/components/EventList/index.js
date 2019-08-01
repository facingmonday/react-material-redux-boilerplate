import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  withStyles,
} from '@material-ui/core';
import DataGrid from '../core/DataGrid';

const styles = () => ({
  container: {
    padding: '10px 40px',
  },
});

class EventList extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    const { classes } = this.props;
    const { events, loading, error} = this.props.eventList;
    if (loading) {
      return (<div>Loading</div>);
    }
    if (error) {
      return (<div>Error</div>);
    }
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12} >
          <DataGrid
            idField={'_id'}
            data={events}
            showEdit={false}
            showDelete={false}
            columns={[
              {
                field: 'fingerprint',
                label: 'client',
                props: {
                  xs: 2,
                },
                render: (client) => <Link to={`/clients/${client}`}>{client}</Link>,
              },
              {
                field: 'tag',
                label: 'Tag',
                props: {
                  xs: 1,
                },
              },
              {
                field: 'event',
                label: 'Event',
                props: {
                  xs: 3,
                },
              },
              {
                field: 'dateTime',
                label: 'Date/Time',
                props: {
                  xs: 3,
                },
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
            <Button variant={'contained'} color={'default'} onClick={this.props.fetchEvents}>Refresh</Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
EventList.defaultProps = {

};
EventList.propTypes = {
  classes: PropTypes.object,
  fetchEvents: PropTypes.func,
  events: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default withStyles(styles)(EventList);
