import React, { useEffect, useState } from 'react';
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
import UserView from './UserView';
import UserEdit from './EditProfile';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    margin: 'auto',
    // backgroundColor: theme.palette.background.paper,
    position: 'relative'

  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(-8),
    right: theme.spacing(-4),
  }
}));

const UserCard = ({ user, setView, back, add }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('view')
  const dispatch = useDispatch();
  // add= true

  useEffect(() => {
    if(add) {
      setMode('add')
    }
  }, [mode])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!user) return null;

  const onEdit = () => {

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
          {mode === 'view' && <UserView user={user} />}
          {mode === 'edit' && <UserEdit user={user} setMode={setMode}/>}
        </Paper>
        {mode === "view" &&
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => back()}
        >
          Go Back
        </Button>}
        {mode === "edit" &&
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => setMode('view')}
        >
          Cancel
        </Button>}
        <Fab className={classes.fab} color="secondary" aria-label="edit">
          {mode === "view" &&
            <EditIcon onClick={() => setMode('edit')} />}
          {mode === "edit" &&
            <DeleteIcon onClick={() => handleClickOpen()} />}
        </Fab>

        {/* </div> */}
      </div>
    </>
  );
}

export default UserCard
