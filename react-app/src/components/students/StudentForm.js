import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardActions } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createStudent, editStudent } from './actions';
import { format } from 'date-fns';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default function UserForm({ getStudents, user, mode, setSuccessMessage, setOpenSnackbar, setMode, setOpen }) {
  const [email, setEmail] = useState(user ? user.email : '');
  const [firstName, setFirstName] = useState(user ? user.firstName : '');
  const [lastName, setLastName] = useState(user ? user.lastName : '');
  const [address, setAddress] = useState(user ? user.address : '');
  const [phoneNumber, setPhoneNumber] = useState((user && user.type === 'adults') ? user.phoneNumber : '');
  const [studioName, setStudioName] = useState(user && user.studioName ? user.studioName : '');
  const [dob, setDob] = useState(user && user.type === 'adults' ? format(new Date(user.dob), 'P') : format(new Date(), 'P'));
  const [id] = useState(user ? user.id : '');
  const dispatch = useDispatch();
  const instructorId = localStorage.getItem('user_id')

  const onSubmit = async (e) => {
    e.preventDefault();
    let data;
    if (mode === 'edit') {
      data = await dispatch(editStudent(email, firstName, lastName, user.type, id, instructorId, address, phoneNumber, studioName, dob))
    }
    if (mode === 'create') {
      data = await dispatch(createStudent(email, firstName, lastName, 'adults', instructorId, dob))
    }
    if (!data.errors) {
      if (mode === 'edit') {
        setSuccessMessage(user.type === 'instructors' ? 'Profile Updated Successfully' : 'Student Updated Successfully')
        setOpenSnackbar(true)
        setMode('view')
        getStudents()
      }
      if (mode === 'create') {
        setSuccessMessage("Student Registered Successfully")
        setOpenSnackbar(true)
        setOpen(false)
        getStudents()
      }
    }
  }


  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };

  const handleDateChange = (date) => {
    setDob(date);
  };


  // history.goBack();


  return (
    <>
      <form>
        <List component="nav" aria-label="mailbox folders">
          <ListItem >
            <TextField
              margin="dense"
              type="text"
              label="first name"
              name="firstName"
              onChange={updateField(setFirstName)}
              // defaultValue={firstName}
              value={firstName}
              required={true}
              fullWidth
            />
          </ListItem>
          <ListItem >
            <TextField
              margin="dense"
              type="text"
              label="last name"
              name="lastName"
              onChange={updateField(setLastName)}
              value={lastName}
              required={true}
              fullWidth
            />
          </ListItem>
          <ListItem >
            <TextField
              margin="dense"
              type="text"
              label="email"
              name="email"
              onChange={updateField(setEmail)}
              value={email}
              required={true}
              fullWidth
            />
          </ListItem>
          <ListItem >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    fullWidth
                    id="date-picker-inline"
                    label="Choose a DOB"
                    value={dob}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </ListItem>
          {user && user.type === 'instructors' &&
            <ListItem >
              <TextField
                margin="dense"
                type="text"
                label="studio name"
                name="studioName"
                onChange={updateField(setStudioName)}
                value={studioName}
                required={true}
                fullWidth
              />
            </ListItem>
          }
          {
            mode === 'edit' &&
            <>
              <ListItem >
                <TextField
                  margin="dense"
                  type="text"
                  label="phone number"
                  name="phoneNumber"
                  onChange={updateField(setPhoneNumber)}
                  value={phoneNumber}
                  fullWidth
                />
              </ListItem>
              <ListItem >
                <TextField
                  margin="dense"
                  type="text"
                  label="address"
                  name="address"
                  onChange={updateField(setAddress)}
                  value={address}
                  fullWidth
                />
              </ListItem>
            </>
          }
        </List>
        <CardActions>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            {mode === 'edit' ? 'Update' : 'Save'}
          </Button>
        </CardActions>
      </form>
    </>
  );
}
