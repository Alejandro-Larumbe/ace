import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StudentsTable from './StudentsTable';
import { getStudents } from '../../store/actions/studentsActions';


const StudentsContainer = () => {
  const studentsById = useSelector(state => state.students.byId)
  const id = useSelector(state => state.user.id)
  const dispatch = useDispatch();
  const [ view, setView ]= useState('table')

  useEffect(() => {
    dispatch(getStudents(id))
  }, []);


  return (
    <StudentsTable
      studentsById={studentsById}
    />
  )


}


export default StudentsContainer;
