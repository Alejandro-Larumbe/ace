import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { loadStudent, deleteUser } from './userActions';
import { format, parse } from 'date-fns';
import { setView } from '../students/actions';

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
import UserEdit from './UserEdit';
import UserCreate from './UserCreate';
import { setUserCardMode as setMode } from '../../store/actions/ui'



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
    bottom: theme.spacing(-7),
    right: theme.spacing(-6),
  }
}));

const UserCard = ({ user: currentUser, setView, back }) => {
  const classes = useStyles();
  const [user, setUser] = useState(currentUser)
  const [open, setOpen] = useState(false);
  const mode = useSelector(state => state.ui.userCardMode)
  const dispatch = useDispatch();

  useEffect(() => {
    // if(add) {
    //   setMode('add')
    // }
  }, [mode])



  const handleClickOpen = () => {
    // setMode('')
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!user) return null;

  // const onEdit = () => {

  // }
  const onDelete = async (e) => {
    const data = await dispatch(deleteUser(user.id))
    // if (!data.errors) {
    //   setOpen(false);
    //   dispatch(setMode('view'))
    // }

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
              {/* <Button onClick={() => dispatch(deleteUser(user.id))} color="primary" autoFocus> */}
              <Button onClick={onDelete} color="primary" autoFocus>
                Delete
          </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Paper variant="outlined" >
          {mode === 'view' && <UserView user={user} setView={setView}/>}
          {mode === 'edit' && <UserEdit user={user} setUser={setUser}/>}
          {mode === 'create' && <UserCreate instructorId={user.instructorId}/>}
        </Paper>
        {mode === 'view' &&
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => dispatch(setView(back))}
          >
            Go Back
        </Button>}
        {mode === 'edit' &&
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => dispatch(setMode('view'))}
          >
            Cancel
        </Button>}
        {mode === 'create' &&
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => dispatch(setMode('view'))}
          >
            Cancel
        </Button>}
        {mode === 'view' &&
          <Fab className={classes.fab} color="secondary" aria-label="edit" onClick={() => dispatch(setMode('edit'))}>
            <EditIcon  />
          </Fab>
        }
        {mode === 'edit' &&
          <Fab onClick={() => setOpen(true)} className={classes.fab} color="secondary" aria-label="edit">
            <DeleteIcon  />
          </Fab>
        }


        {/* </div> */}
      </div>
    </>
  );
}

export default UserCard
