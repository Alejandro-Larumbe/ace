import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepertoire } from './actions';
import PiecesForm from './PiecesForm';
import PiecesUpdate from './PiecesUpdate';
import RepertoryFormContainer from './RepertoryForm';
import PieceTable from '../modularComponents/SortingTable';

function Repertoire( props ) {
  const [openForms, setOpenForms] = useState(false);

  const handleOpen = (value) => {
    value === 'forms' && setOpenForms(true);
  };

  const handleClose = (value) => {
    value === 'forms' && setOpenForms(false);
  };


  return (
    <>
      <PieceTable {...props} byId={props.piecesById} type={'pieces'} handleOpen={handleOpen}/>
      <RepertoryFormContainer {...props} open={openForms} handleClose={handleClose}/>
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
