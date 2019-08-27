import DataGrid from '.';

export const columnConfig = [
  {
    label: 'ID',
    field: 'id',
    type: 'text',
    props: {
      xs: 2,
    },
    filterOptions: {
      type: 'text',
    },
  },
  {
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
  {
    label: 'Role',
    field: 'role',
    type: 'text',
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
];
export const rowData = [
  {
    id: '123',
    email: 'test@test.com',
    name: 'Test User',
    role: 'Admin',
  },
];
export default {
  component: DataGrid,
  name: 'DataGrid',
  mui: true,
  context: {
    offset: 0,
    limit: 100,
    sort: [
      {
        field: 'email',
        direction: 'ASC',
      },
    ],
    searchTerm: 'yahoo',
    filters: [
      {
        field: 'name',
        value: 'jay',
      },
    ],
    total: 29823,
    data: rowData,
    showEdit: true,
    showDelete: true,
    enableCreate: true,
    onAdd: () => null,
    onEdit: () => null,
    onSearch: () => null,
    onFilter: () => null,
    onChangePage: () => null,
    onChangeLimit: () => null,
    onSort: () => null,
    columns: columnConfig,
  },
  props: {
    offset: 0,
    limit: 100,
    sort: [
      {
        field: 'email',
        direction: 'ASC',
      },
    ],
    searchTerm: 'yahoo',
    filters: [
      {
        field: 'name',
        value: 'jay',
      },
    ],
    total: 29823,
    data: rowData,
    showEdit: true,
    showDelete: true,
    enableCreate: true,
    onAdd: () => null,
    onEdit: () => null,
    onSearch: () => null,
    onFilter: () => null,
    onChangePage: () => null,
    onChangeLimit: () => null,
    onSort: () => null,
    columns: columnConfig,
  },
};
