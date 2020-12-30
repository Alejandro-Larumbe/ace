import React, { useState } from "react";
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Fade from '../../Fade';
import { Select } from "@material-ui/core";
import { Grid, } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { waitForDomChange } from "@testing-library/react";
import { addTask } from './actions';

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

export default function AddTaskForm({ open, handleClose, id, booksById, piecesById, lessonId }) {
  const [duration, setDuration] = useState('');
  const [frequency, setFrequency] = React.useState(1);
  const [instructions, setInstructions] = useState('');
  const [typeId, setTypeId] = useState(1);
  const [pieceId, setPieceId] = useState('');
  const [bookId, setBookId] = useState('');
  const [isCompleted] = useState(false)
  const classes = useStyles();
  const books = Object.values(booksById)
  const pieces = Object.values(piecesById)
  const dispatch = useDispatch()
  const handleType = e => {
    setTypeId(e.target.value);
  }

  const handleChange = (cb) => (event) => {
    console.log(event.target.value);
    cb(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(duration, frequency, instructions, typeId, lessonId, pieceId, bookId, isCompleted)
    dispatch(addTask(duration, frequency, instructions, typeId, lessonId, pieceId, bookId, isCompleted))
  }

  return (
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
                  <option value={2}>repertoire</option>
                  <option value={3}>etudes</option>
                  <option value={4}>technique</option>
                  <option value={5}>scales</option>
                  <option value={6}>tonalization</option>
                  <option value={7}>ear training</option>
                  <option value={8}>theory</option>
                  <option value={9}>rhythm practice</option>
                  <option value={10}>metronome practice</option>
                </Select>
                <TextField fullWidth id="time" inputProps={inputPropsTime} label="How long?" onChange={handleChange(setDuration)} />
                <FormLabel component="legend">How many days a week?</FormLabel>
                <RadioGroup row aria-label="frequency" name="frequency" value={frequency} onClick={handleChange(setFrequency)}>
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
                      <option value={each.id}>{each.title}</option>
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
                      <option value={each.id}>{each.title}</option>
                    )
                  })}
                </Select>
                <CssBaseline />
                <InputLabel htmlFor="instructions">Instructions</InputLabel>
                  <TextareaAutosize
                    fullWidth
                    id="instructions"
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
      </Fade>
    </Modal>
  )

}
