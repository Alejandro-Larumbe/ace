import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Lesson from './Lesson';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { format, addDays, subDays } from 'date-fns';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { setTaskDate } from './actions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: 'auto',
    marginBottom: 20,
    // border: '1px solid white',
    // flexGrow: 1,
    // maxWidth: 2000,
    // margin: 'auto',
    // width: '77%',
    // position: 'relative'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: '10px',
  }
}))



export default function Tasks( props ) {

  // const { byId } = props.tasks
  const { booksById, piecesById, date, byId} = props
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [lessonId, setLessonId] = useState('')
  const [taskId, setTaskId] = useState('')
  // const [lessons] = useState(Object.values(byId))
  const [currentId, setCurrentId] = useState()
  const [i, setI] = useState('')

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
  }, [booksById, byId, dispatch])

  // if (!byId) return null

  const dateHandler = (value) => {
    if (value === 'next') {
      dispatch(setTaskDate(addDays(date, 1)))
    } else if (value === 'prev') {
      dispatch(setTaskDate(subDays(date, 1)))
    }
  }


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  return (
    <>
      {/* <EditTaskForm
        open={openEdit}
        handleClose={handleCloseEdit}
        lessonId={lessonId}
        task={byId[taskId]}
        // booksById={booksById}
        // piecesById={piecesById}
        // tasks={byId[16]['tasks']}
        // i={i}
      /> */}
      <AddTaskForm
        open={open}
        handleClose={handleClose}
        booksById={booksById}
        piecesById={piecesById}
        lessonId={lessonId}
      />
      <div className={classes.root}>

        <div className={classes.title}>
            <Typography variant={'h3'} >
              <IconButton onClick={() => dateHandler('prev')}>
                <ArrowBackIosIcon className={classes.icons} />
              </IconButton>
              <IconButton onClick={() => dateHandler('next')}>
                <ArrowForwardIosIcon className={classes.icons} />
              </IconButton>
              {format((date), 'PP')}
            </Typography>
          <div>
            {format((date), 'PP') !== format((new Date()), 'PP') &&
              <Button onClick={() => dispatch(setTaskDate(new Date()))}>Today</Button>
            }
          </div>
        </div>
        {Object.values(byId).length > 0 ?
          Object.values(byId).map((each, i) => {
            // setI(i)
            return <Lesson setCurrentId={setCurrentId} key={each.id} date={props.date} lesson={each} setLessonId={setLessonId} setCurrentId={setCurrentId} handleOpen={handleOpen } handleOpenEdit={handleOpenEdit } />
          })
          :
          <Typography variant={'h5'} gutterBottom={true}>
            no lessons scheduled
          </Typography>

        }
      </div>
    </>
  )

}
