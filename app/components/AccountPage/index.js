import React from 'react';
import PropTypes from 'prop-types';

const AccountPage = props => {
  const { user } = props;
  return <div>Account {`${user.name}`}</div>;
};

AccountPage.propTypes = {
  user: PropTypes.shape,
};

export default AccountPage;
