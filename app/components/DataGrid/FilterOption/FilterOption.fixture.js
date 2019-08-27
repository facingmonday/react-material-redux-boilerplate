import FilterOption from './FilterOption';

export default [
  {
    component: FilterOption,
    name: 'FilterOption',
    mui: true,
    props: {
      onFilter: option => console.log('FilterOption', option), // eslint-disable-line
      filter: {
        field: 'role',
        value: 'admin',
      },
      column: {
        label: 'Role',
        field: 'role',
        props: {
          xs: 4,
        },
        filterOptions: {
          type: 'select',
          label: 'Role',
          options: [
            {
              label: 'User',
              value: 'user',
            },
            {
              label: 'Admin',
              value: 'admin',
            },
          ],
        },
      },
    },
  },
];
