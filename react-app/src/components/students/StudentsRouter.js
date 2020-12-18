import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StudentsTable from './StudentsTable';
import { getStudents } from './actions';
import UserCard from '../user/UserCard';
import UserEdit from '../user/UserEdit';
import { setCurrentStudentId, setView } from './actions';



export default function StudentsRouter({ view, currentStudentId, studentsById, getStudents }) {
  const dispatch = useDispatch();

  useEffect(() => {
    getStudents()
  }, []);

  return (
    <>
      {(!view || view === 'table') && (
        <StudentsTable
          studentsById={studentsById}
        // setCurrentStudentId={setCurrentStudentId}
        // setView={setView}
        />
      )}
      {(view === 'student') && (
        <UserCard
          user={studentsById[currentStudentId]}
          setView={setView}
          back={() => dispatch(setView('table'))}
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
