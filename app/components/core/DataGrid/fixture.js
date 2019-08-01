import DataGrid from './index';

const itemData = [
  {
    line: 1,
    quantity: 200,
    lookup: null,
    item: 'ITEM1234ABC',
    jobQuote: 'JQ1234',
    price: 14.87654,
    extPrice: 12.98,
  },
  {
    line: 1,
    quantity: 200,
    lookup: null,
    item: 'ITEM1234ABC',
    jobQuote: 'JQ1234',
    price: 14.87654,
    extPrice: 12.98,
  },
];
export default [
  {
    component: DataGrid,
    name: 'DataGrid',
    mui: true,
    props: {
      idField: 'id',
      draggable: true,
      data: itemData,
      columns: [
        {
          label: 'ID',
          field: 'id',
          props: {
            xs: 12,
            sm: 4,
          },
          editComponent: 'select',
          editComponentProps: {
            options: [
              {
                label: 'Option1',
                value: 'Option1',
              },
              {
                label: 'Option2',
                value: 'Option2',
              },
              {
                label: 'Option3',
                value: 'Option3',
              },
            ],
          },
          show: true,
          filter: true,
          sort: true,
        },
        {
          label: 'Quantity',
          field: 'quantity',
          editComponent: 'TextField',
          props: {
            xs: 12,
            sm: 4,
          },
          show: true,
          filter: true,
          sort: true,
        },
        {
          label: 'Item',
          field: 'item',
          props: {
            xs: 12,
            sm: 4,
          },
          show: true,
          filter: true,
          sort: true,
        },
      ],
      count: 100,
      offset: 0,
      limit: 10,
      rowProps: {},
      onChangeOffset: (value) => { console.log('onChangeOffset', value); }, // eslint-disable-line no-console
      onChangeLimit: (value) => { console.log('onChangeLimit', value); }, // eslint-disable-line no-console
      showSearch: true,
      enableCreate: true,
      searchInputLabel: 'Search Fixture',
      onChangeSearch: (value) => { console.log('onChangeSearch', value); }, // eslint-disable-line no-console
      showEdit: true,
      showDelete: true,
      onClickRow: (value) => { console.log('onClickRow', value); }, // eslint-disable-line no-console
      onCreate: (value) => { console.log('onClickEdit', value); }, // eslint-disable-line no-console
      onUpdate: (value) => { console.log('onUpdate', value); }, // eslint-disable-line no-console
      onDelete: (value) => { console.log('onClickDelete', value); }, // eslint-disable-line no-console
    },
  },
];
