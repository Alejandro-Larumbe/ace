import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import { setLessonView } from '../../store/actions/ui';
import { deleteLesson } from './actions';
import { getMonthData } from '../schedule/actions';
import { format, getMonth, getYear } from 'date-fns';


export default function LessonView(props) {
  const {
    startTime,
    endTime,
    profilePicUrl,
    studentFirstName,
    studentLastName,
    id
  } = props.lesson
  const { handleClose } = props
  let currentDate = useSelector(state => state.schedule.currentDate)

  const dispatch = useDispatch()

  const onDelete = () => {
    dispatch(deleteLesson(id))
    handleClose()
    // dispatch(getMonthData(id, getYear(currentDate), getMonth(currentDate)))
  }

  return (
    <>
      <CardHeader
        title={
          `${studentFirstName} ${studentLastName}`
        }
        action={
          <>
            <IconButton onClick={() => dispatch(setLessonView('edit'))} >
              <EditIcon />
            </IconButton>

            <IconButton onClick={onDelete} aria-label="add to favorites">
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleClose} aria-label="add to favorites">
              <CloseIcon />
            </IconButton>
          </>
        }
      // avatar={
      //   <Avatar src={lesson.profilePicUrl}>
      //   </Avatar>
      // }
      />
      <CardContent>
        <Typography>
          {format(new Date(startTime), "PPP")}
        </Typography>
        <Typography>
          {`${format(new Date(startTime), 'p')} - ${format(new Date(endTime), 'p')}`}
        </Typography>
      </CardContent>
    </>
  )
}
