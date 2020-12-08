import React, { useState } from "react";
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';




const SignUpForm = ({ authenticated, setAuthenticated, open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  let { type } = useParams()
  if (type === 'students') type = 'adults'
  const instructorId = 1
  let history = useHistory();


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      let user = new FormData();
      user.append('first_name', firstName);
      user.append('last_name', lastName);
      user.append('email', email);
      user.append('password', password);
      user.append('type', type);
      user.append('instructor_id', instructorId );

      user = await dispatch(signUp(user));

      if (!user.errors) {
        setAuthenticated(true);
        history.push(`/${type}/${user.id}`)
      } else {
        setErrors(user.errors);
      }
    }
  };

  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };


  if (authenticated && type === "adults") {
    return <Redirect to={`/students`} />
  } else if (authenticated && type === "instructors") {
    return <Redirect to={`/${type}`} />
  }

  return (
    <div style={style}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <h1>{type} signup</h1>
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
        <Button onClick={onClose} color="primary">
          Cancel
          </Button>
        <Button type="submit" onClick={onClose} color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

const style = {
  width: '25%',
  heigth: 'auto'
}

export default SignUpForm;
