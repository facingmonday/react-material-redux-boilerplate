import FilterRowCell from './FilterRowCell';
import { columnConfig } from '../DataGrid.fixture';
export default [
  {
    component: FilterRowCell,
    name: 'FilterRowCell',
    mui: true,
    props: {
      column: columnConfig[0],
      showEdit: true,
      filters: {
        field: 'id',
        value: '1231312',
      },
    },
  },
];
