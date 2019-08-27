const styles = theme => ({
  // root: {
  //   flexGrow: 1,
  // },
  // drawer: {
  //   width: 240,
  //   flexShrink: 0,
  // },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
  },
  root: {
    display: 'flex',
    backgroundColor: '#eee',
  },
  drawer: {
    width: 210,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: 210,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9) + 1,
    // },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.lightBackgroundColor,
  },
  contentOpen: {
    paddingLeft: 230,
  },
  contentClosed: {
    paddingLeft: 70,
  },
  fullPage: {
    marginTop: 64,
    padding: theme.spacing(2),
  },
});

export default styles;
