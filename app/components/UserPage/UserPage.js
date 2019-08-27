import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  TextField,
  Input,
  InputLabel,
  OutlinedInput,
  Select,
  CircularProgress,
  Button,
  FormControl,
  withStyles,
  Typography,
} from '@material-ui/core';
import Error from '../Error';
import styles from './UserPage.styles';

class UserPage extends PureComponent {
  componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      this.props.fetchUser(this.props.match.params.id);
    }
  }

  handleChange = (field, value) => {
    this.props.updateUser({ [field]: value });
  };

  handleDelete = () => {
    this.props.deleteUser(this.props.user.id);
  };

  handleSave = () => {
    this.props.saveUser(this.props.user.user);
  };

  render() {
    const {
      classes,
      user: { user, loading, error },
    } = this.props;
    if (loading) {
      return <CircularProgress />;
    }
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container direction="column" className={classes.container}>
          <Typography variant="h1">{user && user.id ? 'Update User' : 'Create User'}</Typography>
          {error ? <Error message={error.message} /> : null}
          <FormControl className={classes.formControl}>
            <InputLabel for="name" shrink>
              Name
            </InputLabel>
            <Input
              id="name"
              label="Name"
              inputProps={{ shrink: true }}
              className={classes.textField}
              value={user ? user.name : ''}
              onChange={e => this.handleChange('name', e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel for="email" shrink>
              Email
            </InputLabel>
            <Input
              id="email"
              label="Email"
              inputProps={{ shrink: true }}
              className={classes.textField}
              value={user ? user.email : ''}
              onChange={e => this.handleChange('email', e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel for="email" shrink>
              Role
            </InputLabel>
            <Select native value={user.role} onChange={e => this.handleChange('role', e.target.value)}>
              <option value="" />
              <option value="user">User</option>
              <option value="admin">Admin</option>
              {user.role === 'super' ? <option value="super">Super</option> : null}
            </Select>
          </FormControl>
          <FormControl className={classes.buttonContainer}>
            <Button
              fullWidth={false}
              onClick={this.handleSave}
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Save
            </Button>
          </FormControl>
        </Grid>
      </form>
    );
  }
}

UserPage.defaultProps = {
  classes: {},
  user: {
    user: {},
    loading: false,
    error: null,
  },
};

UserPage.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
  user: PropTypes.object,
  fetchUser: PropTypes.func,
  saveUser: PropTypes.func,
  updateUser: PropTypes.func,
  deleteUser: PropTypes.func,
};

export default withStyles(styles)(UserPage);
