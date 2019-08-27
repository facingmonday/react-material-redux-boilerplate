import { Cell } from '.';

export default [
  {
    component: Cell,
    name: 'Cell - Text',
    mui: true,
    props: {
      value: 'test@test.com',
      idField: 'id',
      onClick: val => console.log('onClick', val),
      column: {
        label: 'Email',
        field: 'email',
        type: 'text',
        props: {
          xs: 4,
        },
        filterOptions: {
          type: 'boolean',
          label: 'Enabled',
        },
      },
    },
  },
  {
    component: Cell,
    name: 'Cell - Checkbox',
    mui: true,
    props: {
      value: 'test@test.com',
      idField: 'id',
      onClick: val => console.log('onClick', val),
      column: {
        label: 'Email',
        field: 'email',
        type: 'boolean',
        props: {
          xs: 4,
        },
        filterOptions: {
          type: 'boolean',
          label: 'Enabled',
        },
      },
    },
  },
];
