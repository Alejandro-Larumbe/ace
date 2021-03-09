import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// const image = 'url(https://ace-management.s3.us-east-2.amazonaws.com/chuttersnap-Kx4Mm3ZnZBc-unsplash+(2).jpg)';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url("https://ace-management.s3.us-east-2.amazonaws.com/chuttersnap-Kx4Mm3ZnZBc-unsplash+(2).jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // display: 'flex',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(0, 0, 0),
  },
  title: {
    marginTop: '2vh',
    marginLeft: '2vw',
  },
  logo: {
    position: "absolute",
    bottom: 30,
    right: 30,
  }
}));

const SignUpForm = ({ setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const types = ["instructors", "adults"]
  const [value, setValue] = useState(0)
  const type = types[value]
  const instructorId = 1
  let history = useHistory();

  const classes = useStyles();
  const userId = localStorage.getItem("user_id");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      let user = new FormData();
      user.append('first_name', firstName);
      user.append('last_name', lastName);
      user.append('email', email);
      user.append('password', password);
      user.append('type', type);
      user.append('instructor_id', instructorId);

      user = await dispatch(signUp(user));
      console.log(user)
      // if (!user.errors) {
      //   setAuthenticated(true);
      //   history.push(`/${type}/${user.id}/schedule`)
      // } else {
      //   setErrors(user.errors);
      // }
    }
  };

  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={8} className={classes.image} >
          <div className={classes.title}>
            <Typography variant="h3">
              Let's maket it there
        </Typography>
            <Typography color='primary' variant="h2">
              together
        </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <div>
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
            <Typography component="h1" variant="h5">
              Sign Up
          </Typography>
            <form onSubmit={onSignUp}>
              <TextField
                autoFocus
                margin="dense"
                type="text"
                label="first name"
                name="firstName"
                onChange={updateField(setFirstName)}
                value={firstName}
                required={true}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                type="text"
                label="last name"
                name="lastName"
                onChange={updateField(setLastName)}
                value={lastName}
                required={true}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                type="email"
                label="email"
                name="email"
                onChange={updateField(setEmail)}
                value={email}
                required={true}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                label="password"
                type="password"
                name="password"
                onChange={updateField(setPassword)}
                value={password}
                required={true}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                label="repeat password"
                type="password"
                name="repeat_password"
                onChange={updateField(setRepeatPassword)}
                value={repeatPassword}
                required={true}
                fullWidth
              />
              <input
                style={{ visibility: 'hidden' }}
                type="text"
                name="type"
                value={type}
                required={true}
                readOnly
              ></input>
              {
                instructorId
                  ? <input
                    style={{ visibility: 'hidden' }}
                    type="text"
                    name="instructorId"
                    value={instructorId}
                    readOnly
                  ></input>
                  : null
              }
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  // className={classes.submit}
                >
                  Sign In
              </Button>
              <Button
                  href="/"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Cancel
              </Button>
              <Grid style={{marginTop: '15px'}} container>
                <Grid item>
                  <Link  href="/login" variant="body2">
                    {"Already have an account? Log In"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
      <div className={classes.logo}>
        <img src={'https://ace-management.s3.us-east-2.amazonaws.com/yellow.png'} height={"80px"} />
      </div>
    </>

  );
};

export default SignUpForm;
