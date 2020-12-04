import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




const SignUpForm = ({ authenticated, setAuthenticated, open, type, instructorId, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
 // const [open, setOpen] = React.useState(false);



  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };


  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Signup</DialogTitle>
          <DialogContent>
          <form onSubmit={onSignUp}>
            <TextField
              autoFocus
              margin="dense"
              type="text"
              label="first name"
              name="first_name"
              onChange={updateField(setFirstName)}
              value={firstName}
              required={true}
            />
            <TextField
              autoFocus
              margin="dense"
              type="text"
              label="last name"
              name="last_name"
              onChange={updateField(setLastName)}
              value={lastName}
              required={true}
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
            />
            <input
              style={{ visibility: 'hidden' }}
              type="text"
              name="type"
              value={type}
              required={true}
            ></input>
            {
              instructorId
                ? <input
                  style={{ visibility: 'hidden' }}
                  type="text"
                  name="instructor_id"
                  value={instructorId}
                ></input>
                : null
            }
          </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
          </Button>
            <Button type="submit" onClick={onClose} color="primary">
              Subscribe
          </Button>
          </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignUpForm;
