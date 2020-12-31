import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { login } from "../../store/actions/authActions";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '../../Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    height: 'auto',
    display: 'flex',
    maxWidth: '34vh',
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
    margin: theme.spacing(3, 0, 0),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));


const LoginForm = ({ authenticated, setAuthenticated, open, handleOpen, handleClose }) => {
  const id = useSelector(state => state.user.id || null)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const types = ["instructors", "adults"]
  const [value, setValue] = useState(0)
  const type = types[value]
  let history = useHistory();
  const classes = useStyles();


  const onDemoInstructor = async (e) => {
    e.preventDefault();
    let user = await dispatch(login('demo@instructor.com', 'password', 'instructors'));
    if (!user.errors) {
      setAuthenticated(true);
      history.push(`/instructors/students`)
    } else {
      setErrors(user.errors);
    }
  };

  const onDemoStudent = async (e) => {
    e.preventDefault();
    let user = await dispatch(login('demo@student.com', 'password', 'adults'));
    if (!user.errors) {
      setAuthenticated(true);
      history.push(`/students/schedule`)
    } else {
      setErrors(user.errors);
    }
  };
  const onLogin = async (e) => {
    e.preventDefault();

    let user = await dispatch(login(email, password, type));

    if (!user.errors) {
      setAuthenticated(true);
      history.push(`/${type}`)
    } else {
      setErrors(user.errors);
    }
  };

  const handleType = (e, newValue) => {
    setValue(newValue)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
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
              Sign in
            </Typography>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleType}
              aria-label="disabled tabs example"
            >
              <Tab label="Instructor" />
              <Tab label="Student" />
            </Tabs>
            <form onSubmit={onLogin}>
              <div>
                {errors.map((error) => (
                  <div>{error}</div>
                ))}
              </div>
              <TextField
                // variant="outlined"
                margin="normal"
                required
                fullWidth
                label={'Email'}
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                autoFocus
                onChange={updateEmail}
              />
              <TextField
                // variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={updatePassword}
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={onDemoInstructor}
              >
                Demo Instructor
              </Button>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={onDemoStudent}

              >
                Demo Student
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
              <input
                style={{ visibility: 'hidden' }}
                type="text"
                name="type"
                value={type}
                required={true}
                readOnly
              ></input>
            </form>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default LoginForm;
