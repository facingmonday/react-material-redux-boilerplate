import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import People from '@material-ui/icons/People';
import Home from '@material-ui/icons/Home';
import Settings from '@material-ui/icons/Settings';
import { CalendarToday as Calendar, Web, Graph } from '@material-ui/icons';
import Logo from '../../../assets/images/logo.png';

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
});

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    menuOpen: false,
    anchorEl: null,
  };
  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }
  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <Drawer
          open={this.state.menuOpen}
          className={classes.drawer}
          onClose={() => this.toggleMenu(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <img className={classes.logo} src={Logo} alt={'Admin Logo'} />
          </div>
          <Divider />
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleMenu(false)}
            onKeyDown={() => this.toggleMenu(false)}
          >
            <List>
              <Link to={'/'}>
                <ListItem button key={'Dashboard'} className={classes}>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary={'Dashboard'} />
                </ListItem>
              </Link>
              <Link to={'/sites'}>
                <ListItem button key={'sites'}>
                  <ListItemIcon>
                    <Web />
                  </ListItemIcon>
                  <ListItemText primary={'Sites'} />
                </ListItem>
              </Link>
              <Link to={'/clients'}>
                <ListItem button key={'Clients'}>
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItemText primary={'Clients'} />
                </ListItem>
              </Link>
              <Link to={'/users'}>
                <ListItem button key={'Users'}>
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItemText primary={'Users'} />
                </ListItem>
              </Link>
              <Link to={'/events'}>
                <ListItem button key={'Events'}>
                  <ListItemIcon>
                    <Calendar />
                  </ListItemIcon>
                  <ListItemText primary={'Events'} />
                </ListItem>
              </Link>
              <Link to={'/stats'}>
                <ListItem button key={'stats'}>
                  <ListItemIcon>
                    <Calendar />
                  </ListItemIcon>
                  <ListItemText primary={'Stats'} />
                </ListItem>
              </Link>
              <Link to={'/settings'}>
                <ListItem button key={'Settings'}>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary={'Settings'} />
                </ListItem>
              </Link>
            </List>
            <Divider />
          </div>
        </Drawer>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} aria-label="Menu">
              <MenuIcon onClick={() => this.toggleMenu()} />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}></Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
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
                  <MenuItem onClick={this.handleClose} component={Link} to={'/profile'}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose} component={Link} to={'/account'}>Account</MenuItem>
                  <MenuItem onClick={this.handleClose} component={Link} to={'/help'}>Help</MenuItem>
                  <Divider />
                  <MenuItem onClick={this.handleClose} onClick={() => this.props.logout()} to={'/logout'}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
