import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Paper from '@material-ui/core/Paper';
import { Select } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
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

}));

export default function UploadResource() {
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [resourceType, setResourceType] = useState(1)
  const instructorId = localStorage.getItem("user_id");
  const classes = useStyles();
  const dispatch = useDispatch()


  const handleType = e => {
    setResourceType(e.target.value);
  }

  const onSubmit = async e => {
    e.preventDefault()
    console.log((instructorId, title, url, resourceType))
    let data = new FormData();
    data.append('instructor_id', instructorId)
    data.append('title', title)
    data.append('url', url)
    data.append('resource_type_id', resourceType)
    await dispatch(uploadResource(data))
  }

  const onSelectFile = e => {
    console.log(e.target.files)
    setUrl(e.target.files[0]);
  }

  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };


  return (
    <>
      <Paper className={classes.root} variant="outlined" >
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
              >
                <option value={1}>Sheet Music</option>
                <option value={2}>Audio</option>
                <option value={3}>Video</option>
                {/* <option value={30}>Thirty</option> */}
              </Select>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Upload
            </Button>
          </List>
        </form>


      </Paper>

    </>
  )

}
