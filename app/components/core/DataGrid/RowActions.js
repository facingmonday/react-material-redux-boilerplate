import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Delete } from '@material-ui/icons';

const RowActions = props => (
  <div>
    {
      props.showEdit &&
      <IconButton onClick={(e) => { e.stopPropagation(); props.onEdit(props.id); }}>
        <EditIcon />
      </IconButton>
    }
    {
      props.showDelete &&
      <IconButton onClick={(e) => { e.stopPropagation(); props.onDelete(props.id); }}>
        <Delete />
      </IconButton>
    }
  </div>
);

RowActions.propTypes = {
  id: PropTypes.string,
  /* If updating a row, prepopulate form and specify id */
  rowData: PropTypes.object,
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
