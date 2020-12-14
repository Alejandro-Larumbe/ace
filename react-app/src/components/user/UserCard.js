import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { loadStudent, deleteUser } from './userActions';
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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';



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

const UserCard = ({ user }) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();



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
    dispatch(deleteUser(user.id))

  }

  return (
    <>
      <div className={classes.root}>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete user?"}</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
          </Button>
              <Button onClick={onDelete} color="primary" autoFocus>
                Delete
          </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Paper variant="outlined" >
          <List component="nav" aria-label="mailbox folders">
            <ListItem >
              <Avatar alt="Remy Sharp" src={user.profile_pic_url || user.profilePicUrl}></Avatar>
              <ListItemText style={{ marginLeft: "20px" }} primary="Name" primary={`${user.first_name || user.firstName} ${user.last_name || user.lastName}`} />
            </ListItem>
            {user.dob ?
              <>
                <Divider />
                <ListItem >
                  <ListItemText primary="date of birth" secondary={user.dob} />
                </ListItem>
              </>
              : null
            }
            <Divider light />
            <ListItem divider>
              <ListItemText primary="phone number" secondary={user.phone_number || user.phoneNumber} />
            </ListItem>
            <Divider light />
            <ListItem divider>
              <ListItemText primary="email" secondary={user.email} />
            </ListItem>
            <Divider light />
            <ListItem >
              <ListItemText primary="address" secondary={user.address} />
            </ListItem>
            {user.studioName ?
              <>
                <Divider />
                <ListItem >
                  <ListItemText primary="studio name" secondary={user.studioName} />
                </ListItem>
              </>
              : null
            }
          </List>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => history.goBack()}
          >
            Go Back
              </Button>
        </Paper>
        <div className={classes.fab}>
          <Fab color="secondary" aria-label="edit">
            <EditIcon onClick={() => onEdit()} />
          </Fab>
          <Fab color={'secondary'} aria-label="delete">
            <DeleteIcon onClick={handleClickOpen} />
          </Fab>
        </div>
      </div>
    </>
  );
}

export default UserCard
