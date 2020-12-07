import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './NavBar';
import Students from './students/Students';
import User from './user/User.js';
import UserEdit from './user/UserEdit';

const InstructorApp = ({ authenticated, setAuthenticated }) => {
  const user = useSelector((state) => state.user)


  if (!authenticated) {
    return <Redirect to="/" />
  }
  if (authenticated && user.type === 'adults') {
    return <Redirect to="/students" />
  }

  return (
    <BrowserRouter basename="/instructors">
      <Navbar
        setAuthenticated={setAuthenticated}
        studioName={user.studioName}
        studioLogo={user.studioLogoUrl}
        profilePicUrl={user.profilePicUrl}
        type={user.type}
      />
      <Switch>
        <Route path="/students/:id/edit">
          <UserEdit />
        </Route>
        <Route path="/students/:id">
          <User />
        </Route>
        <Route path="/students" >
          <Students />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}


export default InstructorApp;
