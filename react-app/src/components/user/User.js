import React, { useEffect } from 'react';
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
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: 'auto',
    marginTop: 100,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
  const classes = useStyles();
  const history = useHistory();


  useEffect(() => {
    getStudent();
  }, []);

  if (!student) return null;

  const onEdit = () => {
    history.push(`/students/${student.id}/edit`)
  }

  return (
    <>
      <div className={classes.root}>
        <Paper variant="outlined" >
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <Avatar alt="Remy Sharp" src={student.profile_pic_url}></Avatar>
              <ListItemText primary="Name" primary={`${student.first_name} ${student.last_name}`} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="date of birth" secondary={student.dob} />
            </ListItem>
            <Divider light />
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
          <Fab className={classes.fab} color="secondary" aria-label="edit">
            <EditIcon onClick={onEdit} />
          </Fab>
        </Paper>
      </div>
    </>
  );
}




const UserCardContainer = (props) => {
  const student = useSelector(state => state.student)
  const { id } = useParams()
  const dispatch = useDispatch()



  return (
    <UserCard
      student={student}
      getStudent={() => dispatch(loadStudent(id))}
    />
  )
}

export default UserCardContainer
