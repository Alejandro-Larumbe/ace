import { createMuiTheme } from '@material-ui/core/styles';
import { purple, cyan,gold, violet, yellow, lime, green, amber, pink, deepPurple } from '@material-ui/core/colors';
// import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: amber[500]

    },
    secondary: {
      main: deepPurple[500],
    },
    text : {  primary:"#fffde7"
    }

  },
  Fab: {
    main: amber[500]
  },
  typography: {
    default: lime[500],
  },
  // button: {
  //   // primary:"#ff00a9"
  // },

  typography: {


    fontFamily: [
      'Lato',
      'Montserrat',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500
},

});
