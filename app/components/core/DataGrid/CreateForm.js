import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogContent,
  Grid,
  Button,
  FormControl,
  TextField,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      model: props.model || props.columns.reduce((obj, column) => ({ ...obj, [column.field]: '' }), {}),
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
    if (nextProps.model !== this.state.model) {
      this.setState({ model: nextProps.model });
    }
  }
  handleChange(value, field) {
    this.setState({
      model: { ...this.state.model, [field]: value },
    });
  }
  handleClose = () => {
    this.props.onClose();
  }
  handleSubmitClick = () => {
    this.setState({
      open: false,
    });
    this.props.onSubmit(this.state.model);
  }
  renderField = (column) => {
    if (column.editComponent === 'select' && column.editComponentProps && column.editComponentProps.options && column.editComponentProps.options.length) {
      return (
        <Grid item xs>
          <FormControl fullWidth>
            <InputLabel shrink={(this.state.model) ? this.state.model[column.field] : null}>{column.label}</InputLabel>
            <Select
              label={column.label}
              value={(this.state.model) ? this.state.model[column.field] : null}
              onChange={(e) => this.handleChange(e.target.value, column.field)}
            >
              {column.editComponentProps.options.map((option) => <MenuItem value={option.value}>{option.label}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
      );
    }
    return (
      <Grid item xs>
        <FormControl fullWidth>
          <TextField
            label={column.label}
            value={(this.state.model) ? this.state.model[column.field] : null}
            onChange={(e) => this.handleChange(e.target.value, column.field)}
          />
        </FormControl>
      </Grid>
    );
  }
  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <Grid container>
            <Grid item container spacing={8} xs={12}>
              {
                (this.props.columns && this.props.columns.length)
                ? this.props.columns.map((column) => this.renderField(column))
                : null
              }
            </Grid>
            <Grid item container justify="flex-end" xs={12}>
              <Button disabled={(!this.state.model)} variant="contained" color="primary" onClick={this.handleSubmitClick}>Submit</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}

CreateForm.propTypes = {
  open: PropTypes.bool,
  model: PropTypes.object,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  columns: PropTypes.array,
};

export default CreateForm;
