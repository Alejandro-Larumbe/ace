import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Card from '../materialUIBundles/CardWithHeader';
import Modal from '../materialUIBundles/Modal';
import { makeStyles } from '@material-ui/core/styles';
import CardWithHeader from '../materialUIBundles/CardWithHeader';
import Tab from '../materialUIBundles/Tab'
import PiecesForm from "./PiecesForm";


export default function RepertoryForm(props) {
  const {
    repType,
    setRepType,
    tab,
    mode,
    setOpen
  } = props
  // const [title, setTitle] = useState();




  const handleChange = (event, newValue) => {
    setRepType(newValue);
  };


  const onSubmit = async e => {
    e.preventDefault()

  }

  const updateField = (callback) => (e) => {
    callback(e.target.value);
  };

  useEffect(() => {


  }, []);

  console.log('reptype', repType)

  return (
    <>
      <CardWithHeader
        setOpen={setOpen}
        title={`${mode==='edit' ? 'Edit' : 'Add'} ${mode==='book' ? 'Book' : 'Piece'}`}
      >
        {tab &&
          <Tab
            value={repType}
            handleChange={handleChange}
            options={TabOptions}
          />
        }
        {
          repType === 'piece' &&
          <PiecesForm
            {...props}
            books={Object.values(props.booksById)}

            // pieces={Object.values(props.piecesById)}
          />
        }
      </CardWithHeader>
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
    value: 'piece'
  },
  {
    label: 'Books',
    value: 'book'
  },

]
