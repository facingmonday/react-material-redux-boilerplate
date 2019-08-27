import RowActions from './RowActions';

export default {
  component: RowActions,
  name: 'RowActions',
  mui: true,
  props: {
    id: 123234,
    showEdit: false,
    showDelete: true,
    onEdit: val => console.log('onEdit', val), // eslint-disable-line
    onDelete: val => console.log('onDelete', val), // eslint-disable-line
  },
};
