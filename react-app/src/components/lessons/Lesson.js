import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Backdrop from '@material-ui/core/Backdrop';
import { fetchNames } from './services'
import { Card } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Fade from '../../Fade';
import LessonView from './LessonView';
import LessonForm from './LessonForm';



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
  const { mode } = props
  const [students, setStudents] = useState([]);
  const dispatch = useDispatch();
  const id = localStorage.getItem('user_id')

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const names = await fetchNames(id);
      await setStudents(names)
    })();

  }, [])


  if (!students) return null

  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Card className={classes.root}  >
            {
              mode === 'view' &&
              <LessonView {...props} />
            }
            {
              (mode === 'edit' || mode === 'create') &&
              <LessonForm
                {...props} students={students}
              />
            }

          </Card>
        </Fade>
      </Modal>
    </>
  );
}


const LessonContainer = (props) => {
  const lessonId = useSelector(state => state.schedule.lessonId)
  const mode = useSelector(state => state.ui.calendarLessonView)
  const lessons = useSelector(state => state.schedule.byId)


  if (!mode) return null

  return (
    <Lesson
      {...props}
      mode={mode}
      lesson={lessons[lessonId]}
    />
  )

}


export default LessonContainer;
