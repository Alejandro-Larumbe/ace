import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import { createLesson } from './actions'
import { format } from 'date-fns';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';


const LessonForm = (props) => {
  const [errors, setErrors] = useState([]);
  const {
    startTime,
    endTime,
    students,
    studentId,
    openSelect,
    setOpenSelect,
    handleChange,
    handleClose,
    handleDate,
    mode
  } = props

  const dispatch = useDispatch();
  const id = localStorage.getItem('user_id')



  const onSubmit = async (e) => {
    e.preventDefault()
    if (startTime > endTime) {
      setErrors(['end time must be after starting time'])
      // return errors;
    } else if (startTime < format(new Date(), 'yyyy-MM-dd HH:mm:ss')) {
      setErrors(['start time has passed'])
    } else if (startTime === endTime) {
      setErrors(['start time must be different to end time'])
    } else {
      let lesson = new FormData();
      lesson.append('start_time', startTime);
      lesson.append('end_time', endTime);
      lesson.append('student_id', parseInt(studentId));
      lesson = await dispatch(createLesson(lesson, parseInt(id)))
      if (!lesson.errors) {
        handleClose()
      } else {
        setErrors([lesson.errors])
      }
    }
  }

  return (
    <>
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

export default LessonForm;
