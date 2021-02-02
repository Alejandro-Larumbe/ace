import React, { useEffect, useState } from 'react';
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
import { purple } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { addTask } from './actions'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns';
import EditTaskForm from './EditTaskForm';
import { deleteTask } from './actions';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: 'auto',
    marginBottom: 20
  },
  avatar: {
  },
}))

export default function Lesson(props) {
  const { setLessonId, setCurrentId } = props
  const { id, profilePicUrl, startTime, endTime, studentFirstName, studentLastName, tasks } = props.lesson
  const { handleOpen, handleOpenEdit } = props
  const classes = useStyles();
  const dispatch = useDispatch();
  const [instructorId] = useState(+localStorage.getItem('user_id'))

  const handleClick = (e) => {
    setLessonId(id)
    handleOpen()
  }

  useEffect(() => {

  }, [dispatch])

  const taskHeader = (type, duration, frequency) => {
    const durationText =
      // returntype ? ' - ' : '' +
      duration ? `  ${duration} minutes` : ''

    const frequencyText = frequency ? ` ${frequency} times a week` : ''

    return (type ? `${type}` : '') + (duration || frequency ? ' - ' : '') + durationText + frequencyText
  }

  const onEdit = (id) => {
    setLessonId(id)
    handleOpenEdit()
  }

  const onDelete = (taskId ) => {
    console.log(taskId, instructorId)
    dispatch(deleteTask(taskId, instructorId, props.date))
  }

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
            // variant="extended"
            id={id}
            onClick={handleClick}
          >
            <AddIcon
            // color="secondary"
            // size="small"
            // component="span"
            // aria-label="add"
            // variant="extended"
            // id={id}
            // onClick={handleClick}
            />
          </Fab>
        }
        title={

          <Typography
            component="span"
            variant="h6"
            className={classes.inline}
            color="textPrimary"
          >
            {`${studentFirstName} ${studentLastName}`}
          </Typography>

        }
        // `${studentFirstName} ${studentLastName}`}
        subheader={`${format(new Date(startTime), "p")} - ${format(new Date(endTime), "p")}`}
      />
      { tasks.length > 0 &&
        <CardContent>
          <List>
            {tasks.map(each => {
              return (
                <>
                  {/* <ListItem onClick={handleClick} button /> */}
                  <Divider component="li" />
                  <ListItem onClick={() => onEdit(each.id)} >
                    <ListItemText
                      primary={
                        <>
                          <Typography
                            component="span"
                            variant="h6"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {taskHeader(each.type, each.duration, each.frequency)}
                          </Typography>

                        </>
                      }
                      secondary={
                        <React.Fragment>
                          {each.pieceTitle &&
                            <>
                              <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                              >
                                {`piece: ${each.pieceTitle}`}
                              </Typography>
                              <br />
                            </>
                          }
                          {each.bookTitle &&
                            <>
                              <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                              >
                                {`book: ${each.bookTitle}`}
                              </Typography>
                              <br />
                            </>
                          }
                          {each.instructions &&
                            <>
                              <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                              >
                                {each.instructions && `instructions: ${each.instructions}`}
                              </Typography>
                            </>
                          }
                          <ListItemSecondaryAction>
                            {/* <IconButton edge="end" aria-label="delete">
                              <EditIcon />
                            </IconButton> */}
                            <IconButton onClick={() => onDelete(each.id)} edge="end" aria-label="delete">
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </>
              )
            })}
          </List>
        </CardContent>
      }
    </Card >
  )
}
