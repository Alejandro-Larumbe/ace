import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { CardContent, CardActions } from '@material-ui/core';

// import AddBook from './AddBook';
import { getRepertoire } from './actions';
import SelectBook from '../materialUIBundles/AutoCompleteFreeSolo';
import QuickAddPiece from '../materialUIBundles/AutoCompleteFreeSolo';
import { updatePiece, addPiece } from './actions';
import { ModeCommentTwoTone } from "@material-ui/icons";


const PiecesForm = (props) => {
  const {
    open,
    setOpen,
    piece,
    mode,
    setMode,
    booksById,
    books,
    setSuccessMessage,
    setOpenSnackbar
  } = props

  // pass in initial vales as prop
  const [instructorId] = useState(localStorage.getItem('user_id'))
  const [title, setTitle] = useState(mode === 'edit' ? piece.title : '');
  const [composer, setComposer] = useState(piece?.composer);
  let [number, setNumber] = useState(piece?.number);

  // optional chaining

  // nullish coallescent
  // pieces?.title ?? ''

  const [pieceId] = useState(pieces?.title);
  // const [bookId] = useState(mode==='edit' ? piece.bookId : '');
  const [book, setBook] = useState((mode === 'edit' && piece.bookId) ? booksById[piece.bookId] : '');
  const [errors, setErrors] = useState();
  const dispatch = useDispatch();
  // const types = ["instructors", "adults"]
  // const [value, setValue] = useState(0)
  // const type = types[value]
  // let history = useHistory();

  useEffect(() => {
    dispatch(getRepertoire(instructorId))
  }, [dispatch]);

  // if (!props.piecesById) return null
  // console.log(props.booksById)
  const onSubmit = async (e) => {
    e.preventDefault();
    let data;
    if(number === '') number = null
    const bookId = book ? book.id : null

    if (mode === 'edit') {
    //   // console.log('node', mode)
      data = await dispatch(updatePiece(+pieceId, title, composer, +number, +bookId, +instructorId));
      //   console.log('---------', data)
      if (!data.errors) {
        setSuccessMessage('piece updated successfully')
        setMode('view')
        setOpenSnackbar(true)
      }
    }
    if (mode === 'create') {
      data = await dispatch(addPiece(title, composer, +number, +instructorId));
      if (!data.errors) {
        setSuccessMessage('piece created successfully')
        setOpen(false)
        setOpenSnackbar(true)
      }
    }

    // // console.log(instructorId, title, composer, number, bookId)
    // // let data = await dispatch(addPiece(instructorId, title, composer, number, bookId));

    // console.log(data)
    // if (!data.errors) {
    //   if (mode === 'edit') {
    //   }
    // }
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
            fullWidth
          />
          <TextField
            // variant="outlined"
            margin="normal"
            fullWidth
            name="number"
            label="Number"
            type="number"
            id="number"
            placeholder="Number"
            value={number}
            InputProps={{
              inputProps: {
                min: 1
              }
            }}
            onChange={updateField(setNumber)}
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          // className={classes.submit}
          >
            Save
          </Button>
        </CardActions>
      </form>
    </>
  );
};

export default PiecesForm;
