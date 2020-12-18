import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StudentsTable from './StudentsTable';
import { getStudents } from '../../store/actions/studentsActions';
import UserCard from '../user/UserCard';
import UserEdit from '../user/UserEdit';

const StudentsContainer = () => {
  const studentsById = useSelector(state => state.students.byId)
  const id = useSelector(state => state.user.id)
  const dispatch = useDispatch();
  const [view, setView] = useState('table')
  const [currentStudentId, setCurrentStudentId] = useState()

  useEffect(() => {
    dispatch(getStudents(id))
  }, []);


  return (
    <>
      {(view === 'table') && (
        <StudentsTable
          studentsById={studentsById}
          setCurrentStudentId={setCurrentStudentId}
          setView={setView}
        />
      )}
      {(view === 'student') && (
        <UserCard
          user={studentsById[currentStudentId]}
          setView={setView}
        />
      )}
      {(view === 'edit') && (
        <UserEdit
          user={studentsById[currentStudentId]}
          setView={setView}
        />
      )}
    </>
  )


}


export default StudentsContainer;
