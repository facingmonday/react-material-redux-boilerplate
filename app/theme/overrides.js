export default {
  MuiButton: {
    root: {
      'text-transform': 'none',
      display: 'flex',
      'flex-direction': 'row',
      'align-items': 'flex-start',
    },
    contained: {
      '&$disabled': {
        color: '#FFF',
        backgroundColor: '#ACACAC',
      },
    },
  },
  MuiDialogContent: {
    root: {
      '&:first-child': {
        paddingTop: '16px',
      },
      padding: '16px',
    },
  },
  MuiCardContent: {
    root: {
      paddingTop: '0px',
      // paddingBottom: '0px',
      // '&:last-child': {
      //   paddingBottom: '0px',
      // },
    },
  },
  // MuiGrid: {
  //   container: {
  //     'border-radius': '4px 4px 0px 0px',
  //   },
  // },
  
  MuiListItemText: {
    root: {
      fontFamily: '"Helvetica", "Arial", sans-serif',
    },
    primary: {
      fontSize: '14px',
      lineHeight: '18px',
      fontFamily: '"Helvetica", "Arial", sans-serif',
      // textTransform: 'uppercase',
      fontWeight: '500',
    },
    secondary: {
      fontSize: '13px',
      lineHeight: '14px',
    },
  },
  MuiPaper: {
    root: {
      'box-shadow': '0',
      // border: '.5px solid black',
      overflowX: 'auto',
    },
    rounded: {
      borderRadius: '4px',
    },
    elevation1: {
      boxShadow: 'none',
      border: '1px solid #4A5055',
    },
    elevation2: {
      boxShadow: '4px 4px 7px 0 rgba(74,79,85,0.5)',
    },
  },
  MuiTypography: {
    root: {
      fontFamily: '"Helvetica", "Arial", sans-serif',
      color: '#4A4F55',
    },
  },
  MuiFormControl: {
    root: {
      'text-transform': 'uppercase',
      'margin-bottom': '10px',
    },
  },
  MuiFormHelperText: {
    error: {
      fontWeight: '600',
      textTransform: 'uppercase',
    },
  },
  MuiInput: {
    root: {
      'text-transform': 'uppercase',
      fontFamily: '"Helvetica", "Arial", sans-serif',
      color: 'rgba(0, 0, 0, .5)',
    },
  },
  MuiInputBase: {
    input: {
      fontSize: '14px',
      lineHeight: '18px',
      color: '#4A4F55',
      fontFamily: '"Helvetica", "Arial", sans-serif',
      fontWeight: '500',
      '&::-webkit-input-placeholder, &::placeholder': {
        fontWeight: '400',
        opacity: '0.8',
      },
      '&::-ms-clear': {
        display: 'none',
      },
    },
  },
  MuiInputLabel: {
    root: {
      fontFamily: '"Helvetica", "Arial", sans-serif',
      fontWeight: '600',
      fontSize: '16px',
      color: '#4A4F55',
    },
    shrink: {
      fontSize: '14px',
      fontWeight: '500',
    },
  },
  MuiFormLabel: {
    root: {
      fontFamily: '"Helvetica", "Arial", sans-serif',
      fontWeight: '700',
      fontSize: 12,
      color: '#4A4F55',
    },
  },
  MuiTableRow: {
    root: {
      padding: '10px 0px',
      height: 'auto',
    },
  },
  MuiTableCell: {
    head: {
      backgroundColor: '#4A5055',
      color: '#FFFFFF',
      fontFamily: '"Helvetica", "Arial", sans-serif',
      'font-size': '14px',
      'font-weight': 'bold',
      'letter-spacing': '0.25px',
      'line-height': '20px',
      textAlign: 'center',
    },
    root: {
      fontFamily: '"Helvetica", "Arial", sans-serif',
      fontSize: '14px',
      letterSpacing: '0.25px',
      lineHeight: '14px',
    },
    body: {
      textAlign: 'center',
    },
  },
  MuiTablePagination: {
    root: {
      borderBottom: 'none',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    spacer: {
      flex: '0',
    },
  },
  MuiCardHeader: {
    root: {
      background: '#4A5055',
      paddingTop: '0px',
      paddingBottom: '0px',
    },
    action: {
      margin: '0px',
    },
    title: {
      color: '#FFF',
      fontFamily: '"Helvetica", "Arial", sans-serif',
      'text-transform': 'uppercase',
      'font-size': '16px',
      'font-weight': 'bold',
      'letter-spacing': '0.25px',
      'line-height': '20px',
    },
  },
  MuiTab: {
    selected: {
      color: '#003DA6',
    },
  },
}
