import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { CardContent } from '@material-ui/core';



export default function ViewPiece({ piece, booksById }) {
// const [bookTitle] = useState(booksById[piece.bookId].title?booksById[piece.bookId].title:null)


  return (
    <>
      {
        piece.composer &&
        <List component="nav" dense aria-label="mailbox folders">
              <ListItem dense>
                <ListItemText
                  primary={`by ${piece.composer}`}
                  secondary={piece.bookTitle ? `from ${piece.bookTitle}`:null}
               />
              </ListItem>
        </List>
      }
    </>
  )
}
