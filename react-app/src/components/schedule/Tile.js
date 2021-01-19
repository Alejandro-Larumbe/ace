import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns'
import { setTaskDate } from '../tasks/actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0),
    width: theme.spacing(24),
    minHeight: theme.spacing(15),
    padding: '10px',
    maxHeight: theme.spacing(15),
    overflow: 'auto',
  },
  currentDay: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0),
    width: theme.spacing(24),
    minHeight: theme.spacing(15),
    padding: '10px',
    maxHeight: theme.spacing(15),
    overflow: 'auto',
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
    fontSize: 12,
    // m={0}
  },
}));


export default function Tile({ data, day, date }) {
  const classes = useStyles();
  const history = useHistory();
  const id = localStorage.getItem("user_id");
  const dispatch = useDispatch();

  const isToday = () => {
    return format(new Date(), 'yyyy-MM-dd') === date
  }

  const clickHandler = async () => {
    await dispatch(setTaskDate(new Date(date)))
    history.push('/lessons')
  }

  if (day !== 'empty') {
    return (
      <CardActionArea>
        <Card onClick={clickHandler} className={isToday() ? classes.currentDay : classes.root} elevation={2} square>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {day}
          </Typography>
          {data
            ? data.map((each, i )=> {
              return (
                <div key={i}>
                  <Typography  variant="body2" component="p">
                    {each.time} - {each.name} {each.lastNameInitial}
                  </Typography>
                </div>
              )
            })
            : <Typography variant="body2" component="p">
            </Typography>
          }
        </ Card>
      </CardActionArea>

    )
  } else {
    return (
      <div className={classes.none} ></div>
    )
  }

}
