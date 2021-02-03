import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Card from '../modularComponents/CardWithHeader';
import Modal from '../modularComponents/Modal';
import { makeStyles } from '@material-ui/core/styles';

import Tab from '../modularComponents/Tab'
import PiecesForm from "./PiecesForm";


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
        onClose={() => props.handleClose('forms')}
        in={props.open}
      >
        <Card className={classes.root} variant="outlined"
          title={`Add Repertoire`}
          handleClose={() => props.handleClose('forms')}
        >
          <Tab
            value={repertoryType}
            handleChange={handleChange}
            options={TabOptions}
          />
          {
            repertoryType === 1 && <PiecesForm pieces={Object.values(props.piecesById)} books={Object.values(props.booksById)} {...props}/>
          }

        </Card>

      </Modal>
    </>
  )

}


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
