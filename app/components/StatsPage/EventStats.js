import React, { Component } from 'react';

class EventStats extends Component {
  render() {
    const { stats } = this.props;
    if (!stats || !stats.length) {
      return null;
    }
    return (
      <React.Fragment>
        {stats.map(stat => (
          <p>{stat._id.page} - {stat._id.tag}({stat._id.event}) - {stat.count}</p>
        ))}
      </React.Fragment>
    );
  }
}

export default EventStats;
