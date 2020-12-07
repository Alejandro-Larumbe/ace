import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { loadStudent } from './userActions';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
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

const UserCard = ({ student, getStudent }) => {
  const [email, setEmail] = useState(student.email);
  const [firstName, setFirstName] = useState(student.first_name);
  const [lastName, setLastName] = useState(student.last_name);
  const [address, setAddress ] = useState(student.address);
  const [phone, setPhone ] = useState(student.phone_number);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();




  const onSignUp = async (e) => {
    e.preventDefault();

    console.log('SUBMIT')
  }

  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };

  const onSubmit = async (e) => {
    history.goBack();
  }

  if (!student) return null;


  return (
    <>
      <form onSubmit={onSignUp}>
        <div className={classes.root}>
          <Paper variant="outlined" >
            <List component="nav" className={classes.list} aria-label="mailbox folders">
              <ListItem >
                <Avatar alt="Remy Sharp" src={student.profile_pic_url}></Avatar>
                <ListItemText primary="Name" primary={`${student.last_name}`} />
              </ListItem>
              <Divider />
              <ListItem button>
                <TextField
                  autoFocus
                  margin="dense"
                  type="text"
                  label="last name"
                  name="lastName"
                  onChange={updateField(setLastName)}
                  value={lastName}
                  required={true}
                  fullWidth
                />
                <ListItemText primary="date of birth" secondary={student.dob} />
              </ListItem>
              <ListItem button divider>
                <ListItemText primary="phone number" secondary={student.phone_number} />
              </ListItem>
              <Divider light />
              <ListItem button divider>
                <ListItemText primary="email" secondary={student.email} />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="address" secondary={student.address} />
              </ListItem>
            </List>
            <List>
              <Fab className={classes.fab} color="secondary" aria-label="edit">
                <EditIcon />
              </Fab>
            </List>
            <Button onClick={() =>  history.goBack()} color="primary">
              Cancel
          </Button>
            <Button type="submit" onClick={onSubmit} color="primary">
              Sign Up
        </Button>
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
    getStudent();
  }, []);

  if(!student) return null

  return (
    <UserCard
      student={student}
      getStudent={() => dispatch(loadStudent(id))}
    />
  )
}

export default UserEditContainer
