import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';

const Rows = ({ data }) => {
  if (data && data.length) {
    return data.map((row, i) => <Row index={i} rowData={row} />);
  }
  return null;
};

Rows.defaultProps = {
  data: [],
};
Rows.propTypes = {
  data: PropTypes.array,
};

export default Rows;
