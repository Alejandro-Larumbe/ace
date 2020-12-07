import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect } from 'react-router-dom'
import { getInstructor } from '../store/actions/instructorActions'
import Navbar from './NavBar';

const StudentApp = ({ setAuthenticated, authenticated }) => {
  const type = useSelector(state => state.user.type)
  const instructorId = useSelector((state) => state.user.instructorId)
  const instructor = useSelector((state) => state.instructor)
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInstructor(instructorId))
  }, [])

  if (!authenticated) {
    return <Redirect to="/"/>
  }
  if (authenticated && type === 'instructors') {
    return <Redirect to="/instructors"/>
  }

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
  );
};

export default StudentApp;
