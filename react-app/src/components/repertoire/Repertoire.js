import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepertoire } from './actions';
import PiecesForm from './PiecesForm';
import PiecesUpdate from './PiecesUpdate';
import RepertoryFormContainer from './RepertoryForm';
import PieceTable from '../modularComponents/SortingTable';
import BooksTable from '../modularComponents/CollapsibleTable'
import Modal from '../modularComponents/Modal';
import ViewRepCard from '../modularComponents/CardWithActions'


function Repertoire(props) {
  const [openModal, setOpenModal] = useState(false);
  const [pieceId, setPieceId] = useState('')
  const [mode, setMode] = useState('')
  const [ repType, setRepType ] = useState('')
  // const handleOpen = (value) => {
  //   value === 'forms' && setOpenForms(true);
  // };

  // const handleClose = (value) => {
  //   value === 'forms' && setOpenForms(false);
  // };


  return (
    <>
      <PieceTable
        {...props}
        byId={props.piecesById}
        type={'pieces'}
        setCurrentId={setPieceId}
        setMode={setMode}
        open={openModal}
        setOpen={setOpenModal}
      />
      <Modal
        open={openModal}
        setOpen={setOpenModal}
      >
        {
          (mode === "edit" || mode==="create") &&
          <RepertoryFormContainer {...props} open={openModal} />
        }
        {
          (mode === 'view') &&
          <ViewRepCard
            setOpen={setOpenModal}
            setMode={setMode}
            title={'View Rep'}
          >
            {/* <Repertory/> */}
          </ViewRepCard>

        }
        {/* <BooksTable type={'books'} data={Object.values(props.booksById)} /> */}

      </Modal>
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
