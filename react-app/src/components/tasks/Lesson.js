import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { addTask } from './actions'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin:'auto',
    marginBottom: 20
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function Lesson(props) {
  const { profilePicUrl, startTime, endTime, studentFirstName, studentLastName, tasks } = props.lesson
  const { handleOpen } = props
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="avatar" src={profilePicUrl} className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <Fab
          color="secondary"
          size="small"
          component="span"
          aria-label="add"
          variant="extended"
          onClick={handleOpen}
        >
          <AddIcon /> Task
        </Fab>
        }
        title={`${studentFirstName} ${studentLastName}`}
        subheader={startTime}
      />
    </Card>
  )
}
