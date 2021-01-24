import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns'
import { setTaskDate } from '../tasks/actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CssBaseline from '@material-ui/core/CssBaseline';
import { setSelectedDate, setLessonId } from './actions';
import { setLessonView } from '../../store/actions/ui';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0),
    width: theme.spacing(24),
    minHeight: theme.spacing(15),
    // padding: '10px',
    maxHeight: theme.spacing(15),
    overflow: 'auto',
  },
  currentDay: {
    border: '1px solid white'
  },
  none: {
    margin: theme.spacing(0),
    width: theme.spacing(18),
    minHeight: theme.spacing(15),
    maxHeight: theme.spacing(15),
    backgroundColor: 'rgba(0,0,0,0)'
  },
  title: {
    fontSize: 15,
    marginBottom: '8px',
    marginTop: '5px',
    alignItems: 'center'
  },
}));

export default function Tile({ data, day, date, handleOpen }) {
  const classes = useStyles();
  const history = useHistory();
  // const id = localStorage.getItem("user_id");
  const dispatch = useDispatch();
  const isToday = () => {
    return format(new Date(), 'yyyy-MM-dd') === date
  }


  const clickHandler = (mode, id) => {
    // debugger
    dispatch(setLessonView(mode))
    if(mode === 'view')  dispatch(setLessonId(id))
    if(mode ==='create') {
      dispatch(setSelectedDate(new Date(date)))
    }

    handleOpen()

  }

  if (day !== 'empty') {
    return (
      // <CardActionArea onClick={() => clickHandler('create')}>
      <>
        <CssBaseline />
        {/* <Card onClick={() => clickHandler('create')} className={`${isToday() && classes.currentDay} ${classes.root}`} elevation={2}  square> */}
        <Card className={`${isToday() && classes.currentDay} ${classes.root}`} elevation={2} square>
          <List dense style={{ lineHeight: '0.5' }} aria-label="main mailbox folders">
            <ListItem onClick={() => clickHandler('create', null)} button color="textSecondary" className={classes.title} >
              {day}
            </ListItem>
            {data &&
              data.map((each, i) => {
                const id = each.id
                // console.log(date)
                return (
                  <ListItem style={{ marginBottom: '3px' }} onClick={() => clickHandler('view', id)} button>
                    {each.time} - {each.name} {each.lastNameInitial}
                  </ListItem>
                )
              })
            }
          </List>

        </ Card>
      </>
      // </CardActionArea>

    )
  } else {
    return (
      <div className={classes.none} ></div>
    )
  }

}
