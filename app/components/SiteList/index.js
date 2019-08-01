import React, { Component } from 'react';
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

class SiteList extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchSites();
  }
  render() {
    const { classes, createSite, updateSite, deleteSite } = this.props;
    const { sites, loading, error} = this.props.siteList;
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12} >
          <DataGrid
            idField={'_id'}
            data={sites}
            enableCreate
            onCreate={createSite}
            onUpdate={updateSite}
            onDelete={deleteSite}
            columns={[
              {
                field: 'name',
                label: 'Name',
                props: {
                  xs: 4,
                },
              },
              {
                field: 'url',
                label: 'Site Url',
                props: {
                  xs: 4,
                },
              },
              {
                field: 'key',
                label: 'Authorization Key',
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
            <Button variant={'contained'} color={'default'} onClick={this.props.fetchSites}>Refresh</Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
SiteList.defaultProps = {

};
SiteList.propTypes = {
  classes: PropTypes.object,
  fetchSites: PropTypes.func,
};

export default withStyles(styles)(SiteList);
