import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
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
import FilledInput from '@material-ui/core/FilledInput';

import { Select } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputAdornment from '@material-ui/core/InputAdornment';

import { addTask, getLessonsTasks } from './actions';
import CloseIcon from '@material-ui/icons/Close';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import AddBook from '../repertoire/AddBook';
import FreeSolo from './FreeSolo'
import SelectBook from './FreeSoloCreateOptionDialog';

const filter = createFilterOptions();



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
  input: {
    marginottom: '15px'
  },
  textArea: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    color: '#fff',
    placeholder: {
      color: '#fff'
    }

  },
}))

export default function AddTaskForm({ open: openModal, handleClose: handleCloseModal, id, booksById, piecesById, lessonId }) {
  const date = useSelector(state => state.tasks.date)
  const instructorId = localStorage.getItem('user_id')
  const [duration, setDuration] = useState(null);
  const [frequency, setFrequency] = React.useState(1);
  const [instructions, setInstructions] = useState();
  const [typeId, setTypeId] = useState(1);
  const [pieceId, setPieceId] = useState();
  const [book, setBook] = useState(null);
  const [isCompleted] = useState(false)
  const classes = useStyles();
  const books = Object.values(booksById)
  const pieces = Object.values(piecesById)
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(null);
  const [openBook, toggleOpenBook] = React.useState(false);
  const [errors, setErrors] = useState([])

  const [dialogValue, setDialogValue] = useState({
    title: '',
    author: '',
  });



  const handleType = e => {
    setTypeId(e.target.value);
  }

  const handleChange = (cb) => (event) => {
    cb(event.target.value);
  };
  const handleRadioChange = (event) => {
    if(event.target.value === frequency) {
      setFrequency(null)
    } else {
      setFrequency(event.target.value);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log(duration)
    // console.log(duration, frequency, instructions, typeId, lessonId, pieceId, book.id, isCompleted)
    const task = dispatch(addTask(+duration, +frequency, instructions, +typeId, +lessonId, +pieceId, book ? +book.id : null, isCompleted))
    if (!task.errors) {
      dispatch(getLessonsTasks(instructorId, date.getFullYear(), date.getMonth(), date.getDate()))
      handleCloseModal()
    }
  }

  const handleCloseBook = () => {
    setDialogValue({
      title: '',
      author: '',
    });

    toggleOpenBook(false);
  };



  const handleSubmitBook = (event) => {
    event.preventDefault();
    setValue({
      title: dialogValue.title,
      year: parseInt(dialogValue.year, 10),
    });

    handleCloseBook();
  };



  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Card className={classes.paper}>
            <CssBaseline />
            <CardHeader
              title={'Add Task'}
              action={
                <>
                  <IconButton onClick={handleCloseModal} aria-label="add to favorites">
                    <CloseIcon />
                  </IconButton>
                </>
              }
            />

            <form onSubmit={onSubmitForm}>
              <CardContent>
              <InputLabel id="task-type">Task Type</InputLabel>
                <Select
                  native
                  label='Task Type'
                  id='task-type'
                  value={typeId}
                  onChange={handleType}
                  fullWidth
                  className={classes.input}
                >
                  {/* <option value="" /> */}
                  <option value={1}>Repertoire</option>
                  <option value={2}>Etudes</option>
                  <option value={3}>Technique</option>
                  <option value={4}>Scales</option>
                  <option value={5}>Tonalization</option>
                  <option value={6}>Ear Training</option>
                  <option value={7}>Theory</option>
                  <option value={8}>Rhythm Practice</option>
                  <option value={9}>Metronome Practice</option>
                </Select>

                <SelectBook
                options={books}
                toggleOpen={toggleOpenBook}
                setDialogValue={setDialogValue}
                value={book}
                setValue={setBook}
                fullWidth={true}
                label={'Select Book'}
                />

                <TextField
                  className={classes.input}
                  fullWidth
                  id="time"
                  type="number"
                  inputProps={inputPropsTime}
                  label="How many minutes?"
                  onChange={handleChange(setDuration)}
                  // endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
                />
                <FormLabel className={classes.input} component="legend">How many days a week?</FormLabel>
                <RadioGroup row aria-label="frequency" name="frequency" value={frequency} onClick={handleRadioChange}>
                  <FormControlLabel value={'1'} control={<Radio />} label="1" />
                  <FormControlLabel value={'2'} control={<Radio />} label="2" />
                  <FormControlLabel value={'3'} control={<Radio />} label="3" />
                  <FormControlLabel value={'4'} control={<Radio />} label="4" />
                  <FormControlLabel value={'5'} control={<Radio />} label="5" />
                  <FormControlLabel value={'6'} control={<Radio />} label="6" />
                  <FormControlLabel value={'7'} control={<Radio />} label="7" />
                </RadioGroup>

                <InputLabel className={classes.input} htmlFor="instructions">Instructions</InputLabel>
                <TextareaAutosize
                  id="instructions"
                  width="100hv"
                  rowsMin={10}
                  rowsMax={20}
                  className={classes.textArea}
                  aria-label="instructions"
                  onChange={handleChange(setInstructions)}
                />
              </CardContent>
              <CardActions>
                <Button type="submit" color="primary">
                  save
                </Button>
              </CardActions>
            </form>
          </Card>
        </Fade>
      </Modal>

      <AddBook
        open={openBook}
        handleClose={handleCloseBook}
        dialogValue={dialogValue}
        setDialogValue={setDialogValue}
        setBook={setBook}
      />


    </>
  )

}
