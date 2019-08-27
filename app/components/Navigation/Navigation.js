import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import NavigationLink from './NavigationLink';

import styles from './Navigation.styles';

const useStyles = makeStyles(styles);

const Navigation = ({ navigation, nestedDepth = 0, key = 'root' }) => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List key={key} className={classnames([classes.navigationList, nestedDepth && classes.nested])}>
      {navigation.map(link =>
        link.navigation && link.navigation instanceof Array ? (
          <React.Fragment key={`link.name${link.name}`}>
            <NavigationLink link={link} open={open} onClick={handleClick} />
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Navigation key={link.name} navigation={link.navigation} nestedDepth={1} />
            </Collapse>
          </React.Fragment>
        ) : (
          <NavigationLink key={`navlink${link.name}`} link={link} />
        ),
      )}
    </List>
  );
};

Navigation.defaultProps = {
  navigation: [],
};

Navigation.propTypes = {
  navigation: PropTypes.array,
  nestedDepth: PropTypes.number,
  key: PropTypes.any,
};

export default Navigation;
