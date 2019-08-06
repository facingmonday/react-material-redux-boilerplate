import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, CircularProgress, Button, FormControl, withStyles } from '@material-ui/core';
import Error from '../Error';

const styles = () => ({
  container: {
    display: 'flex',
    flex: 1,
  },
});

class UserPage extends PureComponent {
  componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      this.props.fetchUser(this.props.match.params.id);
    }
  }

  handleChange = (field, value) => {
    console.log('handleChange', field, value);
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
    if (error) {
      return <Error message={error} />;
    }
    return (
      <Grid container className={classes.container}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={user ? user.name : ''}
            onChange={e => this.handleChange('name', e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <FormControl>
            <Button onClick={this.handleSave} color="secondary" variant="contained">
              Save
            </Button>
          </FormControl>
        </form>
      </Grid>
    );
  }
}

UserPage.defaultProps = {};

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
