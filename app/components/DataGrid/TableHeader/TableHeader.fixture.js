import TableHeader from '../TableHeaderColumn/TableHeaderColumn';
import { columnConfig } from '../DataGrid.fixture';

export default [
  {
    component: TableHeader,
    name: 'TableHeader',
    mui: true,
    props: {
      column: columnConfig[0],
      onSort: (val) => console.log('onSort', val), // eslint-disable-line
      sort: {
        field: 'email',
        direction: 'DESC',
      },
    },
  },
];
