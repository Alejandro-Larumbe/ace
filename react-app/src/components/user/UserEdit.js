import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { loadStudent } from './userActions';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      width: '100%',
      maxWidth: 500,
      margin: 'auto',
      marginTop: '22vh',
      backgroundColor: theme.palette.background.paper,
    },
  },
  list: {
    // width: '100%',
    // margin: 'auto',
    // marginTop: 100,
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
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

const UserCard = ({ student, loadStudent }) => {
  const [email, setEmail] = useState(student.email);
  const [firstName, setFirstName] = useState(student.first_name);
  const [lastName, setLastName] = useState(student.last_name);
  const [address, setAddress] = useState(student.address);
  const [phoneNumber, setPhoneNumber] = useState(student.phone_number);
  const [dob, setDob] = useState(student.dob);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setEmail(student.email)
    setFirstName(student.first_name)
    setLastName(student.last_name)
    setAddress(student.address)
    setPhoneNumber(student.phone_number)
    setDob(student.dob)
  }, [student])



  if (!student) return null;

  const onSignUp = async (e, email, firstName, lastName, address, phoneNumber, dob) => {
    e.preventDefault();

  }

  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };

  const onSubmit = async (e) => {
    console.log(
      email, firstName, lastName, address, phoneNumber
    )
    // history.goBack();
  }

  console.log('student', student)

  return (
    <>
      <form onSubmit={onSignUp}>
        <div className={classes.root}>
          <Paper variant="outlined" >
            <List component="nav" className={classes.list} aria-label="mailbox folders">
              <ListItem button>
                <TextField
                  margin="dense"
                  type="text"
                  label="first name"
                  name="firstName"
                  onChange={updateField(setFirstName)}
                  defaultValue={firstName}
                  value={firstName}
                  required={true}
                  fullWidth
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <TextField
                  variant="outlined"
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
                  label="dob"
                  name="dob"
                  onChange={updateField(setDob)}
                  defaultValue={dob}
                  value={dob}
                  required={true}
                  fullWidth
                />
              </ListItem>
              <Divider />
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
              <Divider light />
              <Button onClick={() => history.goBack()} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={onSubmit} color="primary">
                Update
              </Button>
            </List>
          </Paper>
        </div>
      </form>
    </>
  );
}


const UserEditContainer = (props) => {
  const student = useSelector(state => state.student)
  const { id } = useParams()
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(loadStudent(id));
  }, []);

  if (!student) return null


  return (
    <UserCard
      student={student}
    />
  )
}

export default UserEditContainer
