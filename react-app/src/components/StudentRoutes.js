import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import { getInstructor } from '../store/actions/studentsActions'
import Navbar from './NavBar'


const StudentRoutes = ({ setAuthenticated }) => {
  const instructorId = useSelector((state) => state.user.instructorId)
  const instructor = useSelector((state) => state.instructor)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInstructor(instructorId))
  }, [])

  console.log('instructorId', instructorId)

  return (
    <BrowserRouter>
      <Navbar
        setAuthenticated={setAuthenticated}
        instructor={instructor}
      />

    </BrowserRouter>

  )
}


export default StudentRoutes
