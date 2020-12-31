import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';


import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '../../Fade';
// import { updatePiece } from './actions';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    height: 'auto',
    display: 'flex',
    maxWidth: '50vh',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2),
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(0, 0, 0),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));


const PiecesUpdate = ({ open, handleClose, piece }) => {
  const instructorId = localStorage.getItem('user_id')
  const { title: previousTitle, composer: previousComposer, number: previousNumber, id } = piece
  const [title, setTitle] = useState(previousTitle);
  const [composer, setComposer] = useState(previousComposer ? previousComposer: '');
  const [number, setNumber] = useState(previousNumber ? previousNumber : '');
  const [bookId, setBookId] = useState();
  const [errors, setErrors] =useState();
  const dispatch = useDispatch();
  // const types = ["instructors", "adults"]
  // const [value, setValue] = useState(0)
  // const type = types[value]
  // let history = useHistory();
  const classes = useStyles();


  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(instructorId, title, composer, number, bookId)
    // let data = await dispatch(updatePiece(instructorId, title, composer, number, id, bookId));

    // if (!data.errors) {
    //   handleClose()


    // } else {
    // }
  };


  const updateField = (cb) => (e) => {
    cb(e.target.value);
  };


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
          <Paper className={classes.paper}>
            <CssBaseline />
            <Typography component="h1" variant="h5">
              Add Repertoire
            </Typography>
            {/* <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleType}
              aria-label="disabled tabs example"
            >
              <Tab label="Book" />
              <Tab label="Piece" />
            </Tabs> */}
            <form onSubmit={onSubmit}>
              {/* <div>
                {errors.map((error) => (
                  <div>{error}</div>
                ))}
              </div> */}
              <TextField
                // variant="outlined"
                margin="normal"
                required
                fullWidth
                label={'Title'}
                name="title"
                type="text"
                placeholder="Title"
                value={title}
                autoFocus
                onChange={updateField(setTitle)}
              />
              <TextField
                // variant="outlined"
                margin="normal"
                fullWidth
                name="composer"
                label="Composer"
                type="text"
                id="composer"
                placeholder="Composer"
                value={composer}
                onChange={updateField(setComposer)}
              />
              <TextField
                // variant="outlined"
                margin="normal"
                fullWidth
                name="number"
                label="Number"
                type="text"
                id="number"
                placeholder="Number"
                value={number}
                onChange={updateField(setNumber)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add Piece
              </Button>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}
                // onClick={onDemoInstructor}
              >
                Cancel
              </Button>
            </form>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default PiecesUpdate;
