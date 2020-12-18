import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StudentsTable from './StudentsTable';
import { getStudents } from '../../store/actions/studentsActions';


const StudentsContainer = () => {
  const studentsById = useSelector(state => state.students.byId)
  const id = useSelector(state => state.user.id)
  const dispatch = useDispatch();


  return (
    <StudentsTable
      studentsById={studentsById}
      getStudentsById={() => dispatch(getStudents(id))}
    />
  )


}


export default StudentsContainer;
