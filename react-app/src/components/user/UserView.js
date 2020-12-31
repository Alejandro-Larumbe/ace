import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';



function UserView({ user }) {


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
              <ListItemText primary="date of birth" secondary={format(new Date(user.dob), 'PP')} />
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

export default function UserViewContainer(){
  const user = useSelector(state => state.students.byId[state.students.currentStudentId])

  return (
    <UserView user={user} />
  )
}
