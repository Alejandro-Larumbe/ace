import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card, CardActionArea } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { getDate, getMonth, getYear, toDate } from 'date-fns'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0),
    width: theme.spacing(20),
    minHeight: theme.spacing(15),
    padding: '10px',
    maxHeight: theme.spacing(15),
    overflow: 'auto',
  },
  currentDay: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0),
    width: theme.spacing(20),
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


export default function Tile({ day, data, currentDate }) {

  const classes = useStyles();
  // console.log('day-----------', day)
  const history = useHistory();
  const id = localStorage.getItem("user_id");

  const isToday = () => {
    const today = new Date()
    return getYear(currentDate) === getYear(today) && getMonth(currentDate) === getMonth(today) && day === getDate(today)
  }

  if (day !== 'empty') {
    return (
      <CardActionArea>
        <Card onClick={() => history.push(`/${id}/day/${day}`)} className={isToday() ? classes.currentDay : classes.root} elevation={2} square>
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
