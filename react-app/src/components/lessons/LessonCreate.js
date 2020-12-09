import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import removeTimeZone from '../../services/dateUtil'
import fetchNames from './services'
import { ListItemText } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

import createLesson from './actions'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: 'auto',
    marginTop: 100,
    maxWidth: 500,
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



const LessonCreate = () => {

  const [rate, setRate] = useState(60);
  const [startDate, setStartDate] = useState(new Date('2014-08-18T12:00:00'));
  const [endDate, setEndDate] = useState(new Date('2014-08-18T12:00:00'));
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState('');
  const [open, setOpen] = React.useState(false);

  const history = useHistory();
  const { id } = useParams()

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const names = await fetchNames(id);
      await setStudents(names)
    })();
  }, [])


  const handleChange = (event) => {
    setStudent(event.target.value);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setEndDate(date);
  };

  const handleStartTimeChange = (date) => {
    setStartDate(date);
  }

  const handleEndTimeChange = (date) => {
    setEndDate(date);
  }

  const onCreate = (e) => {
    e.preventDefault()
    // console.log(endDate, startDate)

  }
  const onSubmit = () => {
    e.preventDefault()

  }


  return (
    <>
      <h1 className={classes.root} >lesson create</h1>
      <form onSubmit={onCreate}>
        <div className={classes.root}>
          <Paper variant="outlined" >
            <List component="nav" className={classes.list} aria-label="mailbox folders">
              <div className={classes.container}>
                <ListItem button>
                  <InputLabel style={{width: '75%'}} id="select-student">Select Student:</InputLabel>
                  <Select
                    labelId="select-student"
                    label="Select Student"
                    fullWidth
                    id="select-student"
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    value={student}
                    onChange={handleChange}
                  >
                    {students.map(student => {
                      return (
                        <MenuItem value={student.id}>{student.full_name}</MenuItem>
                      )
                    })}
                  </Select>
                </ListItem>
                <ListItem button>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Select Date"
                    value={startDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Select Start Time"
                    value={startDate}
                    minutesStep={5}
                    onChange={handleStartTimeChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                  />
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Select End Time"
                    value={endDate}
                    minutesStep={5}
                    onChange={handleEndTimeChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                  />
                </ListItem>
                <ListItem button>
                </ListItem>
              </div>
              <Divider light />
              <Button onClick={() => history.goBack()} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={onSubmit} color="primary">
                Create Lesson
              </Button>
            </List>
          </Paper>
        </div>
      </form>
    </>
  );
}

export default LessonCreate;
