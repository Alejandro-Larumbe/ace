import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepertoire } from './actions';
import PiecesTable from './PiecesTable';
import PiecesAdd from './PiecesAdd';
import PiecesUpdate from './PiecesUpdate';
import RepertoryFormContainer from './RepertoryForm';

function Repertoire( props ) {
  const [open, setOpen] = useState(false);
  const { piecesById, booksById } = props

  const handleOpen = () => {
    // console.log(open)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <RepertoryFormContainer open={open} handleClose={handleClose}/>
      {/* <PiecesAdd open={open} books={Object.values(booksById)} handleClose={handleClose} ></PiecesAdd> */}
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
