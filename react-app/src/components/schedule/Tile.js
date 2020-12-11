import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(8),
      minHeight: theme.spacing(8),
    },
  },
  title: {
    fontSize: 12,
    // m={0}
  },
}));


export default function Tile({ id, data }) {
  const classes = useStyles();

  return (

    <Paper className={classes.root} square>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {id}
      </Typography>
      { data
        ? data.map(each => {
          return (
            <>
              <Typography variant="body2" component="p">
                {each.student_name}
              </Typography>
              <Typography variant="body2" component="p">
                {each.date_start}
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
