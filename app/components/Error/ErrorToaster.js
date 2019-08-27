import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

const ErrorToaster = ({ message, onClose, autoHideDuration }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    onClose(event, reason);

    setOpen(false);
  };

  const Action = [
    <Button key="undo" color="secondary" size="small" onClick={handleClose}>
      UNDO
    </Button>,
    <IconButton key="close" aria-label="close" color="inherit" className={classes.close} onClick={handleClose}>
      <CloseIcon />
    </IconButton>,
  ];

  return (
    <React.Fragment>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={autoHideDuration}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={message}
        action={Action}
      />
    </React.Fragment>
  );
};
ErrorToaster.defaultProps = {
  autoHideDuration: 6000,
};
ErrorToaster.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
  autoHideDuration: PropTypes.number,
};

export default ErrorToaster;
