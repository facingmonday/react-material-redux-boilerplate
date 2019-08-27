import PasswordReset from './PasswordReset';

export default [
  {
    component: PasswordReset,
    name: 'PasswordReset',
    mui: true,
    props: {
      classes: {},
      loading: false,
      error: 'Something went wrong',
      success: false,
    },
  },
];
