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
import LessonCreate from './LessonCreate';


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



const Lesson = ({ open, handleClose }) => {
  const [errors, setErrors] = useState([]);
  const [startTime, setStartTime] = useState(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
  const [endTime, setEndTime] = useState(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [openSelect, setOpenSelect] = React.useState(false);
  const dispatch = useDispatch();

  const id = localStorage.getItem('user_id')

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
          <div className={classes.root}>
            <div className={errors}>
              {errors && errors.map(error => {
                return <p>{error}</p>
              })}
            </div>
            <Paper variant="outlined" >
              <div className={classes.container}>
                <LessonCreate
                  setOpenSelect={setOpenSelect}
                  studentId={studentId}
                  handleChange={handleChange}
                  students={students}
                  startTime={startTime}
                  endTime={endTime}
                  handleClose={handleClose}
                  handleDate={handleDate}
                />
              </div>
            </Paper>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default Lesson;
