import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StudentsTable from './StudentsTable';
import { getStudents } from '../../store/actions/studentsActions';
import UserCard from '../user/UserCard';
import UserEdit from '../user/UserEdit';
import StudentsRouter from './StudentsRouter';

const StudentsContainer = () => {
  const studentsById = useSelector(state => state.students.byId)
  const id = useSelector(state => state.user.id)
  const view = useSelector(state => state.students.view || 'table')
  const currentStudentId = useSelector(state => state.students.currentStudentId)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents(id))
  }, [view]);


  return (
    <StudentsRouter
    view={view}
    currentStudentId={currentStudentId}
    getStudentsById={() =>dispatch(getStudents(id))}
    />
q
  )


}


export default StudentsContainer;
