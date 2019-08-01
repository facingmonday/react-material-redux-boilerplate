const styles = (theme) => ({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 500,
  },
  row: {
    textAlign: 'center',
    padding: theme.spacing.unit,
    '&:nth-of-type(odd)': {
      backgroundColor: '#EEEEEE',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#CCCCCC',
    },
    '&:last-of-type': {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 2,
    },
  },
  oddRow: {
    backgroundColor: '#EEEEEE',
    textAlign: 'center',
  },
  evenRow: {
    backgroundColor: '#CCCCCC',
    textAlign: 'center',
  },
  cell: {
        // whiteSpace: 'nowrap',
    // display: 'flex',
    // alignItems: 'center',
    '& p': {
      width: '100%',
    },
  },
  cellTypography: {
    wordBreak: 'break-word',
    lineHeight: 1.1,
  },
  tableWrapper: {
    overflowX: 'auto',
    maxWidth: '100%',
    borderRadius: theme.shape.borderRadius,
  },
  tableRowsWrapper: {
    // overflowY: 'scroll',
    // maxHeight: 'calc(80vh - 300px)',
    minHeight: 80,
  },
  maxPageSize: {
    padding: '16px 16px 40px 16px',
    margin: 'auto',
  },
  cartListRow: {},
  cartListColumnContent: {
    padding: '20px',
    textAlign: 'center',
    fontSize: 18,
    paddingBottom: 4,
    paddingTop: 4,
  },
  cartListColumnButton: {},
  editFilterButton: {
    width: 22,
    height: 22,
  },
  deleteCartButton: {
    width: 22,
    height: 22,
    color: '#003DA6',
  },
  searchButton: {
    color: '#003DA6',
  },
  smallIconButton: {
    width: 26,
    height: 26,
    padding: 2,
  },
  layout: {
    width: '100%',
  },
  maxScreen: {
    maxWidth: '1200px',
  },
  headers: {
    backgroundColor: '#4A5055',
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    padding: '12px 0px',
  },
  newOrderButton: {
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  headerContainer: {
    background: '#4A5055',
    padding: theme.spacing.unit,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    overflowY: 'scroll',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 2,
    },
  },
  headerCell: {
    color: '#FFF',
    fontWeight: '700',
    textAlign: 'center',
    overflow: 'unset',
  },
  headerCellFilterable: {
    textDecoration: 'underline',
  },
  actionColumnSingle: {
    maxWidth: 56,
  },
  actionColumnDouble: {
    maxWidth: 100,
  },
  pagination: {
    width: '100%',
  },
  paginationToolbar: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  searchHelperText: {
    marginTop: 0,
  },
});
export default styles;
