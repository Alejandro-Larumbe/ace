import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import configureStore from './store/store';
import initialStore from './initialStore';


import './index.css';
import App from './App';



let store = configureStore(initialStore);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
