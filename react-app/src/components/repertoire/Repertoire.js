import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepertoire } from './actions';
import PiecesForm from './PiecesForm';
import PiecesUpdate from './PiecesUpdate';
import RepertoryFormContainer from './RepertoryForm';
import PieceTable from '../materialUIBundles/SortingTable';
import BooksTable from '../materialUIBundles/CollapsibleTable'
import Modal from '../materialUIBundles/Modal';
import ViewRepCard from '../materialUIBundles/CardWithActions'
import ViewRepertoire from './ViewRepertoire';
import SuccessSnackbar from '../materialUIBundles/SuccessSnackbar';

function Repertoire(props) {
  const {
    piecesById,
    booksById,
  } = props
  const [openModal, setOpenModal] = useState(false);
  const [pieceId, setPieceId] = useState('')
  const [bookId, setBookId] = useState('')
  const [mode, setMode] = useState()
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [repType, setRepType] = useState('piece')

  // const [ repType, setRepType ] = useState('')
  // const handleOpen = (value) => {
  //   value === 'forms' && setOpenForms(true);
  // };

  // const handleClose = (value) => {
  //   value === 'forms' && setOpenForms(false);
  // };
  console.log(mode, repType)

  return (
    <>
      <PieceTable
        {...props}
        byId={piecesById}
        type={'pieces'}
        setCurrentId={setPieceId}
        setMode={setMode}
        open={openModal}
        setOpen={setOpenModal}
        setRepType={setRepType}
      />
      <Modal
        open={openModal}
        setOpen={setOpenModal}

      >
        {
          (mode === "edit" || mode === "create") &&
          <RepertoryFormContainer
            {...props}
            open={openModal}
            setOpen={setOpenModal}
            book={booksById[bookId]}
            piece={piecesById[pieceId]}
            mode={mode}
            setMode={setMode}
            setSuccessMessage={setSuccessMessage}
            setOpenSnackbar={setOpenSnackbar}
            successMessage={successMessage}
            repType={repType}
            setRepType={setRepType}
            tab={mode === 'create' ? true : false}
          />
        }
        {
          mode === 'view' &&
          <ViewRepertoire
            mode={mode}
            setMode={setMode}
            setOpen={setOpenModal}
            book={booksById[bookId]}
            piece={piecesById[pieceId]}
            repType={repType}
            setRepType={setRepType}
          />

        }
        {/* <BooksTable type={'books'} data={Object.values(props.booksById)} /> */}
      </Modal>

      <SuccessSnackbar
        open={openSnackbar}
        setOpen={setOpenSnackbar}
        message={successMessage}
        setMessage={setSuccessMessage}
      />
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
