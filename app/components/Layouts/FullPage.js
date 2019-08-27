import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../../assets/images/logo.png';
import Header from '../../containers/Header';
import Navigation from '../../containers/Navigation';

import styles from './FullPage.style';

const FullPage = ({ component: Component, classes, ...rest }) => {
  const [open, setOpen] = useState(true);
  return (
    <Route
      {...rest}
      render={matchProps => (
        <React.Fragment>
          <Header setOpen={setOpen} />
          <Grid container>
            <Grid item xs={12}>
              <Drawer
                variant="permanent"
                classes={{
                  paper: classnames({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                  }),
                }}
                open={open}
              >
                <div className={classes.drawerHeader}>
                  {!open ? (
                    <IconButton className={classes.menuButton} aria-label="Menu">
                      <MenuIcon onClick={() => setOpen(true)} />
                    </IconButton>
                  ) : (
                    <img onKeyPress={() => setOpen(false)} onClick={() => setOpen(false)} className={classes.logo} src={Logo} alt="Admin Logo" /> // eslint-disable-line
                  )}
                </div>
                <Divider />
                <Navigation />
              </Drawer>
              <div className={classnames(classes.content, open ? classes.contentOpen : classes.contentClosed)}>
                <Paper elevation={1} className={classes.fullPage}>
                  <Component {...matchProps} />
                </Paper>
              </div>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    />
  );
};
FullPage.propTypes = {
  classes: PropTypes.object,
  component: PropTypes.any,
};
export default withRouter(withStyles(styles)(FullPage));
