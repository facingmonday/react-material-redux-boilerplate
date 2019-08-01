import React, { Component } from 'react';

class PageStats extends Component {
  render() {
    const { stats } = this.props;
    if (!stats || !stats.length) {
      return null;
    }
    return stats.map((stat) => (
      <React.Fragment>
        <p>Duration: {stat.avgDuration}</p>
        <p>Count: {stat.count}</p>
      </React.Fragment>
    ));
  }
}

export default PageStats;