import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Students from './Students';
import { getStudents } from './actions';
import{setTitleView} from '../../store/actions/ui';


const StudentsContainer = () => {
  const studentsById = useSelector(state => state.students.byId)
  const [ instructorId ] = useState(localStorage.getItem('user_id'))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleView('students'))
  }, [dispatch, instructorId]);

  return (
    <Students
      studentsById={studentsById}
      getStudents={() => dispatch(getStudents(instructorId))}
    />
  )


}


export default StudentsContainer;
