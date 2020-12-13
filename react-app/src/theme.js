import { createMuiTheme } from '@material-ui/core/styles';
import { purple, green, amber, pink, deepPurple } from '@material-ui/core/colors';
// import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: amber[500],
    },
    secondary: {
      main: deepPurple[500],
    },
    button: {

    },
  },

  typography: {
    fontFamily: [
      'Lato',
      'Montserrat',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }

});
