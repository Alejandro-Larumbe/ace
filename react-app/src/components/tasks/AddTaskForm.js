import React, { useState } from "react";
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Fade from '../../Fade';
import { Select } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  modal: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: '22vh',
    maxWidth: 800,
    margin: 'auto',
    position: 'relative'
  },
}))

export default function AddTaskForm({ open, handleClose, id }) {
  const [duration, setDuration] = useState('');
  const [frequency, setFrequency] = useState(1);
  const [instructions, setInstructions] = useState('');
  const [typeId, setTypeId] = useState(1);
  const [lessonId] = useState(id);
  const [pieceId, setPieceId] = useState('');
  const [bookId, setBookId] = useState('');
  const [isCompleted] = useState(false)
  const classes = useStyles();


  const handleType = e => {
    setTypeId(e.target.value);
    console.log(typeId)
  }

  const handleChange = (event) => {
    setFrequency(event.target.value);
  };

  return (
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
            Task
            </Typography>
          <FormControl component="fieldset">
            <InputLabel id="task-type">Task Type</InputLabel>
            <Select
              label='Task Type'
              id='task-type'
              value={typeId}
              onChange={handleType}
            >
              <option value={1}>Piece</option>
              <option value={2}>Theory</option>
              <option value={3}>Ear Training</option>
            </Select>
            <FormLabel component="frequency">frequency</FormLabel>
            <RadioGroup row aria-label="frequency" name="frequency" value={frequency} onChange={handleChange}>
              <FormControlLabel value={1} control={<Radio />} label="1" />
              <FormControlLabel value={2} control={<Radio />} label="2" />
              <FormControlLabel value={3} control={<Radio />} label="3" />
              <FormControlLabel value={4} control={<Radio />} label="4" />
              <FormControlLabel value={5} control={<Radio />} label="5" />
              <FormControlLabel value={6} control={<Radio />} label="6" />
              <FormControlLabel value={7} control={<Radio />} label="7" />
            </RadioGroup>

          </FormControl>
        </Paper>
      </Fade>
    </Modal>
  )

}
