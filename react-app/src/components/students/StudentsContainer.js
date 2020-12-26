import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudents } from './actions';
import StudentsRouter from './StudentsRouter';

const StudentsContainer = () => {
  const studentsById = useSelector(state => state.students.byId)
  const id = useSelector(state => state.user.id)
  const view = useSelector(state => state.students.view)
  // const mode = useSelector(state => state.students.mode)
  const currentStudentId = useSelector(state => state.students.currentStudentId)
  const dispatch = useDispatch();



  return (
    <StudentsRouter
      view={view}
      currentStudentId={currentStudentId}
      studentsById={studentsById}
      getStudents={() => dispatch(getStudents(id))}
    />
  )


}


export default StudentsContainer;
