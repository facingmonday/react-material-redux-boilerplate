import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  drawerPaper: {
    width: 240,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    width: '100%',
  },
  appBar: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
  },
});

class Header extends React.Component {
  state = {
    auth: true,
    menuOpen: false,
    anchorEl: null,
  };

  toggleMenu = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    this.props.logout();
  };

  render() {
    const { classes, auth } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
          <Toolbar>
            <IconButton onClick={() => this.props.setOpen(true)} className={classes.menuButton} aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow} />
            {auth && (
              <div>
                <Button
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                  {auth.user && auth.user.name && <Typography>{auth.user.name}</Typography>}
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose} component={Link} to="/account">
                    Account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={this.handleClose} to="/logout">
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.defaultProps = {
  setOpen: () => null,
  auth: {},
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func,
  setOpen: PropTypes.func,
};

export default withStyles(styles)(Header);
