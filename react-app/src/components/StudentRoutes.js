import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect } from 'react-router-dom'
import { getInstructor } from '../store/actions/studentsActions'
import Navbar from './NavBar'


const StudentRoutes = ({ setAuthenticated }) => {
  const instructorId = useSelector((state) => state.user.instructorId)
  const instructor = useSelector((state) => state.instructor)
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getInstructor(instructorId))
  }, [])


  return (
    <BrowserRouter basename="/students">
      <Navbar
        setAuthenticated={setAuthenticated}
        studioName={instructor.studioName}
        studioLogo={instructor.studioLogoUrl}
        profilePicUrl={user.profilePicUrl}
        type={user.type}
      />
    </BrowserRouter>
  )
}


export default StudentRoutes
