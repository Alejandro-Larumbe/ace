import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import StudentTable from '../modularComponents/SortingTable';
import ViewStudentCard from '../modularComponents/CardWithActions';
import CardWithHeader from '../modularComponents/CardWithHeader';
import Modal from '../modularComponents/Modal';
import Student from '../user/UserView';
import StudentForm from './StudentForm';
import SuccessSnackbar from '../modularComponents/SuccessSnackbar';
import { deleteStudent } from './actions'


function Students(props) {
  const { getStudents, studentsById } = props
  const [currentStudentId, setCurrentStudentId] = useState('')
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [modalMode, setModalMode] = useState('')

  const dispatch = useDispatch();

  useEffect(() => {
    getStudents()
  }, [dispatch]);

  const onDelete = async() => {
    const data = await dispatch(deleteStudent(currentStudentId))
    console.log(data)
  if (!data.errors) {
    setModalMode('')
    setOpen(false)
    setSuccessMessage('Deleted Student Successfully')
    setOpenSnackbar(true)
    await getStudents()
    }
  }

  console.log(modalMode)

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
      >
        <>
        {
          (modalMode === 'view' && open === true) && (
            <ViewStudentCard
              avatar
              setOpen={setOpen}
              setMode={setModalMode}
              onDelete={onDelete}
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
                mode={modalMode}
                setMode={setModalMode}
                setOpen={setOpen}
                setOpenSnackbar={setOpenSnackbar}
                user={modalMode === 'edit' ? studentsById[currentStudentId] : null}
                setSuccessMessage={setSuccessMessage}
                getStudents={getStudents}
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
