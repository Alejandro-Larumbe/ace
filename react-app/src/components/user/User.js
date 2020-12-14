import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { loadStudent } from './userActions';
import { format, parse } from 'date-fns';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 400,
    margin: 'auto',
    marginTop: '22vh',
    backgroundColor: theme.palette.background.paper,
    position: 'relative'

  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(-8),
    right: theme.spacing(-4),
  }
}));

const UserCard = ({ user, getStudent }) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    getStudent();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  if (!user) return null;


  const onEdit = () => {
    history.push(`${user.id}/edit`)
  }
  const onDelete = () => {
    history.push(`${user.id}/edit`)
  }

  return (
    <>
      <div className={classes.root}>
        <Paper variant="outlined" >
          <List component="nav" aria-label="mailbox folders">
            <ListItem >
              <Avatar alt="Remy Sharp" src={user.profile_pic_url}></Avatar>
              <ListItemText style={{marginLeft:"20px"}} primary="Name" primary={`${user.first_name} ${user.last_name}`} />
            </ListItem>
            <Divider />
            <ListItem >
              <ListItemText primary="date of birth" secondary={user.dob} />
            </ListItem>
            <Divider light />
            <ListItem  divider>
              <ListItemText primary="phone number" secondary={user.phone_number} />
            </ListItem>
            <Divider light />
            <ListItem  divider>
              <ListItemText primary="email" secondary={user.email} />
            </ListItem>
            <Divider light />
            <ListItem >
              <ListItemText primary="address" secondary={user.address} />
            </ListItem>
          </List>
        </Paper>
        <div className={classes.fab}>
          <Fab color="secondary" aria-label="edit">
            <EditIcon onClick={onEdit} />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <DeleteIcon onClick={onDelete} />
          </Fab>
        </div>
      </div>
    </>
  );
}




const UserCardContainer = (props) => {
  const user = useSelector(state => state.student)
  const { id } = useParams()
  const dispatch = useDispatch()



  return (
    <UserCard
      user={user}
      getStudent={() => dispatch(loadStudent(id))}
    />
  )
}

export default UserCardContainer
