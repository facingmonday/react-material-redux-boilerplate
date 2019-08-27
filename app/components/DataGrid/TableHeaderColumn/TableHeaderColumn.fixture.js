import TableHeaderColumn from './TableHeaderColumn';
import { columnConfig, rowData } from '../DataGrid.fixture';

export default [
  {
    component: TableHeaderColumn,
    name: 'TableHeaderColumn',
    mui: true,
    props: {
      onSort: () => null,
      sort: {
        field: 'notHeaderColumn',
        direction: 'ASC',
      },
      column: {
        props: {},
        label: 'HeaderColumn',
        field: 'headerColumn',
      },
    },
  },
];
