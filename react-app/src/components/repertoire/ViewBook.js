import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { CardContent } from '@material-ui/core';



export default function ViewBook({ book }) {


  return (
    <>
        <List component="nav" aria-label="mailbox folders">
              <ListItem >
                <ListItemText primary="author" secondary={`by ${book.author}`} />
              </ListItem>
        </List>
    </>
  )
}
