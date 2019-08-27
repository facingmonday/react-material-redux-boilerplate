import UserPage from './index';

export default [
  {
    component: UserPage,
    name: 'UserPage - Loading',
    props: {
      classes: {},
      user: {
        user: {},
        loading: true,
        error: null,
      },
      fetchUser: () => null,
      createUser: () => null,
      updateUser: () => null,
      deleteUser: () => null,
    },
  },
  {
    component: UserPage,
    name: 'UserPage - Error',
    props: {
      classes: {},
      user: {
        user: {},
        loading: false,
        error: 'There was a problem loading the user',
      },
      fetchUser: () => null,
      createUser: () => null,
      updateUser: () => null,
      deleteUser: () => null,
    },
  },
  {
    component: UserPage,
    name: 'UserPage - With User',
    mui: true,
    props: {
      classes: {},
      user: {
        user: {
          id: '1239801238',
          role: 'admin',
          name: 'Test User',
          email: 'test@test.com',
        },
        loading: false,
        error: null,
      },
      fetchUser: () => null,
      createUser: () => null,
      updateUser: () => null,
      deleteUser: () => null,
    },
  },
  {
    component: UserPage,
    name: 'UserPage - No User for create',
    mui: true,
    props: {
      classes: {},
      user: {
        user: {},
        loading: false,
        error: null,
      },
      fetchUser: () => null,
      createUser: () => null,
      updateUser: () => null,
      deleteUser: () => null,
    },
  },
];
