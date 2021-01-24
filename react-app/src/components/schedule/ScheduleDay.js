import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import format from 'date-fns/format';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: '20vh',
    margin: 'auto'
  },
  title: {
    marginLeft: '15px',
    // padding: '20px',
  }
}));

export default function ScheduleDay({ dayIds, byId }) {
  const classes = useStyles();
  const history = useHistory()


  if (!dayIds) return <h1>nothing scheduled here yet...</h1>

  // console.log('dayarray', byId)
  // console.log('dayIds', dayIds)

  const data = dayIds.map(each => {
    return byId[each]
  })


  data.sort((a, b) => (a.start_time > b.start_time) ? 1 : -1)

  return (
    <div className={classes.root}>
      <Typography
        component="span"
        variant="h4"
        // className={classes.inline}
        className={classes.title}
        color="textPrimary"
      >
        {format(new Date(data[0].start_time), 'PP')}
      </Typography>
      <List  >
        {
          data.map(each => {
            return (
              // console.log(byId[each])
              <ListItem onClick={() => history.push(`/${each.instructor_id}/students/${each.student_id}`)} key={each.id} button>
                <ListItemAvatar>
                  <Avatar alt="profile pic" src={each.profile_pic_url} />
                </ListItemAvatar>
                <ListItemText
                  id={each.id}
                  primary={`${each.student_first_name} ${each.student_last_name}`}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {format(new Date(each.start_time), 'p')} - {format(new Date(each.end_time), 'p')}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            )
          })

        }
      </List >
      <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => history.goBack()}
              >
                Go Back
              </Button>
    </div>
  )
}
