import React from 'react';
import PropTypes from 'prop-types';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import EditIcon from '@material-ui/icons/Edit';
import { Delete } from '@material-ui/icons';
import styles from './RowActions.styles';
const useStyles = makeStyles(styles);

const RowActions = ({ id, showEdit, showDelete, onEdit, onDelete }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.rowActions} item xs={2}>
      {showEdit && (
        <IconButton
          onClick={e => {
            e.stopPropagation();
            onEdit(id);
          }}
        >
          <EditIcon />
        </IconButton>
      )}
      {showDelete && (
        <IconButton
          onClick={e => {
            e.stopPropagation();
            onDelete(id);
          }}
        >
          <Delete />
        </IconButton>
      )}
    </Grid>
  );
};

RowActions.propTypes = {
  /* If updating a row, prepopulate form and specify id */
  id: PropTypes.string,
  /* Whether or not to show the edit button */
  showEdit: PropTypes.bool,
  /* Function to be called when clicking the edit button */
  onEdit: PropTypes.func,
  /* Whether or not to show the delete button */
  showDelete: PropTypes.bool,
  /* Function to be called when clicking the delete button */
  onDelete: PropTypes.func,
};

export default RowActions;
