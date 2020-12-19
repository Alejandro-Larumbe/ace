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





export default function UserView({ user, setView, back }) {


  return (
    <>
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
    </>
  )
}
