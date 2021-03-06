import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import Description from './Description';
import LoginForm from '../auth/LoginForm';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '130vh',
    height: '130vh',
    width: '100%',
    backgroundImage: `url("https://ace-management.s3.us-east-2.amazonaws.com/HNashPhoto-4117cropped.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    colorText: '',
    zIndex: 10,
    left: '50px'
  },
}))

const Splash = ({ authenticated, setAuthenticated }) => {
  let history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  return (

    <div className={classes.root}>
      <CssBaseline />
      <Header handleOpen={handleOpen} />
      <LoginForm
        className={classes.login}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Description />
    </div >
  )
}

export default Splash
