import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudents } from '../../store/actions/studentsActions';

const Students = ({ getStudents, students }) => {


  useEffect(() => {
    getStudents();
  }, []);

  if (!students) {
    return <h1>No students yet</h1>
  }

  return (
  <h1>hi</h1>
  )
}



const StudentsContainer = () => {
  const students = useSelector(state => state.students)
  const id = useSelector(state => state.user.id)
  const dispatch = useDispatch();



  return (
    <Students
    students={students}
    getStudents={() => dispatch(getStudents(id))}
    />
  )


}


export default StudentsContainer;
