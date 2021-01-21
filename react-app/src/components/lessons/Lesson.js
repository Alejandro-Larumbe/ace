import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import removeTimeZone from '../../services/dateUtil'
import { fetchNames } from './services'
import { ListItemText } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { createLesson } from './actions'
import { format } from 'date-fns';
import Modal from '@material-ui/core/Modal';
import Fade from '../../Fade';


const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    margin: 'auto',
    marginTop: 100,
    maxWidth: 700,
  },
  dateContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dateTextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));



const LessonCreate = ({open, handleClose}) => {
  const [errors, setErrors] = useState([]);
  const [startTime, setStartTime] = useState(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
  const [endTime, setEndTime] = useState(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [openSelect, setOpenSelect] = React.useState(false);
  const dispatch = useDispatch();

  const id  = localStorage.getItem('user_id')

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const names = await fetchNames(id);
      await setStudents(names)
    })();
  }, [startTime, studentId, endTime])

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
    } else if (startTime < format(new Date(), 'yyyy-MM-dd HH:mm:ss')) {
      setErrors(['start time has passed'])
    } else if (startTime === endTime) {
      setErrors(['start time must be different to end time'])
    } else {
      let lesson = new FormData();
      lesson.append('start_time', startTime);
      lesson.append('end_time', endTime);
      lesson.append('student_id', parseInt(studentId));
      console.log(startTime, endTime)
      lesson = await dispatch(createLesson(lesson, parseInt(id)))
      // lesson = await dispatch(createLesson(startTime, endTime, studentId, rate, parseInt(id)))
      if (!lesson.errors) {
        // history.push(`/${id}/schedule`)
        handleClose()
      } else {
        console.log(lesson.errors)
        setErrors([lesson.errors])
      }
    }
  }

  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <h1 className={classes.root} >lesson create</h1>
          <form onSubmit={onSubmit}>
            <div className={classes.root}>
              <div className={errors}>
                {errors && errors.map(error => {
                  return <p>{error}</p>
                })}
              </div>
              <Paper variant="outlined" >
                <List component="nav" className={classes.list} aria-label="mailbox folders">
                  <div className={classes.container}>
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
                  </div>
                  <Divider light />
                  <Button onClick={handleClose} color="primary">
                    Cancel
              </Button>
                  <Button type="submit" color="primary">
                    Create Lesson
              </Button>
                </List>
              </Paper>
            </div>
          </form>
        </Fade>
      </Modal>
    </>
  );
}

export default LessonCreate;
