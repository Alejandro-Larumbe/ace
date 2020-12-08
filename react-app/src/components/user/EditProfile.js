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
      margin: 'auto',
      marginTop: 100,
      maxWidth: 360,
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

const UserCard = ({ user }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setEmail(user.email)
    setFirstName(user.first_name)
    setLastName(user.last_name)
    setAddress(user.address)
    setPhoneNumber(user.phone_number)
  })

  if (!user) return null;

  const onSignUp = async (e) => {
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
                  defaultValue={user.first_name}
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


const EditProfileContainer = (props) => {
  const user = useSelector(state => state.user)


  return (
    <UserCard
      user={user}
    // getuser={() => dispatch(loadStudent(id))}
    />
  )
}

export default EditProfileContainer