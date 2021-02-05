import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SuccessSnackbar(props) {
  const {
    open,
    setOpen,
    message,
    setMessage
  } = props

  //handler function
  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setMessage(null)
  };

  return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
      // <Alert severity="error">This is an error message!</Alert>
      // <Alert severity="warning">This is a warning message!</Alert>
      // <Alert severity="info">This is an information message!</Alert>
      // <Alert severity="success">This is a success message!</Alert>
  );
}
