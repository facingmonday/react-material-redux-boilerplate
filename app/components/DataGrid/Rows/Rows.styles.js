export default theme => ({
  row: {
    textAlign: 'center',
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
  },
  oddRow: {
    backgroundColor: '#EEEEEE',
    textAlign: 'center',
  },
  evenRow: {
    backgroundColor: '#CCCCCC',
    textAlign: 'center',
  },
});
