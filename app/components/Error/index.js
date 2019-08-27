import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';
import ErrorToaster from './ErrorToaster';

const Error = ({ type, ...rest }) => {
  switch (type) {
    case 'toaster':
      return <ErrorToaster {...rest} />;
    default:
      return <ErrorMessage {...rest} />;
  }
};
Error.propTypes = {
  type: PropTypes.string,
};
export default Error;
