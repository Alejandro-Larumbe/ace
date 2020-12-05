import React from 'react';
import { useSelector } from 'react-redux'

import { Route, Redirect } from 'react-router-dom';

const InstructorApp = props => {
  const type = useSelector(state => state.user.type)

  if (!props.authenticated) {
    return <Redirect to="/"/>
  }
  if (props.authenticated && type === 'adults') {
    return <Redirect to="/students"/>
  }

  return (
    <Route {...props}/>
  );
};

export default InstructorApp;
