import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import { createLesson, editLesson } from './actions'
import { format, getMonth, getYear } from 'date-fns';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


// format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
const dateForCreate = (timeNow, selectedDate) => {
  return format(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), timeNow.getHours(), timeNow.getMinutes()), 'yyyy-MM-dd HH:mm:ss')
}


const LessonForm = (props) => {
  const {
    lesson,
    students,
    handleClose,
    mode,
    selectedDate,
  } = props

  const [timeNow] = useState(new Date())
  const [openSelect, setOpenSelect] = useState(false);
  const [errors, setErrors] = useState([]);
  const [startTime, setStartTime] = useState(
    mode === 'edit'
      ? lesson.startTime
      : dateForCreate(timeNow, selectedDate)
  )
  const [endTime, setEndTime] = useState(
    mode === 'edit'
      ? lesson.endTime
      : dateForCreate(timeNow, selectedDate)
  )
  const [studentId, setStudentId] = useState(
    mode === 'edit'
      ? lesson.studentId
      : ''
  )



  const dispatch = useDispatch();
  const id = localStorage.getItem('user_id')

  const handleChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleDate = (value) => (date) => {
    date = format(date, 'yyyy-MM-dd HH:mm:ss')
    if (value === "date") {
      setStartTime(date);
      setEndTime(date);
    }
    value === 'startTime' && setStartTime(date)
    value === 'endTime' && setEndTime(date)

  }


  const onSubmit = async (e) => {

    e.preventDefault()

    if (startTime > endTime) {
      setErrors(['end time must be after starting time'])
      // return errors;
    } else if (startTime === endTime) {
      setErrors(['start time must be different to end time'])
    } else {
      let newLesson = new FormData();
      newLesson.append('start_time', startTime);
      newLesson.append('end_time', endTime);
      newLesson.append('student_id', parseInt(studentId));
      lesson && newLesson.append('lesson_id', parseInt(lesson.id));
      newLesson = (
        mode === 'create' ? await dispatch(createLesson(newLesson, parseInt(id)))
        : await dispatch(editLesson(newLesson, parseInt(id)))
      )

      if (!newLesson.errors) {
        // await dispatch(getMonthData(id, getYear(currentDate), getMonth(currentDate)))
        handleClose()
      } else {
        setErrors([newLesson.errors])
      }
    }
  }

  return (
    <>
      <div className={errors}>
        {errors && errors.map(error => {
          return <p>{error}</p>
        })}
      </div>
      <CardHeader
        title={
          mode === 'create'
            ? 'Schedule Lesson'
            : 'Update Lesson'
        }
        action={
          <>
            <IconButton onClick={handleClose} aria-label="add to favorites">
              <CloseIcon />
            </IconButton>
          </>
        }
      />
        <form onSubmit={onSubmit}>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <InputLabel style={{ width: '75%' }} id="select-student">Select Student:</InputLabel>
              <Select
                labelId="select-student"
                label="Select Student"
                fullWidth
                id="select-student"
                open={openSelect}
                required
                onClose={() => setOpenSelect(false)}
                onOpen={() => setOpenSelect(true)}
                value={studentId}
                onChange={handleChange}
              >
                {students.map(student => {
                  return (
                    <MenuItem key={student.id} value={student.id}>{student.full_name}</MenuItem>
                  )
                })}
              </Select>
            </ListItem>
            <ListItem button>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                // format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Select Date"
                value={startTime}
                onChange={handleDate('date')}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                // format="MM/dd/yyyy"
                label="Select Start Time"
                value={startTime}
                minutesStep={5}
                onChange={handleDate('startTime')}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                // format="MM/dd/yyyy"
                label="Select End Time"
                value={endTime}
                minutesStep={5}
                onChange={handleDate("endTime")}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </ListItem>
            <ListItem button>
            </ListItem>
          </List>
          {/* <Divider light /> */}
          <CardActions>
            <Button type="submit" color="primary">
              save
        </Button>
          </CardActions>
        </form>
    </>
  );
}

const LessonFormContainer = (props) => {
  const selectedDate = useSelector(state => state.schedule.selectedDate)
  const id = localStorage.getItem('user_id')

  return (
    <LessonForm
      {...props}
      // students={students}
      selectedDate={new Date(selectedDate)}
    />
  )
}


export default LessonFormContainer;
