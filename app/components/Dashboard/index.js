import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Chart } from 'primereact/chart';
import Home from '@material-ui/icons/Home';

class Dashboard extends Component {
  static propTypes = {
    fetchDashboard: PropTypes.object,
    dashboard: PropTypes.object,
  }
  componentWillMount() {
    this.props.fetchDashboard();
  }
  renderDashboard = (news, key) => {
    const { headline, story } = news;
    return (
      <div key={key}>
        {headline} - {story}
      </div>
    );
  }
  render() {
    const { loading, error } = this.props.dashboard;
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: '#42A5F5',
          borderColor: '#42A5F5',
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: '#66BB6A',
          borderColor: '#66BB6A',
        },
      ],
    };


    if (loading) {
      return (<CircularProgress />);
    }
    if (error) {
      return (
        <p>{error}</p>
      );
    }
    return (
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <List>
            <ListItem button key={'Dashboard'}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={10}>
          <Chart type="line" data={data} />
        </Grid>
      </Grid>
    );
  }
}
export default Dashboard;
