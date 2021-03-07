import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CardWithActions from '../materialUIBundles/CardWithActions';
import ViewBook from './ViewBook';
import ViewPiece from './ViewPiece';

export default function ViewRepertoire(props) {
  const {
    mode,
    setMode,
    setOpen,
    book,
    piece,
    repType,
    booksById

  } = props

  return (
    <>
      <CardWithActions
        title={repType === 'piece' ? piece.title : book.title}
        setOpen={setOpen}
        setMode={setMode}
        // onDelete={onDelete}
      >
        {
          repType === 'piece' &&
          <ViewPiece
            piece={piece}
            booksById={booksById}
          />
        }
        {
          repType === 'book' &&
          <ViewBook
            book={book}
          />
        }
      </CardWithActions>
    </>
  )
}
