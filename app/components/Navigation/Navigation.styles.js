const styles = theme => ({ // eslint-disable-line
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  navigationList: {
    backgroundColor: theme.palette.menuBackgroundColor,
    height: '100vh',
  },
  link: {
    textDecoration: 'none',
  },
  listItem: {},
  listItemIcon: {
    minWidth: '40px',
    color: theme.palette.menuIconColor,
  },
  listItemText: {
    fontSize: theme.typography.fontSize * 1.25,
    color: theme.palette.menuTextColor,
  },
  icon: { color: '#000' },
});
export default styles;
