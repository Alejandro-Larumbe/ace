import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import Button from '@material-ui/core/Button';


export default function DialogDelete(props) {

  const { open, handleClose, callBack, title } = props

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
    </Button>
        {/* <Button onClick={() => dispatch(deleteUser(user.id))} color="primary" autoFocus> */}
        <Button onClick={() => callBack()} color="primary" autoFocus>
          Delete
    </Button>
      </DialogActions>
    </Dialog>
  )
}
