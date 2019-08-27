import FilterRow from './FilterRow';
import { columnConfig } from '../DataGrid.fixture';

export default [
  {
    component: FilterRow,
    name: 'FilterRow',
    mui: true,
    props: {
      columns: columnConfig,
      showEdit: true,
      filters: [
        {
          field: 'name',
          value: 'jay',
        },
      ],
    },
  },
];
