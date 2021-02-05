import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { setView, setCurrentStudentId } from './actions';
import { setUserCardMode } from '../../store/actions/ui'
import { makeStyles } from '@material-ui/core/styles';
import StudentTable from '../modularComponents/SortingTable';
import ViewStudentCard from '../modularComponents/CardWithActions';
import CardWithHeader from '../modularComponents/CardWithHeader';
import Modal from '../modularComponents/Modal';
import Student from '../user/UserView';
import StudentForm from '../user/UserForm';
import SuccessSnackbar from '../modularComponents/SuccessSnackbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // maxWidth: 700,
    // width: '100%',
    margin: `auto`,
    width: '50%',
    position: 'relative'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  toolbar: theme.mixins.toolbar,
  fab: {
    position: 'absolute',
    bottom: theme.spacing(-7),
    right: theme.spacing(-6),
  }
}));

function Students(props) {
  const { getStudents, studentsById } = props
  const [currentStudentId, setCurrentStudentId] = useState('')
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [modalMode, setModalMode] = useState('')
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    getStudents()
  }, [dispatch]);

  console.log(modalMode)

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
      >
        <>
        {
          modalMode === 'view' && (
            <ViewStudentCard
              avatar
              setOpen={setOpen}
              setMode={setModalMode}
              title={`${studentsById[currentStudentId].firstName} ${studentsById[currentStudentId].lastName}`}
              src={studentsById[currentStudentId].profilePicUrl}
            >
              <Student user={studentsById[currentStudentId]}/>
            </ViewStudentCard>
          )
        }
        {
          (modalMode === 'edit' || modalMode === 'create') && (
            <CardWithHeader
              title={modalMode === 'edit' ? 'Edit Student' : "Register Student"}
              setOpen={setOpen}
              >
              <StudentForm
                user={modalMode === 'edit' ? studentsById[currentStudentId] : null}
                mode={modalMode}
                setMode={setModalMode}
                setOpenSnackbar={setOpenSnackbar}
                setSuccessMessage={setSuccessMessage}
                setOpen={setOpen}
              />
            </CardWithHeader>
          )
        }
        </>
      </Modal>
      <StudentTable
        type={'students'}
        byId={studentsById}
        // className={classes.paper}
        setCurrentId={setCurrentStudentId}
        setMode={setModalMode}
        open={open}
        setOpen={setOpen}
      />
      <SuccessSnackbar
        open={openSnackbar}
        setOpen={setOpenSnackbar}
        message={successMessage}
        setMessage={setSuccessMessage}
      />
    </>
  );
}

export default Students;
