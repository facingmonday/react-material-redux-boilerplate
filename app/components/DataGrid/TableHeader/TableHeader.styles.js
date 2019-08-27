export default theme => ({
  headerContainer: {
    background: '#4A5055',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    height: 50,
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
  actionColumnSingle: {
    maxWidth: 56,
  },
  actionColumnDouble: {
    maxWidth: 100,
  },
});
