import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { loadStudent, createUser } from './userActions';
import { setUserCardMode as setMode } from '../../store/actions/ui'
import { getStudents, setCurrentStudentId, setView } from '../students/actions'



export default function UserCreate() {
  const instructorId = localStorage.getItem("user_id");
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [dob, setDob] = useState();
  const [type] = useState('adults');
  const [errors, setErrors] = useState([]);

  // const classes = useStyles();
  // const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(createUser(email, firstName, lastName, type, instructorId))
    const data = await dispatch(createUser(email, firstName, lastName, type, instructorId))
    console.log('update-------', data)
    if (!data.errors) {
      console.log(instructorId, data.id)
      await dispatch(getStudents(instructorId))
      await dispatch(setCurrentStudentId(data.id))
      await dispatch(setMode('view'))
    } else {
      setErrors(data.errors)
    }
  }

  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };


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
              value={email}
              required={true}
              fullWidth
            />
          </ListItem>
          <Divider light />
          <ListItem >
          <div>
            {errors.map((error) => (
              <div style={{color: 'red'}}>{error}</div>
            ))}
          </div>
          </ListItem >
        </List>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >Register Student
                </Button>
      </form>
    </>
  );
}
