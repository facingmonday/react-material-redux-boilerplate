import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classnames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Icon from '../Icon';

import styles from './Navigation.styles';

const useStyles = makeStyles(styles);

const NavigationLink = ({ className, link, open, onClick }) => {
  const classes = useStyles();
  const listItem = (
    <ListItem
      key={`listItem_${link.name}`}
      button
      className={classnames([classes.listItem, className])}
      onClick={onClick}
    >
      <ListItemIcon className={classes.listItemIcon}>
        <Icon className={classes.icon} name={link.icon} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography variant="body1" className={classes.listItemText}>
            {link.label}
          </Typography>
        }
      />
      {(() => {
        if (link.navigation && link.navigation.length) {
          return open ? <ExpandLess /> : <ExpandMore />;
        }
        return null;
      })()}
    </ListItem>
  );
  return link.href ? (
    <Link key={`link_${link.name}`} className={classes.link} to={link.href}>
      {listItem}
    </Link>
  ) : (
    <React.Fragment key={`link_${link.name}`}>{listItem}</React.Fragment>
  );
};

NavigationLink.propTypes = {
  link: PropTypes.object,
  className: PropTypes.any,
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

export default withStyles(styles)(NavigationLink);
