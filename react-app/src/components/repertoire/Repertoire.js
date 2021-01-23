import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepertoire } from './actions';
import PiecesTable from './PiecesTable';
import PiecesAdd from './PiecesAdd';
import PiecesUpdate from './PiecesUpdate';


function Repertoire({ piecesById, booksById }) {
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>

      <PiecesAdd open={open} handleClose={handleClose} ></PiecesAdd>
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
  }, []);


  return (
    <Repertoire piecesById={piecesById} booksById={booksById} />
  )
}
