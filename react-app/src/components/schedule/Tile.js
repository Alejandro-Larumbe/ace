import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0),
    width: theme.spacing(16),
    minHeight: theme.spacing(20),
    padding: '10px',
  },
  title: {
    fontSize: 12,
    // m={0}
  },
}));


export default function Tile({ day, data }) {
  // const date = (format(data['date'], 'p'));
  // console.log(data['date'])
  const classes = useStyles();

  return (

    <Paper className={classes.root} elevation={1} square>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {day}
      </Typography>
      { data
        ? data.map(each => {
          return (
            <>
              <Typography variant="body2" component="p">
                {each.student_name}
              </Typography>
              <Typography variant="body2" component="p">
                {each.time}
              </Typography>
            </>
          )
        })
        : <Typography variant="body2" component="p">
        </Typography>
      }
    </ Paper>
  )
}
