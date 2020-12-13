import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './NavBar';
import Students from './students/Students';
import User from './user/User.js';
import UserEdit from './user/UserEdit';
import LessonCreate from '../components/lessons/LessonCreate'
import ScheduleContainer from '../components/schedule/ScheduleContainer';

const InstructorApp = ({ authenticated, setAuthenticated }) => {
  const user = useSelector((state) => state.user)


  if (!authenticated) {
    return <Redirect to="/" />
  }
  if (authenticated && user.type === 'adults') {
    return <Redirect to="/students" />
  }

  return (
    <BrowserRouter basename={'/instructors/'}>
      <Navbar
        setAuthenticated={setAuthenticated}
        user={ user }
      />
      <Switch>
        <Route path="/:instructorId/students/:id/edit">
          <UserEdit />
        </Route>
        <Route path="/:instructorId/students/:id">
          <User />
        </Route>
        <Route path="/:instructorId/students" >
          <Students />
        </Route>
        <Route path="/edit-profile" >
          <UserEdit />
        </Route>
        <Route path="/:id/lesson-create" >
          <LessonCreate />
        </Route>
        <Route path="/:id/schedule">
          <ScheduleContainer />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}


export default InstructorApp;
