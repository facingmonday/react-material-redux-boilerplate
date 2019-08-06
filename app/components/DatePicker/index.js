import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import PropTypes from 'prop-types';
import {
  Paper,
  Popper,
  InputAdornment,
  Input,
  FormHelperText,
  FormControl,
  IconButton,
  InputLabel,
  ClickAwayListener,
} from '@material-ui/core';
import { format } from 'date-fns';
import { IoMdCalendar as CalendarIcon } from 'react-icons/io';
import 'react-day-picker/lib/style.css';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      format: props.format || 'MM/DD/YYYY',
      value: props.value,
    };
    this.firstRef = React.createRef();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }
  handleBlur = () => {
    this.setState({ showCalendar: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }
  handleDayClick = (value) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    this.toggleCalendar();
    this.firstRef.current.focus();
  }
  formatDate = (d) => {
    if (d === undefined || d == null) {
      return '';
    }
    if (typeof d.getMonth !== 'function') {
      return d;
    }
    return format(d, this.state.format);
  };
  toggleCalendar = (e) => {
    this.setState({ el: (e) ? e.currentTarget : this.state.el, showCalendar: !this.state.showCalendar });
  }
  renderInputLabel = () => <InputLabel shrink htmlFor={'requestedShipDate'}>{this.props.label}</InputLabel>
  renderInput = () => (
    <Input
      value={this.formatDate(this.state.value)}
      fullWidth
      onBlur={this.handleBlur}
      inputRef={this.firstRef}
      name={'requestedShipDate'}
      id={'requestedShipDate'}
      endAdornment={this.renderIcon()}
      disabled={this.props.disabled}
    />
  );
  renderHelperText = () => (
    <FormHelperText
      error={(this.props.FormHelperTextProps && this.props.FormHelperTextProps.error)}
    >
      { this.props.helperText }
    </FormHelperText>
  )
  renderIcon = () => (
    <InputAdornment position={'end'}>
      <IconButton onClick={this.toggleCalendar} aria-label={'Calendar'} disabled={this.props.disabled || false}>
        <CalendarIcon />
      </IconButton>
    </InputAdornment>
  );
  renderCalendar = () => (
    <Popper
      open={Boolean(this.state.showCalendar)}
      anchorEl={this.state.el}
      placement={'bottom-end'}
    >
      <Paper>
        <ClickAwayListener onClickAway={this.handleBlur}>
          <DayPicker
            onDayClick={this.handleDayClick}
          />
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
  render() {
    return (
      <FormControl fullWidth={this.props.fullWidth}>
        {this.renderInputLabel()}
        {this.renderInput()}
        {this.renderHelperText()}
        {(this.state.showCalendar) ? this.renderCalendar() : null}
      </FormControl>
    );
  }
}

DatePicker.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  FormHelperTextProps: PropTypes.object,
  onBlur: PropTypes.func,
  format: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default DatePicker;
