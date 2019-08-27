import DatePicker from './index';

export default {
  component: DatePicker,
  name: 'DatePicker',
  mui: true,
  props: {
    showSearch: true,
    showToolbar: true,
    title: 'Test Section New',
    onChange: e => {
      console.log('DatePicker onChange', e); // eslint-disable-line no-console
    },
    onBlur: e => {
      console.log('DatePicker onBlur ', e); // eslint-disable-line no-console
    },
  },
};
