import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { loadStudent, editUser } from './userActions';
import {setUserCardMode as setMode } from '../../store/actions/ui'
import { format } from 'date-fns';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      width: '100%',
      margin: 'auto',
      marginTop: 100,
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 200,
    bottom: 200,
    left: 'auto',
    position: 'fixed',
  }
}));

export default function UserEdit({ user, setUser }) {
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [address, setAddress] = useState(user.address);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [studioName, setStudioName] = useState(user.studioName);
  const [dob, setDob] = useState(format(new Date(user.dob), 'P'));
  const dispatch = useDispatch();
  const id = user.id;

  // useEffect(() => {
  //   setEmail(user.email)
  //   setFirstName(user.firstName)
  //   setLastName(user.lastName)
  //   setAddress(user.address)
  //   setPhoneNumber(user.phoneNumber)
  //   setStudioName(user.studioName)
  // }, [user])

  // if (!user) return null;

  // const onSignUp = async (e) => {
  //   e.preventDefault();

  // }

  const onSubmit = async (e) => {
    e.preventDefault();

    const userUpdate = await dispatch(editUser(id, email, firstName, lastName, address, phoneNumber, user.type, studioName, dob))
    // console.log(id, email, firstName, lastName, address, phoneNumber, user.type, studioName, dob)
    console.log('update-------', userUpdate)
    if (!userUpdate.errors) {
        setUser(userUpdate)
        dispatch(setMode('view'))
    }
  }


  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };


  // history.goBack();


  return (
    <>
      <form>
        {/* <div className={classes.root}>
          <Paper variant="outlined" > */}
        <List component="nav" aria-label="mailbox folders">
          <ListItem button>
            <TextField
              margin="dense"
              type="text"
              label="first name"
              name="firstName"
              onChange={updateField(setFirstName)}
              defaultValue={user.firstName}
              value={firstName}
              required={true}
              fullWidth
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <TextField
              margin="dense"
              type="text"
              label="last name"
              name="lastName"
              onChange={updateField(setLastName)}
              defaultValue={lastName}
              value={lastName}
              required={true}
              fullWidth
            />
          </ListItem>
          <Divider light />
          <ListItem button>
            <TextField
              margin="dense"
              type="text"
              label="email"
              name="email"
              onChange={updateField(setEmail)}
              defaultValue={email}
              value={email}
              required={true}
              fullWidth
            />
          </ListItem>
          <Divider light />
          <ListItem button>
            <TextField
              margin="dense"
              type="text"
              label="phone number"
              name="phoneNumber"
              onChange={updateField(setPhoneNumber)}
              defaultValue={phoneNumber}
              value={phoneNumber}
              required={true}
              fullWidth
            />
          </ListItem>
          <Divider light />
          <ListItem button>
            <TextField
              margin="dense"
              type="address"
              label="address"
              name="address"
              onChange={updateField(setAddress)}
              defaultValue={address}
              value={address}
              required={true}
              fullWidth
            />
          </ListItem>
          {user.type === 'instructors' &&
          <ListItem button>
            <TextField
              margin="dense"
              type="studioName"
              label="studio name"
              name="studioName"
              onChange={updateField(setStudioName)}
              defaultValue={studioName}
              value={studioName}
              required={true}
              fullWidth
            />
          </ListItem>}
          {user.type === 'adults' &&
          <ListItem button>
            <TextField
              margin="dense"
              type="dob"
              label="dob"
              name="dob"
              onChange={updateField(setDob)}
              defaultValue={dob}
              value={dob}
              required={true}
              fullWidth
            />
          </ListItem>}
            {/* <Button type="submit" onClick={onSubmit} color="primary">
              Update
            </Button> */}
            </List>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSubmit}
            >Update
              </Button>
              {/* <Button
          type="button"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => setMode('view')}
        >
          Cancel
        </Button> */}
          {/* </Paper>
        </div> */}
      </form>
    </>
  );
}
