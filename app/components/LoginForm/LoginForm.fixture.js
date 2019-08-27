import LoginForm from './LoginForm';

export default [
  {
    component: LoginForm,
    name: 'LoginForm',
    mui: true,
    url: '/',
    props: {
      classes: {},
      auth: {
        user: {},
      },
    },
  },
];
