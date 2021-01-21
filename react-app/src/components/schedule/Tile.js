import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns'
import { setTaskDate } from '../tasks/actions';
import { useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CssBaseline from '@material-ui/core/CssBaseline';


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
  const id = localStorage.getItem("user_id");
  const dispatch = useDispatch();
  const isToday = () => {
    return format(new Date(), 'yyyy-MM-dd') === date
  }

  console.log(data)


  const clickHandler = (id) => {
    console.log(id)
    return 'hi'
    // await dispatch(setTaskDate(new Date(date)))
    // history.push('/lessons')
  }

  if (day !== 'empty') {
    return (
      <CardActionArea onClick={handleOpen}>
        <>
          <CssBaseline />
          <Card className={`${isToday() && classes.currentDay} ${classes.root}`} elevation={2} square>
            <List dense style={{ lineHeight: '0.5' }} component="nav" aria-label="main mailbox folders">
              <ListItem color="textSecondary" className={classes.title} >
                {day}
              </ListItem>
              {data &&
                data.map((each, i) => {
                  const id = each.id
                  return (
                    <ListItem style={{ marginBottom: '3px' }} onClick={() => clickHandler(id)} button>
                      {each.time} - {each.name} {each.lastNameInitial}
                    </ListItem>
                  )
                })
              }
            </List>

          </ Card>
        </>
      </CardActionArea>

    )
  } else {
    return (
      <div className={classes.none} ></div>
    )
  }

}
