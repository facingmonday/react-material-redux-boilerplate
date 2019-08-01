import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  withStyles,
} from '@material-ui/core';
import SideBar from './SideBar';
import EventStats from './EventStats';
import PageStats from './PageStats';

const styles = (theme) => ({
  formControl: {
    flex: 1,
  },
});

class StatsPage extends Component {
  static propTypes = {
    classes: PropTypes.object,
    siteList: PropTypes.object,
    stats: PropTypes.object,
  }
  static defaultProps = {
    loading: false,
    error: null,
  }
  state = {
    site: null,
  }
  componentDidMount() {
    this.props.fetchSites();
  }
  handleSiteChange = (e) => {
    const site = e.target.value;
    this.setState({
      site,
    });
    this.props.fetchStats(site);
  }
  render() {
    const { classes, siteList: { sites, loading, error}, stats } = this.props;
    return (
      <Grid container>
        <Grid item xs={2}>
          <SideBar
            site={this.state.site}
            sites={sites}
            stats={stats}
            onChangeSite={(e) => this.handleSiteChange(e)}
          />
        </Grid>
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={12}>
              {sites && sites.filter((s) => s._id === this.state.site).map((site) => (
                <React.Fragment>
                  <h4>{site.name}</h4>
                  <p>{site.domain}</p>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <PageStats stats={stats.pageStats} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <EventStats stats={stats.byEvent} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(StatsPage);
