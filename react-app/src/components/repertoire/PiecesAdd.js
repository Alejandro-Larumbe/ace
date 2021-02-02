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
import AddBook from './AddBook';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { getRepertoire } from './actions';


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


const PiecesAdd = ( props ) => {
  const { open, handleClose, books } = props

  const instructorId = localStorage.getItem('user_id')
  const [title, setTitle] = useState();
  const [composer, setComposer] = useState();
  const [number, setNumber] = useState();
  const [bookId, setBookId] = useState('');
  const [errors, setErrors] = useState();
  const dispatch = useDispatch();
  // const types = ["instructors", "adults"]
  // const [value, setValue] = useState(0)
  // const type = types[value]
  // let history = useHistory();
  const classes = useStyles();
  const [openBookDialog, toggleOpenBookDialog] = useState(false);
  const [dialogValue, setDialogValue] = useState({
    title: '',
    author: '',
  });

  useEffect(() => {
    dispatch(getRepertoire(instructorId))
  }, [dispatch]);

  // if (!props.piecesById) return null

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(instructorId, title, composer, number, bookId)
    let data = await dispatch(addPiece(instructorId, title, composer, number, bookId));

    if (!data.errors) {
      handleClose()
    } else {
    }
  };

  const handleCloseBookDialog = () => {
    // dispatch(getRepertoire(instructorId))

    toggleOpenBookDialog(false);
  };


  const updateField = (cb) => (e) => {
    cb(e.target.value);
  };


  return (
    <>
      <AddBook
        open={openBookDialog}
        toggleOpen={toggleOpenBookDialog}
        handleClose={handleCloseBookDialog}
        dialogValue={dialogValue}
        setDialogValue={setDialogValue}
        setBookId={setBookId}

      />
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        // className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card className={classes.paper}>
            <CssBaseline />
            <CardHeader
              title={'Add Repertoire'}
              action={
                <>
                  <IconButton onClick={handleClose} aria-label="add to favorites">
                    <CloseIcon />
                  </IconButton>
                </>
              }
            />
            <form onSubmit={onSubmit}>
              <CardContent>
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
                // variant="outlined"

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


                <Autocomplete
                  value={dialogValue}
                  fullWidth
                  className={classes.input}
                  onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                      // timeout to avoid instant validation of the dialog's form.
                      setTimeout(() => {
                        toggleOpenBookDialog(true);
                        setDialogValue({
                          title: newValue,
                          author: '',
                        });
                      });
                    } else if (newValue && newValue.inputValue) {
                      toggleOpenBookDialog(true);
                      setDialogValue({
                        title: newValue.inputValue,
                        author: '',
                      });
                    }
                    // else {
                    //   setBookId(newValue);
                    // }
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
                    <TextField {...params} label="book" />
                  )}
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
          </Card>
        </Fade>
      </Modal>
    </>
  );
};

export default PiecesAdd;
