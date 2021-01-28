import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Paper from '@material-ui/core/Paper';
import { Select, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, CardActions, CardHeader } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Fade from '../../Fade';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import AddIcon from '@material-ui/icons/Add';
import { uploadResource } from './actions';

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

export default function UploadResource(props) {
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [resourceType, setResourceType] = useState(1)
  const [loading, setLoading] = useState(false)

  const instructorId = localStorage.getItem("user_id");
  const classes = useStyles();
  const dispatch = useDispatch()
  const [progress, setProgress] = useState(0);


  const handleType = e => {
    setResourceType(e.target.value);
  }

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    // console.log((instructorId, title, url, resourceType))
    let data = new FormData();
    data.append('instructor_id', instructorId)
    data.append('title', title)
    data.append('url', url)
    data.append('resource_type_id', resourceType)
    await dispatch(uploadResource(data))
    setLoading(false)
    props.handleClose()
  }

  const onSelectFile = e => {
    console.log(e.target.files)
    setUrl(e.target.files[0]);
  }

  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Card className={classes.root} variant="outlined" >
            <CardHeader
              title={"Upload Resource"}
              action={
                <>
                  <IconButton onClick={props.handleClose} aria-label="add to favorites">
                    <CloseIcon />
                  </IconButton>
                </>
              }
            />
            <form onSubmit={onSubmit}>
              <List>
                <ListItem>
                  <TextField
                    type="text"
                    label="title"
                    name="title"
                    onChange={updateField(setTitle)}
                    value={title}
                    required={true}
                    fullWidth
                  />
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <Select
                    label="Select Type"
                    id="select-type"
                    value={resourceType}
                    onChange={handleType}
                    fullWidth

                  >
                    <option value={1}>Sheet Music</option>
                    <option value={2}>Audio</option>
                    <option value={3}>Video</option>
                    {/* <option value={30}>Thirty</option> */}
                  </Select>
                </ListItem>
                <ListItem>
                  <label htmlFor="contained-button-file">
                    <input
                      accept={resourceType === 1 ?
                        ".pdf" :
                        resourceType === 2 ?
                          "audio/*" :
                          resourceType === 3 ?
                            "video/*" : null
                      }
                      className={classes.input}
                      id="contained-button-file"
                      name="contained-button-file"
                      onChange={onSelectFile}
                      type="file"
                    />
                    <Fab
                      color="secondary"
                      size="small"
                      component="span"
                      aria-label="add"
                      variant="extended"
                    >
                      <AddIcon /> Select File
                    </Fab>
                  </label>
                </ListItem>
              </List>
              <CardActions>
                {loading ?
                <>
                  <Typography>
                    uploading...
                  </Typography>
                  <CircularProgress color="secondary" />
                  </>
                  :
                  (
                    <Button
                      type="submit"
                      // fullWidth
                      // variant="contained"
                      color="primary"
                    >
                      Upload
                    </Button>
                  )
                }


              </CardActions>
            </form>

          </Card>
        </Fade>
      </Modal>
    </>
  )

}
