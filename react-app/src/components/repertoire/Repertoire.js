import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepertoire } from './actions';
import PiecesTable from './PiecesTable';
import PiecesForm from './PiecesForm';
import PiecesUpdate from './PiecesUpdate';
import RepertoryFormContainer from './RepertoryForm';

function Repertoire( props ) {
  const [openForms, setOpenForms] = useState(false);
  const { piecesById, booksById } = props

  const handleOpen = (value) => {
    // console.log(open)
    value === 'forms' && setOpenForms(true);
  };

  const handleClose = (value) => {
    value === 'forms' && setOpenForms(false);
  };


  return (
    <>
      <RepertoryFormContainer open={openForms} handleClose={handleClose}/>
      <PiecesTable piecesById={piecesById} booksById={booksById} handleOpen={handleOpen} />
    </>
  )
}


export default function RepertoireContainer() {
  const id = localStorage.getItem('user_id')
  const piecesById = useSelector(state => state.repertoire.piecesById)
  const booksById = useSelector(state => state.repertoire.booksById)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepertoire(id))
  }, [dispatch]);




  return (
    <Repertoire piecesById={piecesById} booksById={booksById} />
  )
}
