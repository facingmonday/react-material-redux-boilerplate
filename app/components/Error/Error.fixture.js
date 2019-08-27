import ErrorToaster from './ErrorToaster';
import ErrorMessage from './ErrorMessage';
import ErrorModal from './ErrorModal';

export default [
  {
    component: ErrorToaster,
    name: 'ErrorToaster',
    mui: true,
    props: {
      message: 'There was a problem',
      onClose: () => null,
    },
  },
  {
    component: ErrorModal,
    name: 'ErrorModal',
    mui: true,
    props: {
      message: 'There was a problem',
      onClose: () => null,
    },
  },
  {
    component: ErrorMessage,
    name: 'ErrorMessage',
    mui: true,
    props: {
      message: 'There was a problem',
    },
  },
];
