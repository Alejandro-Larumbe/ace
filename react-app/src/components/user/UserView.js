import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { CardContent } from '@material-ui/core';



export default function UserView({ user }) {


  return (
    <>
        <List component="nav" aria-label="mailbox folders">
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
        {/* </CardContent> */}
    </>
  )
}

// export default function UserViewContainer(){
//   const user = useSelector(state => state.students.byId[state.students.currentStudentId])

//   return (
//       <UserView user={user} />
//   )
// }
