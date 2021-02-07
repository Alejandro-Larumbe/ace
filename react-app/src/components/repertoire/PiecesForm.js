import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '../../Fade';
import { addPiece } from './actions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import AddBook from './AddBook';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { getRepertoire } from './actions';
import SelectBook from '../modularComponents/AutoCompleteFreeSolo';
import QuickAddPiece from '../modularComponents/AutoCompleteFreeSolo';
import { updatePiece } from './actions';

const filter = createFilterOptions();


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
    // alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  }
}));


const PiecesForm = (props) => {
  const {
    open,
    setOpen,
    piece,
    mode,
    setMode,
    books
  } = props

  const instructorId = localStorage.getItem('user_id')
  const [title, setTitle] = useState(mode==='edit' ? piece.title : '');
  const [composer, setComposer] = useState(mode==='edit' ? piece.composer : '');
  const [number, setNumber] = useState(mode==='edit' ? piece.number : '');
  const [book, setBook] = useState('');
  const [errors, setErrors] = useState();
  const dispatch = useDispatch();
  // const types = ["instructors", "adults"]
  // const [value, setValue] = useState(0)
  // const type = types[value]
  // let history = useHistory();
  const classes = useStyles();


  useEffect(() => {
    dispatch(getRepertoire(instructorId))
  }, [dispatch]);

  // if (!props.piecesById) return null

  const onSubmit = async (e) => {
    e.preventDefault();
    let data;
    if (mode === 'edit') {
      data = await dispatch(updatePiece(instructorId, title, composer, number, id, bookId));
    }

    // console.log(instructorId, title, composer, number, bookId)
    // let data = await dispatch(addPiece(instructorId, title, composer, number, bookId));

    if (!data.errors) {
      if (mode === 'edit') {
        setMode('view')
      }
    }
  };



  const updateField = (cb) => (e) => {
    cb(e.target.value);
  };


  return (
    <>
      <form onSubmit={onSubmit}>
        <CardContent>
          {/* <div>
                {errors.map((error) => (
                  <div>{error}</div>
                ))}
              </div> */}
          <TextField
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
          <SelectBook
            options={books}
            value={book}
            setValue={setBook}
            label={'Select Book'}
            type={'book'}
          />
          <TextField
            // variant="outlined"
            margin="normal"
            // fullWidth
            name="number"
            label="Number"
            type="number"
            id="number"
            placeholder="Number"
            value={number}
            onChange={updateField(setNumber)}
          />
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            className={classes.submit}
          >
            Save
          </Button>
        </CardActions>
      </form>
    </>
  );
};

export default PiecesForm;
