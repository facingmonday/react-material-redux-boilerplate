import AccountPage from './AccountPage';

export default [
  {
    component: AccountPage,
    name: 'AccountPage',
    mui: true,
    url: '/account',
    props: {
      user: {
        user: {
          name: 'Test User',
          email: 'test@test.com',
        },
        loading: false,
        error: false,
      },
    },
  },
];
