import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { CardActions } from '@material-ui/core';
import Card from '../modules/CardWithHeader';
import Modal from '../modules/Modal';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { uploadResource } from './actions';
import Tabs from '@material-ui/core/Tab';
// import Tab from '@material-ui/core/Tab';
import Tab from '../modules/Tab'
import PiecesAdd from "./PiecesAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: '500px',

  },
  input: {
    display: 'none',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // overflow: 'auto'
  },
  progress: {
    width: '100%',
  }

}));

const TabOptions = [
  {
    label: 'Pieces',
    value: 1
  },
  {
    label: 'Books',
    value: 2
  },

]

export default function RepertoryForm(props) {
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [repertoryType, setRepertoryType] = useState(1)
  const [loading, setLoading] = useState(false)

  const classes = useStyles();
  const dispatch = useDispatch()
  const [progress, setProgress] = useState(0);


  const handleChange = (event, newValue) => {
    setRepertoryType(newValue);
  };


  const onSubmit = async e => {
    e.preventDefault()

  }

  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };

  useEffect(() => {


  }, []);


  return (
    <>
      <Modal
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        in={props.open}
      >
        <Card className={classes.root} variant="outlined"
          title={`Add Repertoire`}
          handleClose={props.handleClose}
        >
          <Tab
            value={repertoryType}
            handleChange={handleChange}
            options={TabOptions}

          />
        </Card>
        {/* </Fade> */}
      </Modal>
    </>
  )

}
