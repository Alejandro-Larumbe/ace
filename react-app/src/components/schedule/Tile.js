import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { getDate, getMonth, getYear, toDate } from 'date-fns'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0),
    width: theme.spacing(18),
    minHeight: theme.spacing(15),
    padding: '10px',
    maxHeight: theme.spacing(15),
    overflow: 'auto',
  },
  currentDay: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0),
    width: theme.spacing(18),
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
    backgroundColor:'rgba(0,0,0,0)'
  },
  title: {
    fontSize: 12,
    // m={0}
  },
}));


export default function Tile({ day, data, currentDate }) {
  const classes = useStyles();
  console.log('day-----------', day)

  const isToday = () => {
    const today = new Date()
    return getYear(currentDate) === getYear(today) && getMonth(currentDate) === getMonth(today) && day === getDate(today)
  }

  if (day !== 'empty') {
    return (
      <Paper className={isToday() ? classes.currentDay : classes.root} elevation={2} square>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {day}
        </Typography>
        { data
          ? data.map(each => {
            return (
              <>
                <Typography variant="body2" component="p">
                  {each.time} - {each.name} {each.lastNameInitial}
                </Typography>
              </>
            )
          })
          : <Typography variant="body2" component="p">
          </Typography>
        }
      </ Paper>

    )
  } else {
    return (
      <div className={classes.none} ></div>
    )
  }

}
