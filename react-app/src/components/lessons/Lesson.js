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
import { Card, CardActionArea } from '@material-ui/core';
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
import LessonView from './LessonView';
import LessonForm from './LessonForm';

import Avatar from '@material-ui/core/Avatar';
import schedule from '../schedule/reducer';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { setLessonView } from '../../store/actions/ui';




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: 600,
    margin: 'auto',
    // marginTop: 100,
    maxWidth: 700,
    // overflow: 'auto'
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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // overflow: 'auto'

  }
}));



const Lesson = (props) => {
  const {
    open, handleClose, mode, lesson, selectedDate, currentDate
  } = props
  console.log('------------', selectedDate)
  // const [ lesson, setLesson ] = useState()
  const [errors, setErrors] = useState([]);
  // const [selectedDate] = useState(new Date(date))
  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()
  const [studentId, setStudentId] = useState()
  const [students, setStudents] = useState([]);
  const [openSelect, setOpenSelect] = React.useState(false);
  const dispatch = useDispatch();
  const id = localStorage.getItem('user_id')

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const names = await fetchNames(id);
      await setStudents(names)
    })();
    if((mode === 'edit' || mode === 'view') && lesson) {
      setStudentId(lesson.studentId)
      setEndTime(lesson.endTime)
      setStartTime(lesson.startTime)
    }
    if(mode === 'create') {
      setEndTime(format(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds() ), 'yyyy-MM-dd HH:mm:ss'))
      setStartTime(format(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds() ), 'yyyy-MM-dd HH:mm:ss'))
      // setStudentId(null)
    }

  }, [studentId, startTime, selectedDate, endTime, mode])



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
          {/* <h1 className={classes.root} >lesson create</h1> */}
          {/* <div className={classes.root}> */}
          <Card className={classes.root}  >
            <div className={errors}>
              {errors && errors.map(error => {
                return <p>{error}</p>
              })}
            </div>
            <CardHeader

              title={
                mode === 'create'
                  ? 'Schedule Lesson'
                  : mode === 'edit'
                    ? 'Update Lesson'
                    // : null
                    :
                     lesson ? `${lesson.studentFirstName} ${lesson.studentLastName}`
                       : null
              }

              //       avatar={
              //   mode === 'view' &&
              //   <Avatar src={lesson.profilePicUrl}>
              //   </Avatar>
              // }
              action={
                <>
                  {mode === 'view' &&

                    <IconButton onClick={() => dispatch(setLessonView('edit'))} >
                      <EditIcon />
                    </IconButton>
                  }
                  <IconButton onClick={handleClose} aria-label="add to favorites">
                    <CloseIcon />
                  </IconButton>
                </>

              }

            />
            <CardContent>
              {mode === 'view' &&
                <LessonView lesson={lesson} />
              }
            </CardContent>
              {
                (mode === 'edit' || mode === 'create') &&
                <LessonForm
                  setOpenSelect={setOpenSelect}
                  studentId={studentId}
                  handleChange={handleChange}
                  students={students}
                  startTime={startTime}
                  endTime={endTime}
                  handleClose={handleClose}
                  handleDate={handleDate}
                  mode={mode}
                  studentId={studentId}
                />
              }

          </Card>
        </Fade>
      </Modal>
    </>
  );
}


const LessonContainer = (props) => {
  const lessonId = props.lessonId
  const mode = useSelector(state => state.ui.calendarLessonView)
  const lessons = useSelector(state => state.schedule.byId)
  // const [ lesson, setLesson ] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [ currentDate, setCurrentDate ] = useState(new Date())

  useEffect(() => {}, )

  if (!mode ) return null
  // console.log('---------', props.selectedDate)
  return (
    <Lesson
      {...props}
      // lessonId={lessonId}
      mode={mode}
      lesson={lessons[lessonId]}
      currentDate={currentDate}
    />
  )

}


export default LessonContainer;
