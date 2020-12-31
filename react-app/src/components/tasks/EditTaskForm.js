import React, { useState } from "react";
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Fade from '../../Fade';
import { Select } from "@material-ui/core";
import { Grid, } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { updateTask, getLessonsTasks } from './actions';

const inputPropsTime = {
  type: "number",
  min: 1,
};

const inputPropsText = {
  type: 'textarea',
  placeholder: 'instructions',
  rows: "10",
  rowsMin: 10
}

const useStyles = makeStyles((theme) => ({
  modal: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: '22vh',
    maxWidth: 600,
    margin: 'auto',
    // position: 'relative'
  },
  paper: {
    height: 'auto',
    // display: 'flex',
    // maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2),
    flexDirection: 'column',
    alignItems: 'center',
  },
  textArea: {
    width: '100%',
    backgroundColor:theme.palette.background.paper,
    color: '#fff',
    placeholder: {
      color: '#fff'
    }

  },
}))

export default function EditTaskForm({ open, handleClose, booksById, piecesById, lesson, i=1 }) {
  const date = useSelector(state => state.tasks.date)
  const instructorId = localStorage.getItem('user_id')
  const { id, duration: oldDuration, frequency: oldFrequency, instructions: oldInstructions, typeId : oldTypeid,
    pieceId: oldPieceId, bookId : oldBookId,  } = lesson.tasks[i]

  const [duration, setDuration] = useState(oldDuration ? oldDuration : '');
  const [frequency, setFrequency] = React.useState(oldFrequency.toString());
  const [instructions, setInstructions] = useState(oldInstructions);
  const [typeId, setTypeId] = useState(oldTypeid);
  const [pieceId, setPieceId] = useState(oldBookId);
  const [bookId, setBookId] = useState(oldBookId);
  const [isCompleted] = useState(false)
  const classes = useStyles();
  const books = Object.values(booksById)
  const pieces = Object.values(piecesById)
  const dispatch = useDispatch()
  const handleType = e => {
    setTypeId(e.target.value);
  }

  const handleChange = (cb) => (event) => {
    cb(event.target.value);
  };

  const onSubmit = (e) => async(dispatch) => {
    e.preventDefault()
    console.log(parseInt(duration), parseInt(frequency), instructions, typeId, lesson.id, pieceId, bookId, isCompleted, id)
    const task = await dispatch(duration, frequency , instructions, typeId, lesson.id, pieceId, bookId, isCompleted, id)
    if (!task.errors) {
      console.log(task)
      await dispatch(getLessonsTasks(instructorId, date.getFullYear(), date.getMonth(), date.getDate()))
      handleClose()
    }
  }

  return (
    // <Modal
    //   aria-labelledby="spring-modal-title"
    //   aria-describedby="spring-modal-description"
    //   className={classes.modal}
    //   open={open}
    //   onClose={handleClose}
    //   closeAfterTransition
    //   BackdropComponent={Backdrop}
    //   BackdropProps={{
    //     timeout: 500,
    //   }}
    // >
    //   <Fade in={open}>
        <Paper className={classes.paper}>
          <CssBaseline />
          <Typography component="h1" variant="h5">
            Add Task
            </Typography>

          <form onSubmit={onSubmit}>
            <Grid container>
              <Grid item xs={6}>
                <InputLabel id="task-type">Task Type</InputLabel>
                <Select
                  label='Task Type'
                  id='task-type'
                  value={typeId}
                  onChange={handleType}
                  fullWidth
                >
                  <option value={2}>Repertoire</option>
                  <option value={3}>Etudes</option>
                  <option value={4}>Technique</option>
                  <option value={5}>Scales</option>
                  <option value={6}>Tonalization</option>
                  <option value={7}>Ear Training</option>
                  <option value={8}>Theory</option>
                  <option value={9}>Rhythm Practice</option>
                  <option value={10}>Metronome Practice</option>
                </Select>
                <TextField value={duration} fullWidth id="time" inputProps={inputPropsTime} label="How long?" onChange={handleChange(setDuration)} />
                <FormLabel component="legend">How many days a week?</FormLabel>
                <RadioGroup row aria-label="frequency" name="frequency" value={frequency} onClick={handleChange(setFrequency)}>
                  <FormControlLabel value={''} control={<Radio />} label="none" />
                  <FormControlLabel value={'1'} control={<Radio />} label="1" />
                  <FormControlLabel value={'2'} control={<Radio />} label="2" />
                  <FormControlLabel value={'3'} control={<Radio />} label="3" />
                  <FormControlLabel value={'4'} control={<Radio />} label="4" />
                  <FormControlLabel value={'5'} control={<Radio />} label="5" />
                  <FormControlLabel value={'6'} control={<Radio />} label="6" />
                  <FormControlLabel value={'7'} control={<Radio />} label="7" />
                </RadioGroup>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                add task
              </Button>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={() => handleClose()}
              >
                cancel
              </Button>
                </Grid>
                <Grid item xs={6}>
                <InputLabel id="book">Choose a Book</InputLabel>
                <Select
                  label='book'
                  id='book'
                  value={bookId}
                  onChange={handleChange(setBookId)}
                  fullWidth
                >
                   { books.map(each => {
                    return (
                      <option key={each.id} value={each.id}>{each.title}</option>
                    )
                  })}
                </Select>
                <InputLabel id="piece">Piece</InputLabel>
                <Select
                  label='piece'
                  id='piece'
                  value={pieceId}
                  onChange={handleChange(setPieceId)}
                  fullWidth
                >
                     { pieces.map(each => {
                    return (
                      <option key={each.id} value={each.id}>{each.title}</option>
                    )
                  })}
                </Select>
                <CssBaseline />
                <InputLabel htmlFor="instructions">Instructions</InputLabel>
                  <TextareaAutosize
                    id="instructions"
                    value={instructions}
                    width="100hv"
                    rowsMin={10}
                    rowsMax={20}
                    className={classes.textArea}
                    aria-label="instructions"
                    onChange={handleChange(setInstructions)}
                  />
              </Grid>
            </Grid>
          </form>
        </Paper>
    //   </Fade>
    // </Modal>
  )

}
