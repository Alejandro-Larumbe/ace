import React, { useState } from "react";
import { useDispatch, } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';
import { addBook } from './actions';


export default function AddBook(props) {
  const [ instructorId ] = useState(localStorage.getItem('user_id'))
  const dispatch = useDispatch();

  const {
    open,
    handleClose,
    dialogValue,
    setDialogValue,
    setBook
  } = props

  const onCancel = () => {
    setDialogValue({
      title: '',
      author: '',
    });

    handleClose();


  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // setDialogValue({
    //   title: dialogValue.title,
    //   author: parseInt(dialogValue.author, 10),
    // });
    // console.log(dialogValue.title, dialogValue.author)

    const newBook = await dispatch(addBook(instructorId, dialogValue.title, dialogValue.author))
    console.log('newBook', newBook)

    if (!newBook.errors) {
      setBook(newBook)
      handleClose();
    }
  };




  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <form onSubmit={handleSubmit}>
      <DialogTitle id="form-dialog-title">Add a new book</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          Did you miss any film in our list? Please, add it!
    </DialogContentText> */}
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          id="name"
          value={dialogValue.title}
          onChange={(event) => setDialogValue({ ...dialogValue, title: event.target.value })}
          label="title"
          type="text"
        />
        <TextField
          margin="dense"
          fullWidth
          id="name"
          value={dialogValue.author}
          onChange={(event) => setDialogValue({ ...dialogValue, author: event.target.value })}
          label="author"
          type="text"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
    </Button>
        <Button type="submit" color="primary">
          Add
    </Button>
      </DialogActions>
    </form>
  </Dialog>

  )

}
