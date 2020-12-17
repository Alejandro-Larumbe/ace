import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import configureStore from './store/store';
import initialStore from './initialStore';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';



import './index.css';
import App from './App';



let store = configureStore(initialStore);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <App />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
