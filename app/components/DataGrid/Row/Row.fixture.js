import Row from './Row';
import { columnConfig, rowData } from '../DataGrid.fixture';

export default [
  {
    component: Row,
    name: 'Row',
    mui: true,
    props: {
      columns: columnConfig,
      showEdit: true,
      showDelete: true,
      idField: 'id',
      index: 0,
      rowData: rowData[0],
    },
  },
];
