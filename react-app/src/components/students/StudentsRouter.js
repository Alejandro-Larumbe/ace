import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StudentsTable from './StudentsTable';
import { getStudents } from './actions';
import UserCard from '../user/UserCard';
import UserEdit from '../user/UserEdit2';
import { setCurrentStudentId, setView } from './actions';
import{setTitleView} from '../../store/actions/ui';



export default function StudentsRouter({ view, setTitle, currentStudentId, studentsById, getStudents }) {
  const firstName = useSelector(store => store.user.firstName)
  const dispatch = useDispatch();
  // const [mode, setMode] = useState(true)

  useEffect(() => {
    getStudents()
    dispatch(setTitleView('students'))
  }, [view, dispatch]);

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
            // setMode={setMode}
            // mode={mode}
            back={'table'}
          />
      )}
      {/* {(view === 'edit') && (
        <UserEdit
          user={studentsById[currentStudentId]}
          setView={setView}
        />
      )} */}
    </>
  )


}
