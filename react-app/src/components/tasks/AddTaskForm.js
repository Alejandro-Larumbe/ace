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
import { Select } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { addTask, getLessonsTasks } from './actions';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';


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
  const [duration, setDuration] = useState(0);
  const [frequency, setFrequency] = React.useState(1);
  const [instructions, setInstructions] = useState();
  const [typeId, setTypeId] = useState(2);
  const [pieceId, setPieceId] = useState();
  const [bookId, setBookId] = useState('');
  const [isCompleted] = useState(false)
  const classes = useStyles();
  const books = Object.values(booksById)
  const pieces = Object.values(piecesById)
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);


  const handleType = e => {
    setTypeId(e.target.value);
  }

  const handleChange = (cb) => (event) => {
    cb(event.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault()
    // console.log(duration, frequency, instructions, typeId, lessonId, pieceId, bookId, isCompleted)
    const task = dispatch(addTask(duration, frequency, instructions, typeId, lessonId, pieceId, bookId, isCompleted))
    if (!task.errors) {
      dispatch(getLessonsTasks(instructorId, date.getFullYear(), date.getMonth(), date.getDate()))
      handleCloseModal()
    }
  }

  const handleClose = () => {
    setDialogValue({
      title: '',
      year: '',
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    title: '',
    year: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      title: dialogValue.title,
      year: parseInt(dialogValue.year, 10),
    });

    handleClose();
  };

  console.log('bookId', bookId)


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
                  label='Task Type'
                  id='task-type'
                  value={typeId}
                  onChange={handleType}
                  fullWidth
                  className={classes.input}
                >
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



                <Autocomplete
                  value={bookId}
                  fullWidth
                  className={classes.input}
                  onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                      // timeout to avoid instant validation of the dialog's form.
                      setTimeout(() => {
                        toggleOpen(true);
                        setDialogValue({
                          title: newValue,
                          year: '',
                        });
                      });
                    } else if (newValue && newValue.inputValue) {
                      toggleOpen(true);
                      setDialogValue({
                        title: newValue.inputValue,
                        year: '',
                      });
                    } else {
                      setBookId(newValue);
                    }
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    if (params.inputValue !== '') {
                      filtered.push({
                        inputValue: params.inputValue,
                        title: `Add "${params.inputValue}"`,
                      });
                    }

                    return filtered;
                  }}
                  id="free-solo-dialog-demo"
                  options={books}
                  getOptionLabel={(option) => {
                    // e.g value selected with enter, right from the input
                    if (typeof option === 'string') {
                      return option;
                    }
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    return option.title;
                  }}
                  selectOnFocus
                  // fullWidth
                  clearOnBlur
                  handleHomeEndKeys
                  renderOption={(option) => option.title}
                  // style={{ width: 300 }}
                  fullWidth
                  freeSolo
                  renderInput={(params) => (
                    <TextField {...params} label="book"  />
                  )}
                />









                <InputLabel className={classes.input} id="book">Choose a Book</InputLabel>
                <Select
                  label='book'
                  id='book'
                  value={bookId}
                  onChange={handleChange(setBookId)}
                  fullWidth
                >
                  {books.map(each => {
                    return (
                      <option key={each.id} value={each.id}>{each.title}</option>
                    )
                  })}
                </Select>
                <InputLabel className={classes.input} id="piece">Piece</InputLabel>
                <Select
                  label='piece'
                  id='piece'
                  value={pieceId}
                  onChange={handleChange(setPieceId)}
                  fullWidth
                >
                  {pieces.map(each => {
                    return (
                      <option key={each.id} value={each.id}>{each.title}</option>
                    )
                  })}
                </Select>
                <CssBaseline />
                <TextField className={classes.input} fullWidth id="time" inputProps={inputPropsTime} label="How long?" onChange={handleChange(setDuration)} />
                <FormLabel className={classes.input} component="legend">How many days a week?</FormLabel>
                <RadioGroup row aria-label="frequency" name="frequency" value={frequency} onClick={handleChange(setFrequency)}>
                  <FormControlLabel value={'1'} control={<Radio />} label="1" />
                  <FormControlLabel value={'2'} control={<Radio />} label="2" />
                  <FormControlLabel value={'3'} control={<Radio />} label="3" />
                  <FormControlLabel value={'4'} control={<Radio />} label="4" />
                  <FormControlLabel value={'5'} control={<Radio />} label="5" />
                  <FormControlLabel value={'6'} control={<Radio />} label="6" />
                  <FormControlLabel value={'7'} control={<Radio />} label="7" />
                </RadioGroup>
                {/* </Grid>
                <Grid item xs={6}> */}
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

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Add a new film</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any film in our list? Please, add it!
        </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.title}
              onChange={(event) => setDialogValue({ ...dialogValue, title: event.target.value })}
              label="title"
              type="text"
            />
            <TextField
              margin="dense"
              id="name"
              value={dialogValue.year}
              onChange={(event) => setDialogValue({ ...dialogValue, year: event.target.value })}
              label="year"
              type="number"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
        </Button>
            <Button type="submit" color="primary">
              Add
        </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )

}
